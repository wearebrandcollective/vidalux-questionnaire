import React from 'react';
import PropTypes from 'prop-types';

function AnswerOption(props) {
  return (
    <li className='answerOption'>
      <input
        type='radio'
        className=''
        name='radioGroup'
        checked={props.answerType === props.answer}
        id={props.answerType}
        value={props.answerType}
        disabled={props.answer}
        onChange={props.onAnswerSelected}
      />

      <label className='radioCustomLabel' htmlFor={props.answerType}>
        {props.questionImage === 'none' ? (
          <h6 className='answerHeadings'>{props.answerContent}</h6>
        ) : (
          <div>
            <img className='myHtmlHack2' src={props.questionImage} alt='' />
            <h6 className='myHtmlHack myHtmlHack3 answerHeadings underImageh6'>
              {props.answerContent}
            </h6>
          </div>
        )}
      </label>
    </li>
  );
}

AnswerOption.propTypes = {
  answerType: PropTypes.string.isRequired,
  answerContent: PropTypes.string.isRequired,
  // questionImage: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  onAnswerSelected: PropTypes.func.isRequired
};

export default AnswerOption;
