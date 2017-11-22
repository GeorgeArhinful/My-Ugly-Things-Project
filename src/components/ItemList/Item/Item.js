import React from "react";
import "./Item.css";

let Item = (props) => (
  <div className="text" index={props.index}>
    <div className="row">
      <div className="col-md-4">
        <h4>{props.data.title}</h4>
        <div className="image" style={{backgroundImage: `url("${props.data.url}")`}}></div>
        <h5>{props.data.description}</h5>
        <button className="btn btn-secondary rounded" onClick={props.handleRemove}>REMOVE POST</button>
      </div>
    </div>
  </div>
)

export default Item
