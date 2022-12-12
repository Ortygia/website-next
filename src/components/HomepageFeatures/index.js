import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Blazingly fast!',
    Svg: require('@site/static/img/fast.svg').default,
    description: (
      <>
        Lightweight fast and self-contained! No outside dependencies 
      </>
    ),
  },
  {
    title: 'Large collections first',
    Svg: require('@site/static/img/db.svg').default,
    description: (
      <>
        Tuned to scan large collections fast!
      </>
    ),
  },
  {
    title: 'Modern',
    Svg: require('@site/static/img/rust.svg').default,
    description: (
      <>
        Built using rust with the fastest libraries avaliable
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
