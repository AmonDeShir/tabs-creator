import { expect, it, describe, afterEach, vi } from 'vitest'
import { cleanup, fireEvent, render, screen,  } from '@solidjs/testing-library';
import { ColorButton } from './color-button';
import styles from "./color-button.module.css";
import '@testing-library/jest-dom';

describe('Button', () => {
  afterEach(cleanup);

  it('should render text', () => {
    render(() => <ColorButton text='Text' />);
    
    expect(screen.getByText('Text')).toBeInTheDocument();
  });

  it('should render plus button if plus flag is set', () => {
    render(() => <ColorButton plus text='p' />);
    
    expect(screen.getByText('p')).toHaveClass(styles["color-button--add"]);
  });

  it('should set button color', () => {
    render(() => <ColorButton color='main' text='p' />);
    
    expect(screen.getByText('p')).toHaveClass(styles["color-button--main"]);
  });

  it('should have set second color by default', () => {
    render(() => <ColorButton text='p' />);
    
    expect(screen.getByText('p')).toHaveClass(styles["color-button--second"]);
  });


  it(`shouldn't render plus button if plus flag isn't set`, () => {
    render(() => <ColorButton text='p' />);
    
    expect(screen.getByText('p')).not.toHaveClass(styles["color-button--add"]);
  });


  it('should have onclick event', () => {
    const handler = vi.fn();

    render(() => <ColorButton text='Text' onClick={handler} />);
    fireEvent.click(screen.getByText('Text'));

    expect(handler).toBeCalledTimes(1);
  });
});
