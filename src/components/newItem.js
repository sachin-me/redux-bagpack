import React, {Component} from "react";
import { connect } from "react-redux";
import {deleteItem} from '../actions/index'

class NewItem extends Component {

  handleDelete = (e) => {
    let id = e.target.id;
    this.props.deleteItem(id)
  }

  render() {
    const {items} = this.props;
    return (
      <div className="item-wrapper">
        {
          items && items.map((v, i) => {
            return (
              <div key={i} className="item">
                <input type="checkbox" name="" id=""/>
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

const mapDispatchToProps = {deleteItem}

export default connect(mapStateToProps, mapDispatchToProps)(NewItem)