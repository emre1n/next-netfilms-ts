import React from 'react';
import styles from './styles.module.css';

interface Props {
  width?: string | number;
  height?: string | number;
}

function Skeleton({ width, height }: Props) {
  return <div className={styles.skeleton} style={{ width, height }}></div>;
}

export { Skeleton };
