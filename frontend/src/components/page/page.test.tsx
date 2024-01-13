import { expect, it, describe, afterEach } from 'vitest'
import { cleanup, render, screen,  } from '@solidjs/testing-library';
import { Page } from './page';
import '@testing-library/jest-dom';
import styles from "./page.module.css";

describe('Page', () => {
  afterEach(cleanup);

  it('should render title', () => {
    render(() => <Page title='Title'>Text</Page>);
    
    expect(screen.getByText('Title')).toBeInTheDocument();
  });

  it('should render content', () => {
    render(() => <Page title='Title'>Text</Page>);
    
    expect(screen.getByText('Text')).toBeInTheDocument();
  });

  it('should has default color', () => {    
    render(() => <Page title='Title'>Text</Page>);
    
    expect(screen.getByText('Text')).toHaveClass(styles['page--second']);
  });
  
  it('should has default max width', () => {
    render(() => <Page title='Title'>Text</Page>);
    
    expect(screen.getByText('Text')).toHaveStyle('max-width: 100%');
  });


  it('should change background color', () => {
    render(() => <Page title='Title' color='main'>Text</Page>);
    expect(screen.getByText('Text')).toHaveClass(styles['page--main']);
    cleanup()

    render(() => <Page title='Title' color='second'>Text</Page>);
    expect(screen.getByText('Text')).toHaveClass(styles['page--second']);
    cleanup()

    render(() => <Page title='Title' color='main-dark'>Text</Page>);
    expect(screen.getByText('Text')).toHaveClass(styles['page--main-dark']);
  });

  it('should change max width', () => {
    render(() => <Page title='Title' width="100px">Text</Page>);
    expect(screen.getByText('Text')).toHaveStyle('max-width: 100px');
  });
});
