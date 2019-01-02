import React, {Component} from "react";
import { connect } from "react-redux";
import addItem from '../actions/index';
import NewItem from '../components/newItem';


class Form extends Component {

  state = {
    value: ''
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.value) return;
    this.props.addItem(this.state.value);
    this.setState({value: ""})
  }

  render() {
    return (
      <div className="main-wrapper">
        <form action="" onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          <button>Add item</button>
        </form>
        <NewItem />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return state;
}

const mapDispatchToProps = {addItem}

export default connect(mapStateToProps, mapDispatchToProps)(Form);