import TabItem from '@theme/TabItem';
import Tabs from '@theme/Tabs';
import React from "react";
import GradleGroovyDependency from "./gradle-groovy";
import GradleKotlinDependency from "./gradle-kotlin";
import MavenDependency from "./maven";
import { DependencyProps } from "./types";

export default function Dependency(props: DependencyProps): JSX.Element {
  return <Tabs groupId='build-tool'>
    <TabItem value='gradle-kts' label='Gradle Kotlin' default>
      <GradleKotlinDependency dependency={props.dependency} />
    </TabItem>
    <TabItem value='gradle-groovy' label='Gradle Groovy'>
      <GradleGroovyDependency dependency={props.dependency} />
    </TabItem>
    <TabItem value='maven' label='Maven'>
      <MavenDependency dependency={props.dependency} />
    </TabItem>
  </Tabs>
}
