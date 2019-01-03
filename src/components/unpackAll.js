import React, { Component } from "react";
import { connect } from "react-redux";
import {unpackAllPacked} from '../actions/index';

class UnpackAll extends Component {

  handleUnpack = () => {
    this.props.unpackAllPacked();
  }

  render() {
    return (
      <div>
        <button onClick={this.handleUnpack} >Unpack All Packed Items</button>
      </div>
    )
  }
}

const mapStateToProps = state => {return state}

const mapDispatchToProps = {unpackAllPacked}

export default connect(mapStateToProps, mapDispatchToProps)(UnpackAll);