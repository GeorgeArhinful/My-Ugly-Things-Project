import React from "react";
import Form from "./Form.js";
import {addPost} from "../../actions";

import {connect} from "react-redux"

class FormContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      title: "",
      description: "",
      url: "",
      isPost: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleChange(e) {
    e.persist();
    this.setState((prevState) => ({
      [e.target.name]: e.target.value
    }))
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.addPost(this.state.title, this.state.description, this.state.url);
    // this.setState((prevState) => ({title: "", description: "", url: ""}))
  }
  handleToggle() {
    this.setState((prevState) => ({
      isPost: !prevState.isPost
    }))
  }
  render() {
    return (<Form {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit} handleToggle={this.handleToggle}/>)
  }
}
export default connect(null, {addPost})(FormContainer)
