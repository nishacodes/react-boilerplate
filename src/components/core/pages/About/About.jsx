import React from 'react';
import PropTypes from 'prop-types';
import autobind from 'autobind-decorator';
import CSSModules from 'react-css-modules';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import styles from './about.scss';

class About extends React.Component {

  constructor(props) {
    super(props);
  }

  static defaultProps = {
    /*
     * Insert default props here. For documentation, check out:
     * https://reactjs.org/docs/typechecking-with-proptypes.html
     */
  }

  render() {
    return (
      <div>
        <h1>About</h1>
      </div>
    );
  }
}

About.propTypes = {
  /*
   * Insert prop types here. For documentation, check out:
   * https://reactjs.org/docs/typechecking-with-proptypes.html
   */
}

function mapStateToProps(state) {
  return {

  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch: bindActionCreators({}, dispatch)
  };
}


export {About};

const styledComponent = CSSModules(About, styles);
export {styledComponent as styledComponent};

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(styledComponent);
export default connectedComponent;
