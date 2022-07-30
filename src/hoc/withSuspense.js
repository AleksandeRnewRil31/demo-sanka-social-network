import React from "react";
import Preloader from "../components/common/Preloader/Preloader"
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

export const withSuspense = (Component) => {

    return (props) => {
        return <React.Suspense fallback={<Preloader />} > <Component {...props} />
        </React.Suspense>
    };
}