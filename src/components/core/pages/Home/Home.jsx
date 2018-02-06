import React from 'react';
import PropTypes from 'prop-types';
import autobind from 'autobind-decorator';
import CSSModules from 'react-css-modules';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import styles from './home.scss';

import {
  increment
} from '../../../../actions/core/homeActions';

class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  static defaultProps = {
    /*
     * Insert default props here. For documentation, check out:
     * https://reactjs.org/docs/typechecking-with-proptypes.html
     */
  }

  incrementCount() {
    this.props.dispatch.increment()
  }


  render() {
    return(
      <div>
        <h1 onClick={this.incrementCount.bind(this)}>Home</h1>
        {this.props.count}
      </div>
    );
  }
}

Home.propTypes = {
  /*
   * Insert prop types here. For documentation, check out:
   * https://reactjs.org/docs/typechecking-with-proptypes.html
   */
}

function mapStateToProps(state) {
  return {
    count: state.sample.count
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch: bindActionCreators({
      increment
    }, dispatch)
  };
}


export {Home};

const styledComponent = CSSModules(Home, styles);
export {styledComponent as styledComponent};

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(styledComponent);
export default connectedComponent;
