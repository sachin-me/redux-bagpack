import React from "react";
import { connect } from "react-redux";

function NewItem(props) {
  const {items} = props;
  return (
    <div className="item-wrapper">
      {
        items && items.map((v, i) => {
          return (
            <div key={i} className="item">
              <input type="checkbox" name="" id=""/>
              <span>{v.value}</span>
              <button id={i}>X</button>
            </div>
          )
        })
      }
    </div>
  )
}

const mapStateToProps = state => {
  return state;
}

export default connect(mapStateToProps)(NewItem)