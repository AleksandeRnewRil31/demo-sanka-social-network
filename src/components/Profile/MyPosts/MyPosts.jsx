import { Formik } from "formik";
import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = (props) => {
console.log("skdjksdjfbjk");
  let postsElements =
    props.posts.map(p => <Post message={p.message} key={p.id} likesCount={p.likesCount} />)

  let newPostElement = React.createRef();

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  }

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
      <AddNewPostForm onAddPost={onAddPost}/>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
}

function AddNewPostForm(props) {
  return (
      <div>
          <Formik
              initialValues={{
                newPostText: ""
              }}
              validateOnBlur
              onSubmit={props.onAddPost} 
              // handleSubmit
              
          // validationSchema={validationsSchema}
          >

              {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                  <div>
                      <textarea placeholder={"Enter your post"}
                          name={"newPostText"}
                          type={"text"}
                          onChange={handleChange}
                          value={values.newMessageBody}
                          onBlur={handleBlur} />
                      {touched.newPostElement && errors.newPostElement && <p>{errors.newPostElement}</p>}
                      <div>

                          <button
                              name={"onAddPost"}
                              type={"submit"}
                              disabled={!isValid && !dirty}
                              onClick={handleSubmit}
                          >Add post</button>
                      </div>
                  </div>
              )
              }
          </Formik>
      </div>
  );
}

export default MyPosts; 