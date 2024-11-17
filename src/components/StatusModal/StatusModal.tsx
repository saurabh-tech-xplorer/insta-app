import React, { useState, useEffect } from 'react';
import s from './StatusModal.module.scss';
import { Story } from '../Card/Card';

interface StatusModalProps {
  onClose: () => void;
  data: Story | null;
}

const StatusModal: React.FC<StatusModalProps> = ({ onClose, data }) => {
  const [currentStory, setCurrentStory] = useState<number>(0);
  const [progress, setProgress] = useState<{ [key: number]: number }>({ [currentStory]: 0 });

  
  useEffect(() => {
    data?.items.forEach((story: Story) => {
      const preloadImage = new Image();
      preloadImage.src = `${story.image.src}/${story.image.width}/${story.image.height}`;
    });
  }, [data?.items]);

  useEffect(() => {
    progress[currentStory] = 0;
    setProgress((prev) => ({ ...prev, ...progress }));
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev[currentStory] < 100) {
          progress[currentStory] = prev[currentStory] + 1;
          return { ...prev, ...progress };
        }
        clearInterval(interval);
        goToNextStory();
        progress[currentStory] = 100;
        return { ...prev, ...progress };
      });
    }, 40);

    return () => clearInterval(interval);
  }, [currentStory]);

  const goToNextStory = () => {
    if (currentStory < data?.items?.length! ?  data?.items?.length! - 1 : 0) {
      setCurrentStory(currentStory + 1);
      progress[currentStory] = 100;
      setProgress((prev) => ({ ...prev, ...progress }));
    } else {
      onClose();
    }
  };

  const goToPrevStory = () => {
    if (currentStory > 0) {
      setCurrentStory(currentStory - 1);
      progress[currentStory] = 0;
      setProgress((prev) => ({ ...prev, ...progress }));
    } else {
      onClose();
    }
  };

  if(!data){
    return null;
  }

  return (
    <div className={s.modalContainer}>
      <div className={s.progressBar}>
        {data.items.map((story: Story, index: number) => (
          <div className={s.progressContainer} key={index}>
            <div className={s.progress} style={{ width: `${progress[index] || 0}%` }} />
          </div>
        ))}
      </div>
      <div className={s.content}>
        <img
          src={`${data.items[currentStory].image.src}/${data.items[currentStory].image.width}/${data.items[currentStory].image.height}`}
          alt="Story"
          className={s.modalImage}
        />
      </div>
      <div className={s.navigation}>
        <div className={s.name_container}>
          <img
            src={`${data.image.src}/${data.image.width}/${data.image.height}`}
            alt="Profile"
            className={s.profileImage}
          />
          <div className={s.name}>{data.name}</div>
        </div>
        <button className={s.close} onClick={onClose}>
          ×
        </button>
        <div className={s.leftSideClick} onClick={goToPrevStory}></div>
        <div className={s.rightSideClick} onClick={goToNextStory}></div>
      </div>
    </div>
  );
};

export default StatusModal;
