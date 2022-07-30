import React from "react";
import { NavLink } from "react-router-dom";
import s from "./../Dialogs.module.css";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialogItem + " " + s.active}>
                <img src="https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg"></img>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;