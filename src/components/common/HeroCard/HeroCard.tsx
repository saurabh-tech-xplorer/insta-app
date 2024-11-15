import React from 'react';
import styles from './HeroCard.module.scss';
import { Story } from '../Card/Card';

export interface IDimension {
    width?: number;
    height?: number;
    gap?: number;
}

interface HeroCardProps {
    data: Story;
    index: number;
    wrapperClass: string;
    dimension: Readonly<IDimension>;
}

const HeroCard: React.FC<Readonly<HeroCardProps>> = ({ data, index, dimension, wrapperClass, meta }) => {
    const { width, height } = dimension || {};

    return (
        <div className={`${styles.heroCard} ${wrapperClass}`}>
            {data.hl && <div className={`${styles.content}`}>
                <h2 className={styles.headline}>{data.hl}</h2>
                {data.syn && <p className={styles.description}>{data.syn}</p>}
            </div>}
        </div>
    );
};

export default HeroCard;
