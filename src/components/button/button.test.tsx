import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Button } from './button';

describe('Button', () => {
  it('renders correctly', () => {
    const { container } = render(<Button>Click Me</Button>);

    expect(container.firstChild).toHaveClass('bg-green-500');
    expect(container.firstChild).toHaveClass('text-white');
    expect(container.firstChild).toHaveClass('px-4');
  });

  it('renders correctly with label', () => {
    const { container } = render(<Button>Click Me</Button>);

    expect(container).toHaveTextContent('Click Me');
  });

  it('render correctly with size prop', () => {
    const { container } = render(<Button size="default" />);

    const { container: containerSmall } = render(<Button size="small" />);

    const { container: containerLarge } = render(<Button size="large" />);

    const { container: containerXXL } = render(<Button size="xxl" />);

    expect(container.firstChild).toHaveClass('text-base');
    expect(containerSmall.firstChild).toHaveClass('text-sm');
    expect(containerLarge.firstChild).toHaveClass('text-lg');
    expect(containerXXL.firstChild).toHaveClass('text-2xl');
  });

  it('render correctly with rounded prop', () => {
    const { container } = render(<Button rounded="full" />);

    const { container: containerLg } = render(<Button rounded="lg" />);

    const { container: containerNone } = render(<Button rounded="none" />);

    const { container: containerXL } = render(<Button rounded="xl" />);

    const { container: containerXXL } = render(<Button rounded="xxl" />);

    const { container: containerDefault } = render(
      <Button rounded="default" />
    );

    const { container: containerSM } = render(<Button rounded="sm" />);

    expect(container).toMatchSnapshot();
    expect(containerLg).toMatchSnapshot();
    expect(containerNone).toMatchSnapshot();
    expect(containerXL).toMatchSnapshot();
    expect(containerXXL).toMatchSnapshot();
    expect(containerDefault).toMatchSnapshot();
    expect(containerSM).toMatchSnapshot();

    expect(container.firstChild).toHaveClass('rounded-full');
    expect(containerLg.firstChild).toHaveClass('rounded-lg');
    expect(containerNone.firstChild).toHaveClass('rounded-none');
    expect(containerXL.firstChild).toHaveClass('rounded-xl');
    expect(containerXXL.firstChild).toHaveClass('rounded-2xl');
    expect(containerSM.firstChild).toHaveClass('rounded-sm');
  });

  it('render correctly with buttonType prop', () => {
    const { container: containerPrimary } = render(
      <Button buttonType="primary" />
    );

    const { container } = render(<Button buttonType="secondary" />);

    const { container: containerWarning } = render(
      <Button buttonType="warning" />
    );

    const { container: containerOutline } = render(
      <Button buttonType="outline" />
    );

    const { container: containerDisabled } = render(
      <Button buttonType="disabled" />
    );

    const { container: containerError } = render(<Button buttonType="error" />);

    expect(container).toMatchSnapshot();
    expect(containerPrimary).toMatchSnapshot();
    expect(containerWarning).toMatchSnapshot();
    expect(containerOutline).toMatchSnapshot();
    expect(containerDisabled).toMatchSnapshot();
    expect(containerError).toMatchSnapshot();

    expect(containerPrimary.firstChild).toHaveClass(
      'flex flex-row gap-x-4 disabled:cursor-not-allowed items-center justify-center bg-green-500 text-white border border-green-500 hover:bg-green-hover text-base py-2 px-4'
    );
    expect(container.firstChild).toHaveClass(
      'flex flex-row gap-x-4 disabled:cursor-not-allowed items-center justify-center bg-transparent text-green-500 border border-green-500 hover:bg-green-100 hover:opacity-100 text-base py-2 px-4'
    );
    expect(containerOutline.firstChild).toHaveClass(
      'bg-white text-gray-600 hover:bg-gray-100 border hover:border-gray-100 border-gray-300 hover:shadow-md'
    );
    expect(containerWarning.firstChild).toHaveClass(
      'bg-yellow-500 text-white border-yellow-500 hover:bg-yellow-600'
    );

    expect(containerDisabled.firstChild).toHaveClass(
      'bg-black text-white border-black cursor-not-allowed'
    );

    expect(containerError.firstChild).toHaveClass(
      'bg-red-500 text-white border-red-500 hover:bg-red-600'
    );
  });
});
