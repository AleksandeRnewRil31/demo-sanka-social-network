import React from "react";
import { Redirect } from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import { Formik } from "formik";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id} />);
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} />);
    let newMessageBody = state.newMessageBody;

    // let newDialogElement = React.createRef();

    // let onSendMessageClick = () => {
    //     props.sendMessage();
    // }

    // let onNewMessageChange = (e) => {
    //     let body = e.target.value;
    //     props.updateNewMessageBody(body);
    // }

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    }

    if (!props.isAuth) return <Redirect to={"/login"} />;

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
            </div>
            <AddMessageForm newMessageBody={props.newMessageBody} addNewMessage= {addNewMessage}/>
        </div>
    )
}

function AddMessageForm(props) {
    return (
        <div>
            <Formik
                initialValues={{
                    newMessageBody: ""
                }}
                validateOnBlur
                onSubmit={props.addNewMessage} 
                
            // validationSchema={validationsSchema}
            >

                {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                    <div>
                        <textarea placeholder={"Enter your message"}
                            name={"newMessageBody"}
                            type={"text"}
                            onChange={handleChange}
                            value={values.newMessageBody}
                            onBlur={handleBlur} />
                        {touched.newMessageBody && errors.newMessageBody && <p>{errors.newMessageBody}</p>}
                        <div>

                            <button
                                name={"submit"}
                                type={"submit"}
                                disabled={!isValid && !dirty}
                                onClick={handleSubmit}
                            >Send</button>
                        </div>
                    </div>
                )
                }
            </Formik>
        </div>
    );
}



export default Dialogs;