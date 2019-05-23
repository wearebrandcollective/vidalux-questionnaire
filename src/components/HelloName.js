import React from 'react';
import FadeIn from 'react-fade-in';

import qLoading from '../svg/qLoading.svg';

const renderTimeOfTheDay = (currentTime = new Date()) => {
  const currentHour = currentTime.getHours();
  const splitAfternoon = 12; // 24hr time to split the afternoon
  const splitEvening = 17; // 24hr time to split the evening

  if (currentHour >= splitAfternoon && currentHour <= splitEvening) {
    // Between 12 PM and 5PM
    return 'great afternoon!';
  } else if (currentHour >= splitEvening) {
    // Between 5PM and Midnight
    return 'great evening!';
  }
  // Between dawn and noon
  return 'great morning!';
};

const HelloName = props => {
  return (
    <h4 className='text-center questionHeading marginTop200 mobileVerticalIntroQuestions'>
      {!props.inputName ? (
        <div>
          <div>Hi There!</div>
          {/* <img className='HelloImage' src={qLoading} alt='' /> */}
        </div>
      ) : (
        <FadeIn>
          {'Hi ' + props.inputName}
          {/* <img className='HelloImage' src={qLoading} alt='' /> */}
          {/* {'Hi ' +
            props.inputName +
            ', hope you’re having a ' +
            renderTimeOfTheDay()} */}
        </FadeIn>
      )}
    </h4>
  );
};

export default HelloName;
