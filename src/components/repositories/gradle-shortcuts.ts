
type GradleShortcut = {
  urls: Array<string>,
  shortcut: string
};

const shortcuts: Array<GradleShortcut> = [
  {
    urls: ['https://repo.maven.apache.org', 'https://repo1.maven.org'],
    shortcut: 'mavenCentral()'
  },
  {
    urls: ['https://jcenter.bintray.com'],
    shortcut: 'jcenter()'
  },
  {
    urls: ['https://maven.google.com'],
    shortcut: 'google()'
  },
  {
    urls: ['https://plugins.gradle.org'],
    shortcut: 'gradlePluginPortal()'
  }
];

export enum GradleDsl {
  KOTLIN = '"',
  GROOVY = "'"
}

export function determineGradleSyntax(url: string, dsl: GradleDsl): string {
  const shortcut: GradleShortcut | undefined = shortcuts.find(shortcut => shortcut.urls.some(shortcutUrl => url.startsWith(shortcutUrl)));
  return shortcut?.shortcut || `maven(${dsl}${url}${dsl})`;
}
