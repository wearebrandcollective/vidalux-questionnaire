import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
import Question from '../components/Question';
// import QuestionCount from '../components/QuestionCount';
import AnswerOption from '../components/AnswerOption';
import Delayed from './Delayed';
import DelayedRe from './DelayedRe';

import qLoading from '../svg/qLoading.svg';

function Quiz(props) {
  function renderAnswerOptions(key) {
    return (
      <AnswerOption
        key={key.content}
        answerContent={key.content}
        questionImage={key.questionImage}
        answerType={key.type}
        answer={props.answer}
        questionId={props.questionId}
        onAnswerSelected={props.onAnswerSelected}
        animation={props.animation}
      />
    );
  }

  return (
    <div>
      <CSSTransitionGroup
        className='container bgf'
        component='div'
        transitionName='fade'
        transitionEnterTimeout={800}
        transitionLeaveTimeout={500}
        transitionAppear
        transitionAppearTimeout={500}
      >
        <div key={props.questionId} className='fadeMargin'>
          <DelayedRe wait={800}>
            <div className='text-center'>
              {/* <img src={props.animation} alt='' /> */}
              <img className='HelloImage' src={qLoading} alt='' />

              <h6 className='personalizing'>Personalizing...</h6>
            </div>
          </DelayedRe>
          <Delayed wait={800}>
            {/* <QuestionCount
              counter={props.questionId}
              total={props.questionTotal}
            /> */}
            <Question content={props.question} />
            <div id='menu-outer '>
              <div className='text-center mobileVerticalQuestions'>
                <ul
                  className='answerOptions justify-content-center'
                  id='horizontal-list'
                >
                  {props.answerOptions.map(renderAnswerOptions)}
                </ul>
              </div>
            </div>
          </Delayed>
        </div>
      </CSSTransitionGroup>
    </div>
  );
}

Quiz.propTypes = {
  answer: PropTypes.string.isRequired,
  answerOptions: PropTypes.array.isRequired,
  question: PropTypes.string.isRequired,
  questionId: PropTypes.number.isRequired,
  questionTotal: PropTypes.number.isRequired,
  onAnswerSelected: PropTypes.func.isRequired,
  animation: PropTypes.string.isRequired
};

export default Quiz;
