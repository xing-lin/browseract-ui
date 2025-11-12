import * as DialogPrimitive from '@radix-ui/react-dialog';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import { Button } from '../buttons/Button';
import { ButtonProps } from '../buttons/button.types';
import { StatusIcon } from '../status/StatusIcon';
import { dialogStyles, getDialogContentStyle } from './dialog-shared';

/**
 * Dialog/AlertDialog 共享的基础 Props
 */
export interface BaseDialogProps {
  children?: React.ReactNode;
  trigger?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  footer?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  defaultOpen?: boolean;
  contentClassName?: string;
  headerClassName?: string;
  footerClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  onConfirm?: () => void;
  onClose?: () => void;
  onCancel?: () => void;
  footerDivider?: boolean;
  confirmButtonProps?: ButtonProps;
  cancelButtonProps?: ButtonProps;
  width?: number;
  status?: 'success' | 'warning' | 'error' | 'info' | 'default';
  showCloseButton?: boolean;
}

/**
 * Dialog UI Primitives 接口
 */
export interface DialogPrimitivesType {
  Root: React.ComponentType<React.ComponentProps<typeof DialogPrimitive.Root>>;
  Trigger: React.ComponentType<
    React.ComponentProps<typeof DialogPrimitive.Trigger>
  >;
  Content: React.ComponentType<
    React.ComponentProps<typeof DialogPrimitive.Content> & {
      showCloseButton?: boolean;
    }
  >;
  Header: React.ComponentType<React.HTMLAttributes<HTMLDivElement>>;
  Footer: React.ComponentType<React.HTMLAttributes<HTMLDivElement>>;
  Title: React.ComponentType<
    React.ComponentProps<typeof DialogPrimitive.Title>
  >;
  Description: React.ComponentType<
    React.ComponentProps<typeof DialogPrimitive.Description>
  >;
  Close: React.ComponentType<
    React.ComponentProps<typeof DialogPrimitive.Close>
  >;
}

/**
 * AlertDialog UI Primitives 接口
 */
export interface AlertDialogPrimitivesType {
  Root: React.ComponentType<
    React.ComponentProps<typeof AlertDialogPrimitive.Root>
  >;
  Trigger: React.ComponentType<
    React.ComponentProps<typeof AlertDialogPrimitive.Trigger>
  >;
  Content: React.ComponentType<
    React.ComponentProps<typeof AlertDialogPrimitive.Content>
  >;
  Header: React.ComponentType<React.HTMLAttributes<HTMLDivElement>>;
  Footer: React.ComponentType<React.HTMLAttributes<HTMLDivElement>>;
  Title: React.ComponentType<
    React.ComponentProps<typeof AlertDialogPrimitive.Title>
  >;
  Description: React.ComponentType<
    React.ComponentProps<typeof AlertDialogPrimitive.Description>
  >;
  Action: React.ComponentType<
    React.ComponentProps<typeof AlertDialogPrimitive.Action>
  >;
  Cancel: React.ComponentType<
    React.ComponentProps<typeof AlertDialogPrimitive.Cancel>
  >;
}

/**
 * 联合类型 - Dialog 或 AlertDialog 的 Primitives
 */
export type DialogPrimitives = DialogPrimitivesType | AlertDialogPrimitivesType;

interface BaseDialogComponentProps extends BaseDialogProps {
  primitives: DialogPrimitives;
  type: 'dialog' | 'alert-dialog';
  onlyConfirmButton: boolean;
}

/**
 * Dialog 和 AlertDialog 的共享基础实现
 * 通过传入不同的 primitives 来渲染不同的 UI 组件
 */
export function BaseDialogComponent({
  onlyConfirmButton = false,
  children,
  trigger,
  title,
  description,
  footer,
  open,
  onOpenChange,
  defaultOpen,
  contentClassName,
  headerClassName,
  footerClassName,
  titleClassName,
  descriptionClassName,
  onConfirm,
  onClose,
  onCancel,
  footerDivider,
  confirmButtonProps,
  cancelButtonProps,
  width = 600,
  status = 'default',
  showCloseButton,
  primitives,
  type,
}: BaseDialogComponentProps) {
  const isDanger = ['error', 'warning'].includes(status);

  const {
    type: confirmButtonType = 'primary',
    children: confirmButtonChildren = 'Confirm',
    ...confirmButtonPropsRest
  } = {
    type: confirmButtonProps?.danger || isDanger ? 'default' : 'primary',
    danger: isDanger,
    children: 'Confirm',
    ...(confirmButtonProps || {}),
  };

  const {
    type: cancelButtonType = 'default',
    children: cancelButtonChildren = 'Cancel',
    ...cancelButtonPropsRest
  } = {
    type: 'default',
    children: 'Cancel',
    ...(cancelButtonProps || {}),
  };

  const { Root, Trigger, Content, Header, Footer, Title, Description } =
    primitives;

  const isDialog = type === 'dialog';
  const isAlertDialog = type === 'alert-dialog';

  // Dialog 使用 onClose，AlertDialog 使用 onCancel
  const handleCancel = isDialog ? onClose : onCancel;

  // 类型保护：获取特定类型的组件
  const Close = isDialog
    ? (primitives as DialogPrimitivesType).Close
    : undefined;
  const Action = isAlertDialog
    ? (primitives as AlertDialogPrimitivesType).Action
    : undefined;
  const Cancel = isAlertDialog
    ? (primitives as AlertDialogPrimitivesType).Cancel
    : undefined;

  return (
    <Root
      open={open}
      onOpenChange={onOpenChange}
      defaultOpen={defaultOpen}
    >
      {trigger && <Trigger asChild>{trigger}</Trigger>}
      <Content
        {...(isDialog && showCloseButton !== undefined
          ? { showCloseButton }
          : {})}
        className={dialogStyles.content(contentClassName)}
        style={getDialogContentStyle(width, status)}
      >
        {status !== 'default' && (
          <div className={dialogStyles.statusIcon}>
            <StatusIcon type={status} />
          </div>
        )}
        {title || description ? (
          <Header className={dialogStyles.header(headerClassName)}>
            {title && (
              <Title className={dialogStyles.title(titleClassName)}>
                {title}
              </Title>
            )}
            {description && (
              <Description
                className={dialogStyles.description(descriptionClassName)}
              >
                {description}
              </Description>
            )}
          </Header>
        ) : (
          // `DialogContent` requires a `DialogTitle` for the component to be accessible for screen reader users.
          // If you want to hide the `DialogTitle`, you can wrap it with our VisuallyHidden component.
          // 基本不会出现没传 title 或者 description
          <Header>
            <Title className="sr-only">Title</Title>
            <Description className="sr-only">Description</Description>
          </Header>
        )}
        <div className={dialogStyles.scrollArea}>{children}</div>
        {footerDivider && <div className={dialogStyles.footerDivider} />}
        <Footer className={dialogStyles.footer(footerClassName)}>
          {footer || (
            <>
              {/* Dialog 使用 Close，AlertDialog 使用 Cancel */}
              {isDialog && Close && !onlyConfirmButton ? (
                <Close asChild>
                  <Button
                    type={cancelButtonType}
                    {...cancelButtonPropsRest}
                    onClick={handleCancel}
                  >
                    {cancelButtonChildren}
                  </Button>
                </Close>
              ) : isAlertDialog && Cancel && !onlyConfirmButton ? (
                <Cancel asChild>
                  <Button
                    type={cancelButtonType}
                    {...cancelButtonPropsRest}
                    onClick={handleCancel}
                  >
                    {cancelButtonChildren}
                  </Button>
                </Cancel>
              ) : null}

              {/* Dialog 直接渲染 Button，AlertDialog 使用 Action 包装 */}
              {isDialog ? (
                <Button
                  type={confirmButtonType}
                  {...confirmButtonPropsRest}
                  onClick={onConfirm}
                >
                  {confirmButtonChildren}
                </Button>
              ) : isAlertDialog && Action ? (
                <Action asChild>
                  <Button
                    type={confirmButtonType}
                    {...confirmButtonPropsRest}
                    onClick={onConfirm}
                  >
                    {confirmButtonChildren}
                  </Button>
                </Action>
              ) : null}
            </>
          )}
        </Footer>
      </Content>
    </Root>
  );
}
