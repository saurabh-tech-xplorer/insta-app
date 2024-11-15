import React from 'react';
import styles from './Card.module.scss';
export interface ImageData {
    src?: string;
    width: string;
    height?: string
}
export interface Story {
    viewType: string;
    id: string;
    tn: string;
    wu: string;
    image?: Readonly<ImageData>;
    syn?: string;
    primeid?: string;
    type?: string;
    stories?: any;
    name?: string; 
    hl?: string;
}

interface CardProps {
    data: Readonly<Story>;
}

const Card: React.FC<Readonly<CardProps>> = ({ data }) => {
    const imageUrl = `${data.image?.src}/${data.image?.width}/${data.image?.height}`;
    return (
        <div className={`${styles.card} ${styles.variant_1}`}>
            <div className={styles.content}>
                <p className={styles.headline}>{data.hl}</p>
            </div>
            <div className={styles.imageContainer}>
                <img src={imageUrl} alt={data.hl} className={styles.image} />
            </div>
        </div>
    );
};

export default Card;
