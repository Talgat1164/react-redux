import React from "react";
import { connect } from "react-redux";
import { likesReducer } from "./redux/likesReducer";

const Likes = (props) => {
  console.log("render > ", props);
  return (
    <div className="button-controls">
      <button onClick={props.onIncrementLikes}>👍 {props.likes}</button>
      <button onClick={props.onDecrementLikes}>👎</button>
    </div>
  );
  return <div>Likes</div>;
};

function mapStateToProps(state) {
  console.log("mapStateToProps > ", state);
  const { likesReducer } = state;
  return {
    likes: likesReducer.likes,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrementLikes: () => {
      console.log("click");
      const action = { type: "INCREMENT" };
      dispatch(action);
    },
    onDecrementLikes: () => {
      console.log("click decrement");
      const action = { type: "DECREMENT" };
      dispatch(action);
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes);
