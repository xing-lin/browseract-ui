import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Client/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'select',
      options: [false, true, 'indeterminate'],
      description:
        '选中状态：false（未选中）、true（选中）、indeterminate（半选）',
    },
    disabled: {
      control: 'boolean',
      description: '是否禁用',
    },
    required: {
      control: 'boolean',
      description: '是否必填',
    },
    children: {
      control: 'text',
      description: '子元素（标签内容），如果提供了会自动用 Label 组件包裹',
    },
    onCheckedChange: {
      action: 'checked-change',
      description: '值变化时的回调函数',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

/**
 * ## 默认复选框
 */
export const Default: Story = {
  args: {},
};

/**
 * ## 选中状态
 */
export const Checked: Story = {
  args: {
    checked: true,
  },
};

/**
 * ## 带标签
 */
export const WithLabel: Story = {
  args: {
    children: '接受服务条款',
  },
};

/**
 * ## 选中状态（带标签）
 */
export const CheckedWithLabel: Story = {
  args: {
    checked: true,
    children: '我已阅读并同意',
  },
};

/**
 * ## 半选状态（Indeterminate）
 */
export const Indeterminate: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Checkbox checked="indeterminate">半选状态</Checkbox>
      <Checkbox
        checked="indeterminate"
        disabled
      >
        半选状态（禁用）
      </Checkbox>
    </div>
  ),
};

/**
 * ## 禁用状态
 */
export const Disabled: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Checkbox disabled>禁用（未选中）</Checkbox>
      <Checkbox
        checked
        disabled
      >
        禁用（已选中）
      </Checkbox>
      <Checkbox
        checked="indeterminate"
        disabled
      >
        禁用（半选）
      </Checkbox>
    </div>
  ),
};

/**
 * ## 受控组件
 */
export const Controlled: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [checked, setChecked] = React.useState<boolean | 'indeterminate'>(
      false,
    );

    const getStatusText = () => {
      if (checked === 'indeterminate') return '半选';
      return checked ? '选中' : '未选中';
    };

    return (
      <div className="space-y-4">
        <Checkbox
          checked={checked}
          onCheckedChange={(value) => setChecked(value)}
        >
          受控复选框（当前状态: {getStatusText()}）
        </Checkbox>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setChecked(false)}
            className="bg-muted rounded-md px-3 py-1 text-sm"
          >
            设为未选中
          </button>
          <button
            type="button"
            onClick={() => setChecked('indeterminate')}
            className="bg-muted rounded-md px-3 py-1 text-sm"
          >
            设为半选
          </button>
          <button
            type="button"
            onClick={() => setChecked(true)}
            className="bg-muted rounded-md px-3 py-1 text-sm"
          >
            设为选中
          </button>
        </div>
        <p className="text-muted-foreground text-sm">
          点击复选框或按钮查看状态变化
        </p>
      </div>
    );
  },
};

/**
 * ## 交互式示例
 */
export const Interactive: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [checked, setChecked] = React.useState<boolean | 'indeterminate'>(
      false,
    );

    const getStatusEmoji = () => {
      if (checked === 'indeterminate') return '➖ 半选';
      return checked ? '✅ 已选中' : '❌ 未选中';
    };

    return (
      <div className="space-y-4">
        <Checkbox
          checked={checked}
          onCheckedChange={(value) => setChecked(value)}
        >
          点击我切换状态
        </Checkbox>
        <div className="space-y-2">
          <p className="text-muted-foreground text-sm">
            当前状态: {getStatusEmoji()}
          </p>
        </div>
      </div>
    );
  },
};

/**
 * ## 多选列表
 */
export const Multiple: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [items, setItems] = React.useState({
      apple: false,
      banana: false,
      orange: false,
      grape: false,
    });

    const handleChange = (key: keyof typeof items) => (checked: boolean) => {
      setItems((prev) => ({ ...prev, [key]: checked }));
    };

    const selectedCount = Object.values(items).filter(Boolean).length;
    const totalCount = Object.keys(items).length;
    const allSelected = selectedCount === totalCount;
    const someSelected = selectedCount > 0 && selectedCount < totalCount;

    // 计算全选 checkbox 的状态
    const selectAllChecked: boolean | 'indeterminate' = allSelected
      ? true
      : someSelected
        ? 'indeterminate'
        : false;

    const handleSelectAll = (checked: boolean | 'indeterminate') => {
      const isChecked = checked === true;
      setItems({
        apple: isChecked,
        banana: isChecked,
        orange: isChecked,
        grape: isChecked,
      });
    };

    return (
      <div className="space-y-4">
        <div className="space-y-3">
          <Checkbox
            checked={selectAllChecked}
            onCheckedChange={handleSelectAll}
          >
            {allSelected
              ? '取消全选'
              : someSelected
                ? '全选（部分已选）'
                : '全选'}
          </Checkbox>
          <div className="ml-6 flex flex-col gap-2 border-l-2 pl-4">
            <Checkbox
              checked={items.apple}
              onCheckedChange={handleChange('apple')}
            >
              苹果
            </Checkbox>
            <Checkbox
              checked={items.banana}
              onCheckedChange={handleChange('banana')}
            >
              香蕉
            </Checkbox>
            <Checkbox
              checked={items.orange}
              onCheckedChange={handleChange('orange')}
            >
              橙子
            </Checkbox>
            <Checkbox
              checked={items.grape}
              onCheckedChange={handleChange('grape')}
            >
              葡萄
            </Checkbox>
          </div>
        </div>
        <p className="text-muted-foreground text-sm">
          已选择 {selectedCount} / {totalCount} 项
          {someSelected && '（部分选中）'}
        </p>
      </div>
    );
  },
};

/**
 * ## 表单示例
 */
export const FormExample: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [formData, setFormData] = React.useState({
      terms: false,
      privacy: false,
      newsletter: false,
    });

    const handleChange = (key: keyof typeof formData) => (checked: boolean) => {
      setFormData((prev) => ({ ...prev, [key]: checked }));
    };

    const canSubmit = formData.terms && formData.privacy;

    return (
      <div className="space-y-4">
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            alert('表单提交成功！');
          }}
        >
          <div className="space-y-3">
            <Checkbox
              id="terms"
              checked={formData.terms}
              onCheckedChange={handleChange('terms')}
              required
            >
              我已阅读并接受{' '}
              <a
                href="#"
                className="text-primary underline"
                onClick={(e) => e.preventDefault()}
              >
                服务条款
              </a>
            </Checkbox>
            <Checkbox
              id="privacy"
              checked={formData.privacy}
              onCheckedChange={handleChange('privacy')}
              required
            >
              我已阅读并同意{' '}
              <a
                href="#"
                className="text-primary underline"
                onClick={(e) => e.preventDefault()}
              >
                隐私政策
              </a>
            </Checkbox>
            <Checkbox
              id="newsletter"
              checked={formData.newsletter}
              onCheckedChange={handleChange('newsletter')}
            >
              订阅邮件通知（可选）
            </Checkbox>
          </div>
          <button
            type="submit"
            disabled={!canSubmit}
            className="bg-primary text-primary-foreground rounded-md px-4 py-2 disabled:opacity-50"
          >
            提交
          </button>
        </form>
        <div className="bg-muted rounded-md p-3 text-sm">
          <p className="font-medium">表单状态：</p>
          <ul className="mt-1 list-inside list-disc space-y-1">
            <li>服务条款: {formData.terms ? '✅' : '❌'}</li>
            <li>隐私政策: {formData.privacy ? '✅' : '❌'}</li>
            <li>邮件通知: {formData.newsletter ? '✅' : '❌'}</li>
            <li>可提交: {canSubmit ? '✅' : '❌'}</li>
          </ul>
        </div>
      </div>
    );
  },
};

/**
 * ## 必填项
 */
export const Required: Story = {
  render: () => (
    <div className="space-y-4">
      <Checkbox required>
        必选项 <span className="text-destructive">*</span>
      </Checkbox>
      <Checkbox>可选项</Checkbox>
    </div>
  ),
};

/**
 * ## 不同尺寸
 */
export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Checkbox className="size-3">小尺寸 (12px)</Checkbox>
      <Checkbox className="size-4">默认尺寸 (16px)</Checkbox>
      <Checkbox className="size-5">大尺寸 (20px)</Checkbox>
    </div>
  ),
};

/**
 * ## 复杂标签内容
 */
export const ComplexLabel: Story = {
  render: () => (
    <div className="space-y-4">
      <Checkbox>
        <div className="space-y-1">
          <div className="font-medium">高级功能</div>
          <div className="text-muted-foreground text-sm">
            启用后将获得更多高级功能
          </div>
        </div>
      </Checkbox>
      <Checkbox>
        <div className="flex items-center gap-2">
          <span className="font-medium">通知设置</span>
          <span className="text-muted-foreground text-sm">(推荐)</span>
        </div>
      </Checkbox>
    </div>
  ),
};

/**
 * ## 错误状态
 */
export const ErrorState: Story = {
  render: () => (
    <div className="space-y-4">
      <Checkbox
        aria-invalid
        className="aria-invalid:border-destructive"
      >
        带有错误状态的复选框
      </Checkbox>
      <p className="text-destructive text-sm">请至少选择一个选项</p>
    </div>
  ),
};
