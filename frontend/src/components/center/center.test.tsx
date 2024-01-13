import { expect, it, describe } from 'vitest'
import { render, screen } from '@solidjs/testing-library';
import { Center } from './center';
import '@testing-library/jest-dom';

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
});
