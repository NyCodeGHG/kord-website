export type MavenArtifact = {
  group: string
  module: string
  version: string
};

export type DependencyProps = {
  dependency: MavenArtifact
};
