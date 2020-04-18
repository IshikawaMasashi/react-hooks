import { act, renderHook } from '@testing-library/react-hooks';
import { useStateful } from '../src';

describe('useStateful', () => {
  it('should change value', () => {
    const { result } = renderHook(() => useStateful('initial'));
    expect(result.current.value).toBe('initial');

    act(() => result.current.setValue('changed'));

    expect(result.current.value).toBe('changed');
  });
});
