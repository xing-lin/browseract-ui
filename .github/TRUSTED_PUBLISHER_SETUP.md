# NPM Trusted Publisher 配置指南

## 什么是 Trusted Publisher？

Trusted Publisher 是 npm 提供的一种基于 OpenID Connect (OIDC) 的安全发布方式，无需管理长期的 NPM_TOKEN。

## GitHub Actions 配置

### 1. 工作流权限

确保工作流具有必要的权限：

```yaml
permissions:
  contents: write
  packages: write
  id-token: write # ⚠️ 这个权限是 Trusted Publisher 必需的
  pull-requests: write
```

### 2. Node.js 设置

**不要**配置 `registry-url`，这会创建需要 token 的 `.npmrc` 文件：

```yaml
- name: Use Node.js
  uses: actions/setup-node@v4
  with:
    node-version: 24
    # ❌ 不要添加 registry-url: 'https://registry.npmjs.org'
```

### 3. npm 配置

创建不包含认证信息的 `.npmrc`，但启用 provenance：

```yaml
- name: Configure npm for Trusted Publishing
  run: |
    rm -f ~/.npmrc .npmrc || true
    cat > ~/.npmrc << 'EOF'
registry=https://registry.npmjs.org/
provenance=true
EOF
```

### 4. semantic-release 配置

设置环境变量，但**不设置** `NODE_AUTH_TOKEN`：

```yaml
- name: Run semantic-release
  env:
    GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
    NPM_CONFIG_PROVENANCE: true
    # ❌ 不要设置 NODE_AUTH_TOKEN
  run: npx semantic-release
```

## semantic-release 配置 (.releaserc)

关键配置：跳过 npm 插件的预认证检查。

```json
{
  "branches": ["main"],
  "plugins": [
    ["@semantic-release/commit-analyzer", {}],
    ["@semantic-release/release-notes-generator", {}],
    ["@semantic-release/changelog", {}],
    [
      "@semantic-release/npm",
      {
        "npmPublish": true,
        "pkgRoot": ".",
        "tarballDir": "dist"
      }
    ],
    [
      "@semantic-release/git",
      {
        "assets": ["package.json", "CHANGELOG.md"],
        "message": "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
      }
    ]
  ],
  "verifyConditions": [
    "@semantic-release/changelog",
    "@semantic-release/git"
    // ⚠️ 注意：不包含 @semantic-release/npm
    // 这样可以跳过 npm 的预认证检查
  ]
}
```

**重点**：`verifyConditions` 数组中**不包含** `@semantic-release/npm`，这样可以跳过预认证检查。npm 插件仍然会在 `prepare` 和 `publish` 阶段运行，那时 OIDC token 可用。

## npm 网站配置

**必须**在 npm 网站上配置 Trusted Publisher：

1. 登录 [npmjs.com](https://www.npmjs.com)
2. 进入包设置页面：https://www.npmjs.com/package/browseract-ui/access
3. 点击 **Publishing access** 标签
4. 点击 **Add a new Trusted Publisher**
5. 填写信息：
   - **Provider**: GitHub Actions
   - **Repository owner**: `xing-lin`
   - **Repository name**: `browseract-ui`
   - **Workflow file**: `release.yml`
   - **Environment name**: 留空（如果工作流没有使用 environment）
6. 保存

## 工作原理

1. GitHub Actions 在运行时会自动生成一个短期的 OIDC token
2. 当 `npm publish` 运行时（通过 semantic-release），npm CLI 会：
   - 检测到 `provenance=true` 配置
   - 自动从 GitHub Actions 环境获取 OIDC token
   - 使用该 token 向 npm registry 认证
3. npm registry 验证 OIDC token 与配置的 Trusted Publisher 匹配
4. 发布成功，并自动生成 provenance 证明

## 常见问题

### Q: 为什么会出现 "Invalid npm token" 错误？

A: 这通常是因为：

- 没有在 npm 网站上配置 Trusted Publisher
- `setup-node` 步骤配置了 `registry-url`，导致创建了需要 token 的 `.npmrc`
- semantic-release 的 npm 插件在 `verifyConditions` 阶段尝试预认证

### Q: 如何验证配置是否正确？

A: 检查以下几点：

- ✅ 工作流有 `id-token: write` 权限
- ✅ `setup-node` 没有 `registry-url` 配置
- ✅ 环境变量设置了 `NPM_CONFIG_PROVENANCE: true`
- ✅ `.releaserc` 的 `verifyConditions` 不包含 `@semantic-release/npm`
- ✅ npm 网站上已配置 Trusted Publisher

### Q: 还需要 NPM_TOKEN secret 吗？

A: **不需要**。Trusted Publisher 完全不使用长期 token，这正是它的优势。

## 安全优势

- ✅ 无需管理长期的 npm token
- ✅ 每次发布都使用短期的 OIDC token（几分钟后过期）
- ✅ 自动生成 provenance 证明，用户可以验证包的来源
- ✅ 降低 token 泄露风险

## 参考资料

- [npm Trusted Publishers](https://docs.npmjs.com/generating-provenance-statements)
- [GitHub OIDC](https://docs.github.com/en/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect)
- [semantic-release npm plugin](https://github.com/semantic-release/npm)
