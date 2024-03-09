'use client';

import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs';
import { useServerInsertedHTML } from 'next/navigation';
import { type PropsWithChildren, useState } from 'react';

export const RootStyle = ({ children }: PropsWithChildren) => {
  const [cache] = useState(() => createCache());

  useServerInsertedHTML(() => {
    return (
      <script
        dangerouslySetInnerHTML={{
          __html: `</script>${extractStyle(cache)}<script>`,
        }}
      />
    );
  });

  return <StyleProvider cache={cache}>{children}</StyleProvider>;
};
