import React from 'react';
import CodeBlock from '@theme/CodeBlock';
import { determineGradleSyntax, GradleDsl } from './gradle-shortcuts';

export default function GradleKotlinRepository({ url }: { url: string }): JSX.Element {
  return <CodeBlock className='language-kotlin'>
    {`repositories {
    ${determineGradleSyntax(url, GradleDsl.KOTLIN)}
}`}
  </CodeBlock>
}
