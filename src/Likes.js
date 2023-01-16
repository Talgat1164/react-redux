import React from "react";
import { connect } from "react-redux";

const Likes = (props) => {
  console.log("render > ", props);
  return (
    <div className="button-controls">
      <button>👍 {props.likes}</button>
      <button>👎</button>
    </div>
  );
  return <div>Likes</div>;
};

function mapStateToProps(state) {
  console.log("mapStateToProps > ", state);
  return {
    likes: state.likes,
  };
}

export default connect(mapStateToProps)(Likes);
