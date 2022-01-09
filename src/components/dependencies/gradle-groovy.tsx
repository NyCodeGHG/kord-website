import React from "react";
import CodeBlock from '@theme/CodeBlock';
import { DependencyProps } from "./types";

export default function GradleGroovyDependency(props: DependencyProps): JSX.Element {
  const { group, module, version } = props.dependency;
  return <CodeBlock className='language-groovy'>
    {`dependencies {
    implementation '${group}:${module}:${version}'
}`}
  </CodeBlock>
}
