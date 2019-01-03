import React, { Component } from "react";
import { connect } from "react-redux";
import {deleteItem, unpackArr} from '../actions/index';

class Items extends Component {

  handleDelete = (e) => {
    let id = e.target.id;
    this.props.deleteItem(id)
  }

  handleUnpack = (i) => {
    this.props.unpackArr(i);
  }

  render() {
    const {items} = this.props;
    return (
      <div>
        {
          items && items.map((v, i) => {
            return (
              <div key={i} className="item">
                <input type="checkbox" name="" id="" checked={false} onChange={() => this.handleUnpack(i)} />
                <span>{v.value}</span>
                <button id={i} onClick={this.handleDelete}>X</button>
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

const mapDispatchToProps = {deleteItem, unpackArr};

export default connect(mapStateToProps, mapDispatchToProps)(Items)