import React from "react";
import Item from "./Item.js"
import {removePost} from "../../../actions"
import {connect} from "react-redux"

class ItemContainer extends React.Component {
  constructor(props){
    super(props)

    this.handleRemove = this.handleRemove.bind(this)
    }

  handleRemove(){
    this.props.removePost(this.props.index)

  }
  render() {
    return(
      <Item {...this.props} handleRemove= {this.handleRemove}/>
    )
  }
}
export default connect(null,{removePost})(ItemContainer)
