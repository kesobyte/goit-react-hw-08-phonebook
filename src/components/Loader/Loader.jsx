import React from 'react';
import { Skeleton } from '@chakra-ui/react';
import css from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={css.loaderContainer}>
      <Skeleton height="40px" my="10px" />
      <Skeleton height="40px" my="10px" />
      <Skeleton height="40px" my="10px" />
      <Skeleton height="40px" my="10px" />
    </div>
  );
};
