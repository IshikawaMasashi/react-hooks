import React from 'react';
import { useState, useCallback, useEffect } from 'react';

export default function useClickOutside(
  refs: React.RefObject<HTMLElement>[],
  onClickOutside: (e: MouseEvent) => void
): [boolean] {
  const [isActive, setActive] = useState(false);

  const isOutside = useCallback(
    (e: MouseEvent) => {
      const test = refs.map(ref => {
        return (
          ref.current !== null && !ref.current.contains(e.target as HTMLElement)
        );
      });

      return test.every(Boolean);
    },
    [refs]
  );

  const mousedown = useCallback(
    (e: MouseEvent) => {
      if (isOutside(e)) {
        setActive(true);
        onClickOutside(e);
      }
    },
    [isOutside, onClickOutside]
  );

  const mouseup = useCallback(
    (e: MouseEvent) => {
      if (isOutside(e)) {
        setActive(false);
      }
    },
    [isOutside]
  );

  useEffect(() => {
    document.addEventListener('mousedown', mousedown);
    document.addEventListener('mouseup', mouseup);

    return () => {
      document.removeEventListener('mousedown', mousedown);
      document.removeEventListener('mouseup', mouseup);
    };
  }, [refs, onClickOutside]);

  return [isActive];
}
