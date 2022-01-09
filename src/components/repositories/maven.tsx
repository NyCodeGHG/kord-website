import React from 'react';
import CodeBlock from '@theme/CodeBlock';

export default function MavenRepository({ url, id }: { url: string, id: string }): JSX.Element {
  return <CodeBlock className='language-xml'>
    {`<repository>
    <id>${id}</id>
    <url>${url}</url>
</repository>`}
  </CodeBlock>
}
