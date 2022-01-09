import TabItem from '@theme/TabItem';
import Tabs from '@theme/Tabs';
import React from 'react';
import GradleGroovyRepository from './gradle-groovy';
import GradleKotlinRepository from './gradle-kotlin';
import MavenRepository from './maven';

export default function Repository({ url, id }: { url: string, id: string }): JSX.Element {
  return <Tabs groupId='build-tool'>
    <TabItem value='gradle-kts' label='Gradle Kotlin' default>
      <GradleKotlinRepository url={url} />
    </TabItem>
    <TabItem value='gradle-groovy' label='Gradle Groovy'>
      <GradleGroovyRepository url={url} />
    </TabItem>
    <TabItem value='maven' label='Maven'>
      {isCentral(url) && <p>Maven Central is added by default in Maven.</p> || <MavenRepository url={url} id={id} />}
    </TabItem>
  </Tabs>
}

function isCentral(url: string): boolean {
  return url.startsWith('https://repo1.maven.org') || url.startsWith('https://repo.maven.apache.org');
}
