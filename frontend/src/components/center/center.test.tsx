import { expect, it, describe } from 'vitest'
import { render, screen } from '@solidjs/testing-library';
import { Center } from './center';
import '@testing-library/jest-dom';
import styles from "./center.module.css";

// @ts-ignore
import matchMediaPolyfill from 'mq-polyfill';

matchMediaPolyfill(window)

window.resizeTo = function resizeTo(width, height) {
  Object.assign(this, {
    innerWidth: width,
    innerHeight: height,
    outerWidth: width,
    outerHeight: height
  }).dispatchEvent(new this.Event('resize'))
}

describe('Center', () => {
  it('should render', () => {
    render(() => <Center>Text</Center>);
    
    expect(screen.getByText('Text')).toBeInTheDocument();
  });

  it('should set justify-content', () => {
    render(() => <Center justifyContent='flex-end'>Text</Center>);
    
    expect(screen.getByText('Text')).toBeInTheDocument();
    expect(screen.getByText('Text')).toHaveStyle("justify-content: flex-end");
  });

  it('should be centered by default', () => {
    render(() => <Center>Text</Center>);
    
    expect(screen.getByText('Text')).toBeInTheDocument();
    expect(screen.getByText('Text')).toHaveStyle("justify-content: center");
  });

  it('should be displayed as a table on mobile if had tableOnMobile prop', () => {
    render(() => <Center tableOnMobile>Text</Center>);
    
    expect(screen.getByText('Text')).toHaveClass(styles['center--table-on-mobile']);
  });

  it("shouldn't be displayed as a table on mobile if hadn't tableOnMobile prop", () => {
    render(() => <Center>Text</Center>);
    
    expect(screen.getByText('Text')).not.toHaveClass(styles['center--table-on-mobile']);
  });
});
