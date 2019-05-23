import React from 'react';

const Buy = props => {
  return (
    <div class='row'>
      <div class='col-8'>
        <form>
          <div class='form-row'>
            <div class='form-group col-md-6'>
              <input
                type='text'
                class='form-control'
                placeholder='First name'
              />
            </div>
            <div class='form-group col-md-6'>
              <input type='text' class='form-control' placeholder='Last name' />
            </div>
          </div>
          <div class='form-group'>
            <input
              type='text'
              class='form-control'
              id='inputAddress'
              placeholder='Street Address'
            />
          </div>
          <div class='form-group'>
            <input
              type='text'
              class='form-control'
              id='inputAddress2'
              placeholder='Street Address Cont.'
            />
          </div>
          <div class='form-row'>
            <div class='form-group col-md-6'>
              <input
                type='text'
                class='form-control'
                id='inputCity'
                placeholder='City'
              />
            </div>
            <div class='form-group col-md-4'>
              <select id='inputState' class='form-control'>
                <option selected>State</option>
                <option value=''>What state do you live in?</option>
                <option>Alabama</option>
                <option>Alaska</option>
                <option>Arizona</option>
                <option>Arkansas</option>
                <option>California</option>
                <option>Colorado</option>
                <option>Connecticut</option>
                <option>Delaware</option>
                <option>District of Columbia</option>
                <option>Florida</option>
                <option>Georgia</option>
                <option>Guam</option>
                <option>Hawaii</option>
                <option>Idaho</option>
                <option>Illinois</option>
                <option>Indiana</option>
                <option>Iowa</option>
                <option>Kansas</option>
                <option>Kentucky</option>
                <option>Louisiana</option>
                <option>Maine</option>
                <option>Maryland</option>
                <option>Massachusetts</option>
                <option>Michigan</option>
                <option>Minnesota</option>
                <option>Mississippi</option>
                <option>Missouri</option>
                <option>Montana</option>
                <option>Nebraska</option>
                <option>Nevada</option>
                <option>New Hampshire</option>
                <option>New Jersey</option>
                <option>New Mexico</option>
                <option>New York</option>
                <option>North Carolina</option>
                <option>North Dakota</option>
                <option>Northern Marianas Islands</option>
                <option>Ohio</option>
                <option>Oklahoma</option>
                <option>Oregon</option>
                <option>Pennsylvania</option>
                <option>Puerto Rico</option>
                <option>Rhode Island</option>
                <option>South Carolina</option>
                <option>South Dakota</option>
                <option>Tennessee</option>
                <option>Texas</option>
                <option>Utah</option>
                <option>Vermont</option>
                <option>Virginia</option>
                <option>Virgin Islands</option>
                <option>Washington</option>
                <option>West Virginia</option>
                <option>Wisconsin</option>
                <option>Wyoming</option>
              </select>
            </div>
            <div class='form-group col-md-2'>
              <input
                type='text'
                class='form-control'
                id='inputZip'
                placeholder='Zip Code'
              />
            </div>
          </div>
          <div class='form-row'>
            <div class='form-group col-md-6'>
              <input type='email' class='form-control' placeholder='Email' />
            </div>
            <div class='form-group col-md-6'>
              <input
                type='tel'
                pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
                class='form-control'
                placeholder='Phone Number'
              />
            </div>
          </div>
        </form>
      </div>
      <div class='col-4'>col-4</div>
    </div>
  );
};

export default Buy;
