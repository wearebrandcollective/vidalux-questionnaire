import React from 'react';
import PropTypes from 'prop-types';

class DelayedRe extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hidden: false };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ hidden: true });
    }, this.props.wait);
  }

  render() {
    return this.state.hidden ? '' : this.props.children;
  }
}

DelayedRe.propTypes = {
  wait: PropTypes.number.isRequired
};

export default DelayedRe;
