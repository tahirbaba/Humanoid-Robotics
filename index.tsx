import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Start Learning →
          </Link>
        </div>
      </div>
    </header>
  );
}

function CourseModules() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className="col col--6">
            <div className="text--center padding-horiz--md">
              <Heading as="h3">Module 1: ROS 2 Fundamentals</Heading>
              <p>
                Master the communication architecture that coordinates sensors, computation, and actuators in humanoid robots. Learn nodes, topics, services, and actions.
              </p>
            </div>
          </div>
          <div className="col col--6">
            <div className="text--center padding-horiz--md">
              <Heading as="h3">Module 2: Digital Twin Simulation</Heading>
              <p>
                Understand how Gazebo and Unity create safe testing environments with physics simulation and sensor modeling for robotic algorithm validation.
              </p>
            </div>
          </div>
          <div className="col col--6">
            <div className="text--center padding-horiz--md">
              <Heading as="h3">Module 3: NVIDIA Isaac Integration</Heading>
              <p>
                Explore photorealistic simulation with Isaac Sim, SLAM navigation, and Nav2 path planning for autonomous humanoid locomotion.
              </p>
            </div>
          </div>
          <div className="col col--6">
            <div className="text--center padding-horiz--md">
              <Heading as="h3">Module 4: Vision-Language-Action</Heading>
              <p>
                Discover how natural language commands transform into physical robot actions through Whisper voice processing, LLM planning, and ROS 2 integration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="A comprehensive course on embodied AI systems engineering for autonomous humanoid robots">
      <HomepageHeader />
      <main>
        <CourseModules />
      </main>
    </Layout>
  );
}
