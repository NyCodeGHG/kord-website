import React from 'react';
import CodeBlock from '@theme/CodeBlock';
import { determineGradleSyntax, GradleDsl } from './gradle-shortcuts';

export default function GradleGroovyRepository({ url }: { url: string }): JSX.Element {
  return <CodeBlock className='language-groovy'>
    {`repositories {
    ${determineGradleSyntax(url, GradleDsl.GROOVY)}
}`}
  </CodeBlock>
}
