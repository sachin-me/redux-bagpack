import React, { Component } from "react";
import { connect } from "react-redux";
import { unpackItemSearch } from "../actions/index";

class SearchUnpack extends Component {

  handleSearch = (e) => {
    e.persist();
    this.props.unpackItemSearch(e);
  }

  render() {
    return (
      <input type="search" name="" id="" placeholder="search here..." onChange={(e) => this.handleSearch(e)} />
    )
  }
}

const mapStateToProps = state => {
  return state;
}

const mapDispatchToProps = {unpackItemSearch};

export default connect(mapStateToProps, mapDispatchToProps)(SearchUnpack)