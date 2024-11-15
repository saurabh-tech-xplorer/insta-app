import React, { useEffect } from 'react';
import Slider from '../common/Slider/Slider';
import json from '../../api/statusStories.json';
import Card from '../common/Card/Card';
import s from './StoriesSlider.module.scss';

interface Props {

}

export default function StoriesSlider({}: Props) {
const data = json;

useEffect(()=>{
    data.stories.forEach((story, index) => {
        if(index < 4){
            const preloadImage = new Image();
            preloadImage.src=`${story.image.src}/${story.image.width}/${story.image.height}`;
            story.items.forEach((innerstory, index) => {
                if(index === 0){
                    const preloadInnerImage = new Image();
                    preloadInnerImage.src=`${innerstory.image.src}/${innerstory.image.width}/${innerstory.image.height}`;
                }
            });
        }
    });
  }, []);   
  return (
    <div className={s.sliderContainer}>
        <Slider>
            {
                data.stories.map((story)=>{
                    return <Card data = {story}/>
                })
            }
        </Slider>
    </div>
  )
}