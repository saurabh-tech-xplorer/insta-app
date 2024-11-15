import React from 'react';
import Slider from '../common/Slider/Slider';
import json from '../../api/statusStories.json';

interface Props = {

}

export default function StoriesSlider({}: Props) {
const data = json;
  return (
    <div>
        <h1>Instagram</h1>
        <Slider>
            {
                data.stories.map((story)=>{
                    <></>
                })
            }
        </Slider>
    </div>
  )
}