import CodeBlock from '@theme/CodeBlock';
import React from "react";
import { DependencyProps } from "./types";

export default function MavenDependency(props: DependencyProps): JSX.Element {
  const { group, module, version } = props.dependency;
  return <CodeBlock className='language-xml'>
    {`<dependency>
    <groupId>${group}</groupId>
    <artifactId>${module}</artifactId>
    <version>${version}</version>
</dependency>`}
  </CodeBlock>
}
