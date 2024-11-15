import React, { useState } from 'react';
import styles from './Card.module.scss';
import StatusModal from '../../StatusModal/StatusModal';
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
}

const Card: React.FC<Readonly<CardProps>> = ({ data }) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const imageUrl = `${data.image?.src}/${data.image?.width}/${data.image?.height}`;
    return (
        <div className={`${styles.card}`}>
            <div className={styles.imageContainer}>
                <img src={imageUrl} alt={data.hl} className={styles.image} onClick={() => setModalOpen(true)}/> 
            </div>
            <div className={styles.name}>{data.name}</div>
            {isModalOpen && (
                <StatusModal key={data.name} data={data} onClose={() => setModalOpen(false)} />
            )}
        </div>
        
    );
};

export default Card;
