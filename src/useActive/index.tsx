import React from 'react';
import { useState } from 'react';

export default function useActive(): [
  boolean,
  {
    onMouseDown: (e: React.MouseEvent) => void;
    onMouseUp: (e: React.MouseEvent) => void;
  }
] {
  const [isActive, setActive] = useState(false);

  const bind = React.useMemo(
    () => ({
      onMouseDown: (e: React.MouseEvent) => void setActive(true),
      onMouseUp: (e: React.MouseEvent) => void setActive(false)
    }),
    []
  );

  return [isActive, bind];
}
