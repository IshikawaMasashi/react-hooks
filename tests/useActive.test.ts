import { act, renderHook } from '@testing-library/react-hooks';
import { useActive } from '../src';

test('useActive should react on mouseDown/mouseUp events', () => {
  let isActive: boolean;
  let bind: {
    onMouseDown: (e?: React.MouseEvent<Element, MouseEvent>) => void;
    onMouseUp: (e?: React.MouseEvent<Element, MouseEvent>) => void;
  };

  renderHook(() => ([isActive, bind] = useActive()));

  expect(isActive).toBeFalsy();
  act(() => bind.onMouseDown());
  expect(isActive).toBeTruthy();
  act(() => bind.onMouseUp());
  expect(isActive).toBeFalsy();
});
