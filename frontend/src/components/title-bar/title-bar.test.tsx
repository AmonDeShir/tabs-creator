import { expect, it, describe } from 'vitest'
import { render, screen } from '@solidjs/testing-library';
import { TitleBar } from './title-bar';
import '@testing-library/jest-dom';

describe('TitleBar', () => {
  it('should render', () => {
    render(() => <TitleBar>Text</TitleBar>);
    
    expect(screen.getByText('Text')).toBeInTheDocument();
  });

  it('should be heading', () => {
    render(() => <TitleBar>Text</TitleBar>);
    
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
