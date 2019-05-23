import React from 'react';
import { Select } from 'react-materialize';

const BeginBtn = props => {
  return (
    <div className='#b0bec5 blue-grey lighten-3'>
      <form
        className='input-group mb-3 justify-content-center mt-5'
        onSubmit={props.handleSubmit}
      >
        <input
          type='text'
          className='form-control text-center mt-5'
          placeholder='What is your name?'
          onChange={props.handleChange}
          onFocus={e => (e.target.placeholder = '')}
          onBlur={e => (e.target.placeholder = 'What is your name?')}
        />
        <div className='input-group-append'>
          <button
            onClick={props.onTriggerBeginBtn}
            className='btn-large btn-outline-secondary mt-5'
            type='button'
          >
            To Quiz
          </button>
        </div>
        <input
          type='number'
          className='form-control text-center mt-5'
          autoComplete='off'
          placeholder='What is your age?'
          onChange={props.handleChange2}
          onFocus={e => (e.target.placeholder = '')}
          onBlur={e => (e.target.placeholder = 'What is your age?')}
        />

        <Select onChange={props.handleChange3} className='dropdown-content'>
          <option value=''>What is your gender?</option>
          <option value={props.inputGender}>Male</option>
          <option value={props.inputGender}>Female</option>
          <option value={props.inputGender}>Non-binary</option>
        </Select>

        <Select onChange={props.handleChange4} className='dropdown-content'>
          <option value=''>What state do you live in?</option>
          <option value={props.inputUSState}>Alabama</option>
          <option value={props.inputUSState}>Alaska</option>
          <option value={props.inputUSState}>Arizona</option>
          <option value={props.inputUSState}>Arkansas</option>
          <option value={props.inputUSState}>California</option>
          <option value={props.inputUSState}>Colorado</option>
          <option value={props.inputUSState}>Connecticut</option>
          <option value={props.inputUSState}>Delaware</option>
          <option value={props.inputUSState}>District of Columbia</option>
          <option value={props.inputUSState}>Florida</option>
          <option value={props.inputUSState}>Georgia</option>
          <option value={props.inputUSState}>Guam</option>
          <option value={props.inputUSState}>Hawaii</option>
          <option value={props.inputUSState}>Idaho</option>
          <option value={props.inputUSState}>Illinois</option>
          <option value={props.inputUSState}>Indiana</option>
          <option value={props.inputUSState}>Iowa</option>
          <option value={props.inputUSState}>Kansas</option>
          <option value={props.inputUSState}>Kentucky</option>
          <option value={props.inputUSState}>Louisiana</option>
          <option value={props.inputUSState}>Maine</option>
          <option value={props.inputUSState}>Maryland</option>
          <option value={props.inputUSState}>Massachusetts</option>
          <option value={props.inputUSState}>Michigan</option>
          <option value={props.inputUSState}>Minnesota</option>
          <option value={props.inputUSState}>Mississippi</option>
          <option value={props.inputUSState}>Missouri</option>
          <option value={props.inputUSState}>Montana</option>
          <option value={props.inputUSState}>Nebraska</option>
          <option value={props.inputUSState}>Nevada</option>
          <option value={props.inputUSState}>New Hampshire</option>
          <option value={props.inputUSState}>New Jersey</option>
          <option value={props.inputUSState}>New Mexico</option>
          <option value={props.inputUSState}>New York</option>
          <option value={props.inputUSState}>North Carolina</option>
          <option value={props.inputUSState}>North Dakota</option>
          <option value={props.inputUSState}>Northern Marianas Islands</option>
          <option value={props.inputUSState}>Ohio</option>
          <option value={props.inputUSState}>Oklahoma</option>
          <option value={props.inputUSState}>Oregon</option>
          <option value={props.inputUSState}>Pennsylvania</option>
          <option value={props.inputUSState}>Puerto Rico</option>
          <option value={props.inputUSState}>Rhode Island</option>
          <option value={props.inputUSState}>South Carolina</option>
          <option value={props.inputUSState}>South Dakota</option>
          <option value={props.inputUSState}>Tennessee</option>
          <option value={props.inputUSState}>Texas</option>
          <option value={props.inputUSState}>Utah</option>
          <option value={props.inputUSState}>Vermont</option>
          <option value={props.inputUSState}>Virginia</option>
          <option value={props.inputUSState}>Virgin Islands</option>
          <option value={props.inputUSState}>Washington</option>
          <option value={props.inputUSState}>West Virginia</option>
          <option value={props.inputUSState}>Wisconsin</option>
          <option value={props.inputUSState}>Wyoming</option>
        </Select>
      </form>
    </div>
  );
};

export default BeginBtn;
