import { describe, expect, test } from 'vitest';
import { useCounter } from './useCounter';
import { act, renderHook } from '@testing-library/react';

describe('useCounter', () => {
  // let result;

  // beforeEach(() => {
  //   const { result: hookValue } = renderHook(() => useCounter());
  //   result = hookValue;
  // });

  test('should initialize with default value of 10', () => {
    const { result } = renderHook(() => useCounter());

    expect(result.current.counter).toBe(10);
  });

  test('should initialize with value 20', () => {
    const initialValue = 20;

    const { result } = renderHook(() => useCounter(initialValue));

    expect(result.current.counter).toBe(initialValue);
  });

  test('should increment counter when handleAdd is called', () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.handleAdd();
    });

    expect(result.current.counter).toBe(11);
  });

  test('should decrement counter when handleSubtract is called', () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.handleSubtract();
    });

    expect(result.current.counter).toBe(9);
  });

  test('should reset to initialValue the counter when handleReset is called', () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.handleSubtract();
      result.current.handleSubtract();
      result.current.handleSubtract();
      result.current.handleSubtract();
      result.current.handleSubtract();
    });

    expect(result.current.counter).toBe(5);

    act(() => {
      result.current.handleReset();
    });

    expect(result.current.counter).toBe(10);
  });
});
