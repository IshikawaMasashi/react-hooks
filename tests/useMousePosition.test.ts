import { act, renderHook } from '@testing-library/react-hooks';
import { useMousePosition } from '../src';

test('useTouch should react on mouseMove event', () => {
  let x: number;
  let y: number;
  let bind: {
    onMouseMove: (e: React.MouseEvent<Element, MouseEvent>) => void;
  };

  renderHook(() => ([x, y, bind] = useMousePosition()));

  expect(x).toBe(0);
  expect(y).toBe(0);
  act(() =>
    bind.onMouseMove({
      nativeEvent: { offsetX: 1, offsetY: 2 }
    } as React.MouseEvent<Element, MouseEvent>)
  );
  expect(x).toBe(1);
  expect(y).toBe(2);
  act(() =>
    bind.onMouseMove({
      nativeEvent: { offsetX: 3, offsetY: 4 }
    } as React.MouseEvent<Element, MouseEvent>)
  );
  expect(x).toBe(3);
  expect(y).toBe(4);
});
