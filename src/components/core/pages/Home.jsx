import React, {Component, PropTypes} from 'react';
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import autobind from 'autobind-decorator';
import {
  increment
} from '../../../reducers/sample/actions'

class Home extends Component {

  constructor(props) {
    super(props);
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

const mapStateToProps = state => ({
  count: state.sample.count
})

const mapDispatchToProps = dispatch => {
  return {
    dispatch: bindActionCreators({
      increment
    }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
