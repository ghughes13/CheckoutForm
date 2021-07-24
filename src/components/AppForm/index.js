import React, { useEffect, useState } from "react";
import Loader from "../Loader";

import "./style.scss";

export default function AppForm({
  formCategory = "Consultation",
  className = "",
  formName = "Consultation Form",
  children,
  explainerText,
  submitBtnText = "Get In Contact",
}) {
  const [submittingForm, setSubmittingForm] = useState(false);
  const [submissionError, setSubmissionError] = useState(false);
  const [submitSuccessful, setSubmissionSuccessful] = useState(false);
  const [relativeUrl, setRelativeUrl] = useState(window.location.href);

  useEffect(() => {
    let relativeURL = window.location.pathname;

    setRelativeUrl(relativeURL);
    console.log(window.location.href);
  }, []);

  const submitForm = () => {
    setSubmittingForm(true);
    setSubmissionError(false);

    const formName = document.getElementById("form-id-hook");

    fetch(window.location.href, {
      method: "POST",
      body: new FormData(formName),
    })
      .then((res) => {
        if (res.status === 200) {
          setSubmissionSuccessful(true);
          setSubmittingForm(false);
        } else {
          console.log(res);
          setSubmittingForm(false);
          setSubmissionError(true);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <form
      action={relativeUrl + "#thanks"}
      className={"app-form " + className}
      data-category={formCategory}
      encType="multipart/form-data"
      id="form-id-hook"
      method="POST"
      name={formName}
      netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={(e) => {
        e.preventDefault();
        submitForm();
      }}
    >
      {!submitSuccessful && explainerText && (
        <div
          className="explainer-text"
          dangerouslySetInnerHTML={{ __html: explainerText }}
        ></div>
      )}
      {submittingForm && <Loader />}
      {submitSuccessful && (
        <div className="thank-you" id="thanks">
          <h5>
            Your form has been successfully submitted! We'll be in touch
            shortly.
          </h5>
        </div>
      )}
      {!submittingForm && !submitSuccessful ? (
        <>
          <input type="hidden" name="form-name" value={formName} />
          <input type="hidden" name="bot-field" id="bot" />
          {children}
          <div className="button-container">
            <button type="submit">{submitBtnText}</button>
          </div>
        </>
      ) : (
        ""
      )}
      {submissionError && (
        <p id="error-msg" className="show-error">
          Looks like there was a problem submitting your form. <br />
          Please ensure ALL form fields are filled out properly and try again.
        </p>
      )}
    </form>
  );
}
