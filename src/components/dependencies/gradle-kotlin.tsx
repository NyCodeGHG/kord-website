import React from "react";
import CodeBlock from '@theme/CodeBlock';
import { DependencyProps } from "./types";

export default function GradleKotlinDependency(props: DependencyProps): JSX.Element {
  const { group, module, version } = props.dependency;
  return <CodeBlock className='language-kotlin'>
    {`dependencies {
    implementation("${group}", "${module}", "${version}")
}`}
  </CodeBlock>
}
