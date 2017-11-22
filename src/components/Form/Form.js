import React from "react";
import "./Form.css";

let Form = (props) => (
  <div>
    <div>
      <form onSubmit={props.handleSubmit} style={{
        display: props.isPost
          ? "inherit"
          : "none"
      }}>
        <div className="row mt-4 mx-2 text-center">
          <div className="col-md-4">
            <input name="description" value={props.description} type="text" placeholder="Description" onChange={props.handleChange}/>
          </div>
          <div className="col-md-4">
            <input name="title" value={props.title} type="text" placeholder="Title" onChange={props.handleChange}/>
          </div>
          <div className="col-md-4">
            <input name="url" value={props.url} type="text" placeholder="URL" onChange={props.handleChange}/>
          </div>
        </div>
        <div className="text-center mt-4">
          <button type="submit" className="btn btn-secondary rounded">Submit</button>

        </div>
      </form>
      <button onClick={props.handleToggle} style={{
        display: props.isPost
          ? "none"
          : "inherit"
      }}>post</button>
    </div>
  </div>
)
export default Form
