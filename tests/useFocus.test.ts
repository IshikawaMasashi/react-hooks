import { act, renderHook } from '@testing-library/react-hooks';
import { useFocus } from '../src';

test('useFocus should react on focus/blur events', () => {
  let isFocused: boolean;
  let bind: {
    onFocus: (e?: React.FocusEvent<Element>) => void;
    onBlur: (e?: React.FocusEvent<Element>) => void;
  };

  renderHook(() => ([isFocused, bind] = useFocus()));

  expect(isFocused).toBeFalsy();
  act(() => bind.onFocus());
  expect(isFocused).toBeTruthy();
  act(() => bind.onBlur());
  expect(isFocused).toBeFalsy();
});
