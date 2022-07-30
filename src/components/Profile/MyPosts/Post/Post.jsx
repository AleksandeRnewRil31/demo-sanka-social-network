import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
        <div className={s.item}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt9PYsFH3vxHAL1zj86lo5dncKY2IkHIGEqA&usqp=CAU"></img>
          { props.message }
          <div>
          <span>
            { props.likesCount }
          </span>
          </div>
        </div>
  )
}

export default Post; 