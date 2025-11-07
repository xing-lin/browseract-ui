export type ButtonType = 'primary' | 'default' | 'dashed' | 'text' | 'link';
export type ButtonSize = 'small' | 'middle' | 'large';
export type ButtonShape = 'default' | 'circle' | 'round';
export type ButtonIconPosition = 'start' | 'end';

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  /**
   * 按钮类型
   */
  type?: ButtonType;
  /**
   * 按钮尺寸, 默认 middle
   */
  size?: ButtonSize;
  /**
   * 按钮形状, 默认 default
   */
  shape?: ButtonShape;
  /**
   * 危险按钮
   */
  danger?: boolean;
  /**
   * 幽灵按钮
   */
  ghost?: boolean;
  /**
   * 加载状态
   */
  loading?: boolean;
  /**
   * 禁用状态
   */
  disabled?: boolean;
  /**
   * 按钮内容
   */
  children?: React.ReactNode;
  /**
   * 点击事件
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  /**
   * 按钮图标
   */
  icon?: React.ReactNode;
  /**
   * 图标位置
   */
  iconPosition?: ButtonIconPosition;
  /**
   * 按钮宽度
   */
  block?: boolean;
  /**
   * 按钮 HTML 类型
   */
  htmlType?: 'button' | 'submit' | 'reset';
}
