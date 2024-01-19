import { expect, it, describe, afterEach } from 'vitest'
import { cleanup, fireEvent, render, screen,  } from '@solidjs/testing-library';
import { Input } from './input';
import '@testing-library/jest-dom';
import { createSignal } from 'solid-js';

describe('Input', () => {
  afterEach(cleanup);

  it('should render value', () => {
    render(() => <Input value='Text' />);
    
    expect(screen.getByDisplayValue('Text')).toBeInTheDocument();
  });

  it('should change input type', () => {
    render(() => <Input type='text' value='Text' />);
    
    expect(screen.getByDisplayValue('Text')).toHaveProperty("type", "text");
  });

  it('should set placeholder text', () => {
    render(() => <Input type='text' placeholder='Text' />);
    
    expect(screen.getByPlaceholderText('Text')).toBeInTheDocument();
  });


  it('should have onChange event', () => {
    const [value, setValue] = createSignal("Text");

    render(() => <Input value={value()} onChange={setValue} />);
    fireEvent.input(screen.getByDisplayValue('Text'), { target: { value: "new text" }});

    expect(value()).toEqual("new text");
  });
});
