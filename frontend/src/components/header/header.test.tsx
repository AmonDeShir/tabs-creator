import { expect, it, describe } from 'vitest'
import { render, screen } from '@solidjs/testing-library';
import { Header } from './header';
import '@testing-library/jest-dom';

describe('Header', () => {
  it('should render', () => {
    render(() => <Header />);
    
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });
});
