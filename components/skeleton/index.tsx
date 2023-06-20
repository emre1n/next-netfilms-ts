import React from 'react';
import styles from './styles.module.css';

interface SkeletonProps {
  width?: string | number;
  height: string | number;
}

function Skeleton({ width, height }: SkeletonProps) {
  return <div className={styles.skeleton} style={{ width, height }}></div>;
}

export { Skeleton };
