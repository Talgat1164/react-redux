import React from "react";
import { useDispatch, useSelector } from "react-redux";
import SingleComment from "./SingleComment";
import { useState } from "react";
import { commentCreate } from "./redux/actions";
import uniqid from "uniqid";

const Comments = (props) => {
  const [textComment, setTextComment] = useState("");
  // console.log("comments props > ", props);
  const dispatch = useDispatch();

  const handleInput = (e) => {
    console.log("input >>>", e.target.value);
    setTextComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(" submit text comment > ", textComment);
  };

  return (
    <div className="card-comments">
      <form onSubmit={handleSubmit} className="comments-item-create">
        <input type="text" value={textComment} onChange={handleInput} />
        <input type="submit" hidden />
      </form>
      <SingleComment />
    </div>
  );
};

export default Comments;
