import React from 'react';
import { RefObject, useLayoutEffect, useState } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

export default function useResizeObserver(ref: RefObject<HTMLElement>) {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      setWidth(entries[0].contentRect.width);
      setHeight(entries[0].contentRect.height);
    });

    if (ref.current !== null) {
      resizeObserver.observe(ref.current);
    }

    return () => void resizeObserver.disconnect();
  }, [ref]);

  return [width, height];
}
