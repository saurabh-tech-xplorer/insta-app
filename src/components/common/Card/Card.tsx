import React from 'react';
import styles from './Card.module.scss';
export interface ImageData {
    src?: string;
    width: string | number;
    height?: string | number;
}
export interface Story {
    image?: Readonly<ImageData>;
    syn?: string;
    type?: string;
    items?: any;
    name?: string; 
    hl?: string;
}

interface CardProps {
    data: Readonly<Story>;
    callBackData: (param1: Story)=> void;
}

const Card: React.FC<Readonly<CardProps>> = ({ data, callBackData }) => {
    const imageUrl = `${data.image?.src}/${data.image?.width}/${data.image?.height}`;
    return (
        <div className={`${styles.card}`}>
            <div className={styles.imageContainer}>
                <img src={imageUrl} alt={data.hl} className={styles.image} onClick={() => callBackData(data)}/> 
            </div>
            <div className={styles.name}>{data.name}</div>
        </div>    
    );
};

export default Card;
