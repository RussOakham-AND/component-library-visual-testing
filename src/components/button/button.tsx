import { cva, type VariantProps } from 'class-variance-authority';
import { clsxMerge } from '@/common/utils/classNameUtils';
import { Button as AriaButton } from 'react-aria-components';

/**
 * Button styles for the Button component.>
 */
const buttonStyles = cva(
  'flex flex-row gap-x-4 disabled:cursor-not-allowed items-center justify-center',
  {
    variants: {
      buttonType: {
        primary:
          'bg-green-500 text-white border border-green-500 hover:bg-green-100',
        secondary:
          'bg-transparent text-green-500 border border-green-500 hover:bg-green-100 hover:opacity-100',
        warning:
          'bg-yellow-500 text-white border-yellow-500 hover:bg-yellow-600',
        link: 'text-black underline-offset-4 hover:underline',
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
      theme: {
        1: 'bg-red-500 text-white border border-red-500 hover:bg-red-100',
        2: 'bg-purple-500 rounded-md text-black border border-purple-500 hover:bg-violet-600',
        3: 'bg-blue-500 rounded-lg text-white border border-blue-500 hover:bg-blue-100',
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

interface ButtonProps
  extends ButtonElementProps,
    VariantProps<typeof buttonStyles> {}

function Button({
  className,
  buttonType,
  size,
  theme,
  rounded,
  children,
  ...props
}: ButtonProps) {
  return (
    <AriaButton
      className={clsxMerge(
        buttonStyles({ buttonType, size, theme, rounded }),
        className
      )}
      type="button"
      {...props}
    >
      {children}
    </AriaButton>
  );
}

export { Button, type ButtonElementProps, buttonStyles };
