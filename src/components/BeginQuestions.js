import React from 'react';
// import { Select } from 'react-materialize';
import ReactSwipe from 'react-swipe';
// import Delayed from './Delayed';
// import DelayedRe from './DelayedRe';
import HelloName from './HelloName';

// import FadeIn from 'react-fade-in';

// import { CSSTransitionGroup } from 'react-transition-group';

import MaleSymb from '../images/GenderSymb/MaleSymb.png';
import FemaleSymb from '../images/GenderSymb/FemaleSymb.png';
// import NonBinary from '../images/GenderSymb/NonBinary.png';
import arrow from '../svg/arrow.svg';
import arrowBack from '../svg/arrowBack.svg';

const BeginQuestions = props => {
  let reactSwipeEl;

  const swipeNowAndAutoSwipeNext = () => {
    const myWindow = window.open('', 'myWindow', 'width=200,height=100');
    myWindow.close();
    reactSwipeEl.next();
    setTimeout(() => {
      const AutoSwipeNext = () => reactSwipeEl.next();
      AutoSwipeNext();
    }, 3000);
  };

  return (
    <div>
      <ReactSwipe
        className='carousel'
        swipeOptions={{ continuous: false }}
        ref={el => (reactSwipeEl = el)}
      >
        {/* -=-=-=-=-=-=-=-=-=-= Q1 */}
        <div>
          <h4 className='text-center questionHeading marginTop200 mobileVerticalIntroQuestions'>
            Before we begin, what's your name?
          </h4>
          <form action=''>
            <div className='input-group input-group-lg mb-3 correctWidthOfTheButton buttonMargin'>
              <input
                type='name'
                className='form-control noBorderForMyInput correctHeightForTheInputs'
                placeholder=''
                onChange={props.handleChange}
                onFocus={e => (e.target.placeholder = '')}
                onBlur={e => (e.target.placeholder = '')}
              />
              <div className='input-group-append'>
                <button
                  className='btn  bg-white noBorderForMyInput'
                  type='button'
                  onClick={swipeNowAndAutoSwipeNext}
                  disabled={!props.inputName}
                >
                  <img src={arrow} alt='>' />
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* -=-=-=-=-=-=-=-=-=-= QHELLO */}

        <div>
          <HelloName inputName={props.inputName} />
        </div>

        {/* -=-=-=-=-=-=-=-=-=-= Q2 */}

        <div>
          <h4 className='text-center questionHeading marginTop200 mobileVerticalIntroQuestions'>
            What’s your age?
          </h4>
          <div className='input-group input-group-lg mb-3 correctWidthOfTheButton buttonMargin'>
            <input
              type='number'
              className='form-control noBorderForMyInput correctHeightForTheInputs'
              placeholder=''
              onChange={props.handleChange2}
              onFocus={e => (e.target.placeholder = '')}
              onBlur={e => (e.target.placeholder = '')}
            />
            <div className='input-group-append'>
              <button
                className='btn  bg-white noBorderForMyInput'
                type='button'
                onClick={() => reactSwipeEl.next()}
                disabled={!props.inputAge}
              >
                <img src={arrow} alt='>' />
              </button>
            </div>
          </div>
          <div className='text-center backBtnPosition mt-5'>
            <div onClick={() => reactSwipeEl.prev()}>
              <img src={arrowBack} alt='<' />
              <button type='button' className='btn backBtn'>
                BACK
              </button>
            </div>
          </div>
        </div>

        {/* -=-=-=-=-=-=-=-=-=-= Q3 */}

        <div className='text-center'>
          <h1 className='questionHeading marginTop200 mobileVerticalIntroQuestions'>
            Which gender do you identify as?
          </h1>
          <div className=' row justify-content-center buttonMargin'>
            <div
              className='myGenderButtons genderBtnHover'
              onClick={() => reactSwipeEl.next()}
            >
              <div className='row ' onClick={props.handleMaleSelect}>
                <img className='mr-5 ml-3 maleSymb' src={MaleSymb} alt='' />
                <h6 className='mr-5 answerHeadings'>Male</h6>
              </div>
            </div>
            <div>
              <div
                className='myGenderButtons ml-5 mr-5 genderFemale genderBtnHover'
                onClick={() => reactSwipeEl.next()}
              >
                <div className='row' onClick={props.handleFemaleSelect}>
                  <img
                    className='mr-5 ml-3 femaleSymb'
                    src={FemaleSymb}
                    alt=''
                  />
                  <h6 className='mr-5 answerHeadings'>Female</h6>
                </div>
              </div>
            </div>
            <div>
              <div
                className='myGenderButtons genderBtnHover'
                onClick={() => reactSwipeEl.next()}
              >
                <div className='row' onClick={props.handleNonBinarySelect}>
                  <h6 className='ml-5 mr-5 answerHeadings'>Non-binary</h6>
                </div>
              </div>
            </div>
          </div>
          <div className='text-center backBtnPosition mt-5'>
            <div onClick={() => reactSwipeEl.prev()}>
              <img src={arrowBack} alt='<' />
              <button type='button' className='btn backBtn'>
                BACK
              </button>
            </div>
          </div>
        </div>

        {/* -=-=-=-=-=-=-=-=-=-= Q4 */}
        <div>
          <div>
            <h4 className='text-center questionHeading marginTop200 mobileVerticalIntroQuestions'>
              Where do you live?
            </h4>
            <form action=''>
              <div className='input-group input-group-lg mb-3 correctWidthOfTheButton buttonMargin'>
                <select
                  className='form-control noBorderForMyInput correctHeightForTheInputs'
                  onChange={props.handleChange4}
                  value={props.inputUSState}
                  onFocus={e => (e.target.placeholder = '')}
                  onBlur={e => (e.target.placeholder = '')}
                >
                  <option value='' />
                  <option value='Alabama'>Alabama</option>
                  <option value='Alaska'>Alaska</option>
                  <option value='Arizona'>Arizona</option>
                  <option value='Arkansas'>Arkansas</option>
                  <option value='California'>California</option>
                  <option value='Colorado'>Colorado</option>
                  <option value='Connecticut'>Connecticut</option>
                  <option value='Delaware'>Delaware</option>
                  <option value='District of Columbia'>
                    District of Columbia
                  </option>
                  <option value='Florida'>Florida</option>
                  <option value='Georgia'>Georgia</option>
                  <option value='Guam'>Guam</option>
                  <option value='Hawaii'>Hawaii</option>
                  <option value='Idaho'>Idaho</option>
                  <option value='Illinois'>Illinois</option>
                  <option value='Indiana'>Indiana</option>
                  <option value='Iowa'>Iowa</option>
                  <option value='Kansas'>Kansas</option>
                  <option value='Kentucky'>Kentucky</option>
                  <option value='Louisiana'>Louisiana</option>
                  <option value='Maine'>Maine</option>
                  <option value='Maryland'>Maryland</option>
                  <option value='Massachusetts'>Massachusetts</option>
                  <option value='Michigan'>Michigan</option>
                  <option value='Minnesota'>Minnesota</option>
                  <option value='Mississippi'>Mississippi</option>
                  <option value='Missouri'>Missouri</option>
                  <option value='Montana'>Montana</option>
                  <option value='Nebraska'>Nebraska</option>
                  <option value='Nevada'>Nevada</option>
                  <option value='New Hampshire'>New Hampshire</option>
                  <option value='New Jersey'>New Jersey</option>
                  <option value='New Mexico'>New Mexico</option>
                  <option value='New York'>New York</option>
                  <option value='North Carolina'>North Carolina</option>
                  <option value='North Dakota'>North Dakota</option>
                  <option value='Northern Marianas Islands'>
                    Northern Marianas Islands
                  </option>
                  <option value='Ohio'>Ohio</option>
                  <option value='Oklahoma'>Oklahoma</option>
                  <option value='Oregon'>Oregon</option>
                  <option value='Pennsylvania'>Pennsylvania</option>
                  <option value='Puerto Rico'>Puerto Rico</option>
                  <option value='Rhode Island'>Rhode Island</option>
                  <option value='South Carolina'>South Carolina</option>
                  <option value='South Dakota'>South Dakota</option>
                  <option value='Tennessee'>Tennessee</option>
                  <option value='Texas'>Texas</option>
                  <option value='Utah'>Utah</option>
                  <option value='Vermont'>Vermont</option>
                  <option value='Virginia'>Virginia</option>
                  <option value='Virgin Islands'>Virgin Islands</option>
                  <option value='Washington'>Washington</option>
                  <option value='West Virginia'>West Virginia</option>
                  <option value='Wisconsin'>Wisconsin</option>
                  <option value='Wyoming'>Wyoming</option>
                  <option value='Wyoming'>Other</option>
                </select>
                <div className='input-group-append '>
                  <button
                    className='btn  bg-white noBorderForMyInput a333'
                    type='submit'
                    onClick={props.onTriggerBeginBtn}
                    disabled={!props.inputUSState}
                  >
                    <img src={arrow} alt='>' />
                  </button>
                </div>
              </div>
            </form>
            <div className='text-center backBtnPosition mt-5'>
              <div onClick={() => reactSwipeEl.prev()}>
                <img src={arrowBack} alt='<' />
                <button type='button' className='btn backBtn'>
                  BACK
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <div className='text-center'>
            <button
              onClick={props.onTriggerBeginBtn}
              type='button'
              className='btn '
            >
              Quiz
            </button>
          </div> */}
      </ReactSwipe>
    </div>
  );
};

export default BeginQuestions;
