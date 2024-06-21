import { cva, type VariantProps } from 'class-variance-authority';
import { clsxMerge } from '@/common/utils/classNameUtils';
import { Button as AriaButton } from 'react-aria-components';

/**
 * Button styles for the Button component.>
 */
export const buttonStyles = cva(
  'flex flex-row gap-x-4 disabled:cursor-not-allowed items-center justify-center',
  {
    variants: {
      buttonType: {
        primary:
          'bg-green-500 text-white border border-green-500 hover:bg-green-hover',
        secondary:
          'bg-transparent text-green-500 border border-green-500 hover:border-green-hover hover:opacity-100',
        warning:
          'bg-yellow-500 text-white border-yellow-500 hover:bg-yellow-600',
        outline:
          'bg-white text-gray-600 hover:bg-gray-100 border hover:border-gray-100 border-gray-300 hover:shadow-md',
        disabled: 'bg-black text-white border-black cursor-not-allowed',
        error: 'bg-red-500 text-white border-red-500 hover:bg-red-600',
      },
      size: {
        default: ['text-base py-2 px-4'],
        small: ['text-sm py-1 px-2'],
        large: ['text-lg py-3 px-6'],
        xxl: ['text-2xl py-4 px-8'],
      },
      rounded: {
        default: '',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        xl: 'rounded-xl',
        xxl: 'rounded-2xl',
        none: 'rounded-none',
        full: 'rounded-full',
      },
    },
    compoundVariants: [
      {
        buttonType: 'primary',
        size: 'default',
        rounded: 'default',
      },
    ],
    defaultVariants: {
      buttonType: 'primary',
      size: 'default',
      rounded: 'default',
    },
  }
);

type ButtonElementProps = React.ComponentProps<typeof AriaButton>;

export interface ButtonProps
  extends ButtonElementProps,
    VariantProps<typeof buttonStyles> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  label?: string;
}

export default function Button({
  className,
  buttonType,
  size,
  rounded,
  label,
  rightIcon,
  leftIcon,
  ...props
}: ButtonProps) {
  return (
    <AriaButton
      className={clsxMerge(
        buttonStyles({ buttonType, size, rounded }),
        className
      )}
      type="button"
      {...props}
    >
      {Boolean(leftIcon) && leftIcon}
      {Boolean(label) && label}
      {Boolean(rightIcon) && rightIcon}
    </AriaButton>
  );
}
