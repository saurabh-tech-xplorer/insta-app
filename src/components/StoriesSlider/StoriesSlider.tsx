import React, { useEffect, useState } from 'react';
import Slider from '../common/Slider/Slider';
import Card, {Story} from '../common/Card/Card';
import s from './StoriesSlider.module.scss';
import StatusModal from '../StatusModal/StatusModal';

interface Data {
  stories: Story[];
}

interface Props {
    data: Data;
}

const StoriesSlider: React.FC<Props> = ({data}) => {

    const [isModalOpen, setModalOpen] = useState<boolean>(false);
    const [modalData, setModalData] = useState<Story | null>(null);

  useEffect(() => {
    data.stories.forEach((story, index) => {
      if (index < 4) {
        const preloadImage = new Image();
        preloadImage.src = `${story?.image?.src}/${story?.image?.width}/${story?.image?.height}`;
        story.items.forEach((innerStory:Story, innerIndex: number) => {
          if (innerIndex === 0) {
            const preloadInnerImage = new Image();
            preloadInnerImage.src = `${innerStory?.image?.src}/${innerStory?.image?.width}/${innerStory?.image?.height}`;
          }
        });
      }
    });
  }, []);

  const callback = (data: Story) => {
    setModalOpen(true);
    setModalData(data);
  }

  return (
    <div className={s.sliderContainer}>
      <Slider>
        {data.stories.map((story: Story, index: number) => (
          <Card key={index} data={story} callBackData = {callback}/>
        ))}
      </Slider>
      {isModalOpen && (
                <StatusModal key={modalData?.name} data={modalData} onClose={() => setModalOpen(false)} />
            )}
    </div>
  );
};

export default StoriesSlider;
