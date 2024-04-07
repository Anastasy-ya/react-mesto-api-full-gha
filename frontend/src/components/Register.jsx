import React from "react";
import { Link } from "react-router-dom";

import EntryForm from "./EntryForm";

function Register({ title, formName, buttonName, onSubmit, isLoading }) {
  return (
    <>
      <div className="entry-container content">
        <EntryForm
          onSubmit={onSubmit}
          title={title}
          formName={formName}
          buttonName={buttonName}
          isLoading={isLoading}
        />
        <p className="entry-container__subtitle">
          Already registered? &ensp;
          <Link
            to="/sign-in"
            className="entry-container__subtitle entry-container__subtitle_type_link"
          >
            Sign in
          </Link>
        </p>
      </div>
    </>
  );
}

export default Register;
