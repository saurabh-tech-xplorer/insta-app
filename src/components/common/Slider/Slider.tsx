import React, { ReactNode } from 'react';
import style from './Slider.module.scss';

interface Props {
    children: ReactNode; // this will always be an array of items to be slided
}

export default function Slider({ children }: Props) {
  return (
    <div className={style.slider}>{children}</div>
  )
}