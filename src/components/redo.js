import React, { Component } from "react";
import { connect } from "react-redux";
import {redoItem} from "../actions/index";

class Redo extends Component {

  handleRedo = () => {
    this.props.redoItem();
  }

  render() {
    return (
      <button onClick={this.handleRedo}>Redo</button>
    )
  }
}

const mapStateToProps = state => {
  return state;
}

const mapDispatchToProps = {redoItem}

export default connect(mapStateToProps, mapDispatchToProps)(Redo)