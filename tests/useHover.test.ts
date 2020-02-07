import { act, renderHook } from '@testing-library/react-hooks';
import { useHover } from '../src';

test('useHover should react on mouseEnter/mouseLeave events', () => {
  let isHovered: boolean;
  let bind: {
    onMouseEnter: (e?: React.MouseEvent<Element, MouseEvent>) => void;
    onMouseLeave: (e?: React.MouseEvent<Element, MouseEvent>) => void;
  };

  renderHook(() => ([isHovered, bind] = useHover()));

  expect(isHovered).toBeFalsy();
  act(() => bind.onMouseEnter());
  expect(isHovered).toBeTruthy();
  act(() => bind.onMouseLeave());
  expect(isHovered).toBeFalsy();
});
