import React, {Component, Fragment} from "react";
import { connect } from "react-redux";
import {deleteItem, unpackArr, unpackItemSearch} from '../actions/index';
import PackItem from './packItem';
import UnpackAll from './unpackAll';
import Items from './items';
import Undo from './undo';
import Redo from './redo';

class NewItem extends Component {

  render() {
    return (
      <Fragment>
        <Undo />
        <Redo />
        <h2>Unpacked Items</h2>
        <div className="item-wrapper">
          <Items />
        </div>
          <h2>Packed Items</h2>
          <div className="item-wrapper">
            <PackItem />
          </div>
          <div>
            <UnpackAll />
          </div>
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return state;
}

const mapDispatchToProps = {deleteItem, unpackArr, unpackItemSearch}

export default connect(mapStateToProps, mapDispatchToProps)(NewItem)