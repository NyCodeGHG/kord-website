import React, { useEffect, useState } from 'react';
import Dependency from './dependencies/dependency';
import { MavenArtifact } from './dependencies/types';
import Repository from './repositories/repository';

export default function KordDependency(): JSX.Element {
  const [kordVersion, setKordVersion] = useState(null);
  const [useSnapshot, setUseSnapshot] = useState(false);
  useEffect(() => {
    const fetchKordVersion = () => {
      fetch('https://maven-repo-version-worker.nycode.workers.dev/?group=dev.kord&module=kord-core')
        .then(result => result.text())
        .then(version => setKordVersion(version))
    };
    fetchKordVersion();
  }, []);
  const dependency: MavenArtifact = {
    group: 'dev.kord',
    module: 'kord-core',
    version: useSnapshot && '0.8.x-SNAPSHOT' || kordVersion || 'Loading Version...'
  };
  const { url, id } = useSnapshot ? {
    url: 'https://oss.sonatype.org/content/repositories/snapshots/',
    id: 'sonatype-snapshot'
  } : {
    url: 'https://repo1.maven.org/maven2/',
    id: 'central'
  };
  return <>
    <input type='checkbox' id='snapshot-checkbox' checked={useSnapshot} onChange={() => setUseSnapshot(!useSnapshot)} />
    <label htmlFor='snapshot-checkbox'> Use latest Snapshot</label>
    <Dependency dependency={dependency} />
    <Repository url={url} id={id} />
  </>;
}
