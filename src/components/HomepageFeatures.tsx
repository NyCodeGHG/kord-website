import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Written in Kotlin',
    image: '/img/kotlin.svg',
    description: (
      <>
        Kord is written from the ground up in Kotlin and is built on top of several libraries in the Kotlin ecosystem such as <a href="https://ktor.io">Ktor</a>, <a href="https://github.com/Kotlin/kotlinx.coroutines">kotlinx.coroutines</a> and <a href="https://github.com/Kotlin/kotlinx.serialization">kotlinx.serialization</a>.
      </>
    ),
  },
  {
    title: 'Efficient',
    image: 'https://twitter.github.io/twemoji/v/13.1.0/svg/1f680.svg',
    description: (
      <>
        Thanks to <a href="https://kotlinlang.org/docs/coroutines-overview.html">coroutines</a>,
        we are able to combine the conciseness and readability of imperative code with the concurrency and speed of reactive code.
      </>
    ),
  },
  {
    title: 'Flexible',
    image: 'https://twitter.github.io/twemoji/v/13.1.0/svg/2692.svg',
    description: (
      <>
        Kord provides high level APIs but also full access to low level APIs when you want to do some unconventional things.
      </>
    ),
  },
];

function Feature({ title, image, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {image && <img className={styles.featureSvg} alt={title} src={image} />}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
