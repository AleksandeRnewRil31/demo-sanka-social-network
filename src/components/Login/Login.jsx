import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import s from "./login.module.css";
import { login } from "./../../redux/auth-reducer";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

function LoginForm(props) {
    const validationSchema = Yup.object().shape({
        email: Yup.string().required('Required'),
        password: Yup.string().required("Введите пароль")
    })

    const prepareValues = (values) => ({
        ...values,
        remember: !!values.remember
    })
    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }
    return (
        <div>
            <Formik
                initialValues={{
                    email: "",
                    password: "",
                    rememberMe: ""
                }}
                validateOnBlur
                onSubmit={(formData, {setSubmitting, setFieldError, setStatus}) => {
                    const formateData = prepareValues(formData);
                    props.login(formateData.email, formateData.password, formateData.rememberMe, setSubmitting, setFieldError, setStatus);
                }}
                validationSchema={validationSchema}
            >
                {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty, status, ...data }) => (
                    <div className={s.form}>{status}
                        <div>
                            <input
                    className={s.input}
                                placeholder={"Email"}
                                name={"email"}
                                type={"text"}
                                onChange={handleChange}
                                value={values.login}
                                onBlur={handleBlur}
                            />
                        </div>
                        {touched.email && errors.email && <p className={s.error}>{errors.email}</p>}
                        <div>
                            <input
                                className={s.input}
                                placeholder={"Password"}
                                name={"password"}
                                type={"password"}
                                onChange={handleChange}
                                value={values.password}
                                onBlur={handleBlur}
                            />
                        </div>
                        {touched.password && errors.password && <p className={s.error}>{errors.password}</p>}
                        <div>
                            <input
                                type={"checkbox"}
                                name={"rememberMe"}
                                placeholder={"Remember me"}
                                onChange={handleChange}
                                value={values.rememberMe}
                                onBlur={handleBlur}
                            /> remember me
                        </div>
                        {/* <div className={s.formSummaryError}>
                            ERROR
                        </div> */}
                        <div>
                            <button
                                name={"submit"}
                                type={"submit"}
                                disabled={!isValid && !dirty}
                                onClick={handleSubmit}
                            >Send</button>
                        </div>
                    </div>
                )}
            </Formik>
        </div>
    );
}



const Login = (props) => {

    return <div>
        <h1>Login</h1>
        <LoginForm login={props.login}  />
    </div>

}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})


export default connect(mapStateToProps, { login })(Login);
