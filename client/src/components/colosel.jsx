import Axios from 'axios';
import React, { useState,useEffect } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';



const Example = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [items, setItems] = useState([
    {
      src: 'https://www.visionvivaah.com/blog/wp-content/uploads/2019/11/Top-10-Event-Management-Companies-In-India.jpg',
      altText: 'Currently No Event',
      caption: 'No Event'
    }
    
  ]);

  useEffect(async () => {
    const res=await Axios.get('/api/v1/events/getTopEvents');
    console.log(res.data)
    const newItems=[];
    const events=res.data.events;
    events.map((event)=>{
      newItems.push({src:event.image,altText:event.type,caption:event.name});
    })
    console.log('newItems',newItems);
    setItems(newItems);
  }, [])

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
        
      
            
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
        
      >
        <img src={item.src} alt={item.altText} width="100%" height="400"/>
        <CarouselCaption style={{color:"black"}} captionText={item.altText} captionHeader={item.caption} />
      </CarouselItem>
      
      
      
    );
  });

  return (
     
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous} 
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
    
  );
}

export default Example;