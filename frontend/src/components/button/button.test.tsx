import { expect, it, describe, afterEach, vi } from 'vitest'
import { cleanup, fireEvent, render, screen,  } from '@solidjs/testing-library';
import { Button } from './button';
import '@testing-library/jest-dom';

describe('Button', () => {
  afterEach(cleanup);

  it('should render text', () => {
    render(() => <Button text='Text' />);
    
    expect(screen.getByText('Text')).toBeInTheDocument();
  });

  it('should render input type button', () => {
    render(() => <Button text='Text' />);
    
    expect(screen.getByText('Text')).toHaveProperty("type", "button");
  });

  it('should have onclick event', () => {
    const handler = vi.fn();

    render(() => <Button text='Text' onClick={handler} />);
    fireEvent.click(screen.getByText('Text'));

    expect(handler).toBeCalledTimes(1);
  });
});
