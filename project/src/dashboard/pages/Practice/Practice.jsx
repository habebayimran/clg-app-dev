import React from 'react';
import PracticeBlogs from './PracticeBlogs';
import PracticeVideos from './PracticeVideos';
import PracticePics from './PracticePics';

const Practice = () => {

  return (
    <>
    <div className='blogs'>
      <PracticeBlogs/>
      <br></br>
      <PracticeVideos/>
      <br></br>
      <PracticePics/>
    </div>
    </>
  );
};

export default Practice;

