import React, { Component } from "react";
import { connect } from "react-redux";
import {packArrFun, deletePacked} from '../actions/index';


class PackItem extends Component {

  handleChange = (i) => {
    this.props.packArrFun(i);
  }

  handleDelete = (i) => {
    this.props.deletePacked(i);
  }

  render() {
    const {packArr} = this.props;
    return (
      <div>
        {
          packArr.map((v, i) => {
            return (
              <div key={i} className="item">
                <input type="checkbox" name="" id="" checked={false} onChange={() => this.handleChange(i)} />
                <span>{v.value}</span>
                <button id={i} onClick={() => this.handleDelete(i)}>X</button>
              </div>
            )
          })
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return state;
}

const mapDispatchToProps = {packArrFun, deletePacked}

export default connect(mapStateToProps, mapDispatchToProps)(PackItem)