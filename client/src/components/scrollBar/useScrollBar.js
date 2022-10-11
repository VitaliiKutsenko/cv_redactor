import { useEffect } from 'react';
import { OverlayScrollbars } from 'overlayscrollbars';

const config = {};

export const useScrollBar = root => {
  useEffect(() => {
    let scroll;

    if (root.current) {
      scroll = OverlayScrollbars(root.current, config);
    }

    return () => {
      if (scroll) {
        scroll.destroy();
      }
    };
  }, [root]);
};
