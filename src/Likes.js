import React from "react";

const Likes = (props) => {
  console.log(props);
  return (
    <div className="button-controls">
      <button>👍 {props.like}</button>
      <button>👎</button>
    </div>
  );
  return <div>Likes</div>;
};

export default Likes;
