import React from 'react';
import VidaluxLogoDark from '../svg/VidaluxLogoDark.svg';

const Header = props => {
  return (
    <div className='App-header'>
      <img
        src={VidaluxLogoDark}
        className='App-logo'
        alt='logo'
        onClick={props.startOver}
      />
    </div>
  );
};

export default Header;
