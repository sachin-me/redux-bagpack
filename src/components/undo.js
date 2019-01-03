import React, { Component } from "react";
import { connect } from "react-redux";
import {undoItem, undoPacked} from "../actions/index";
import items from "./items";

class Undo extends Component {

  handleUndo = () => {
    const {packArr, items} = this.props;
    packArr ? this.props.undoPacked() : this.props.undoItem();
    if (items) this.props.undoItem();
     
  }

  render() {
    return (
      <button onClick={this.handleUndo}>Undo</button>
    )
  }
}

const mapStateToProps = state => {
  return state;
}

const mapDispatchToProps = {undoItem, undoPacked}

export default connect(mapStateToProps, mapDispatchToProps)(Undo)