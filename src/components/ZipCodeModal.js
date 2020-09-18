import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import "./ZipCodeModal.css"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as yup from "yup"
import {
  removeNonNumbers,
  setZipToLocalStorage,
  getAndValidateZipFromLocalStorage,
  VALID_EMAIL_PATTERN,
} from "../util"
import {
  isAllowedZipcode,
  getLabelForZipCode,
  getCountyForZipCode,
} from "../zipcodes"

const zipSchema = yup.object().shape({
  zip: yup
    .string()
    .required("We need your 5 digit zip!")
    // ##### and #####-#### format zip codes
    .matches(
      VALID_EMAIL_PATTERN,
      `That doesn't look quite right. Please enter your 5-digit zip code.`
    ),
})

export const ZipInputPage = ({ updateZipCode, setShowModal }) => {
  const onSubmit = zipObject => {
    updateZipCode(zipObject.zip)
    setShowModal("true") // Necessary when ZipInputPage is shown outside modal
  }
  return (
    <Formik
      initialValues={{ zip: "" }}
      validationSchema={zipSchema}
      onSubmit={onSubmit}
      validateOnBlur={true}
      validateOnChange={false}
    >
      {({ isSubmitting, errors, touched }) => (
        <Form className="zipcode-modal-page">
          {errors.zip && touched.zip ? (
            <ErrorMessage
              name="zip"
              className="zipcode-modal-error"
              component="p"
            />
          ) : (
            <p>Enter your zip code to see if we deliver to your address.</p>
          )}

          <div className="zipcode-modal-form-row">
            <Field
              className="gp-button gp-input-dark"
              type="text"
              name="zip"
              placeholder="Zip Code"
            />
            <button
              className="gp-button gp-button-dark"
              type="submit"
              disabled={isSubmitting}
            >
              Continue
            </button>
          </div>
        </Form>
      )}
    </Formik>
  )
}

const ZipNotAllowedPage = ({ zipCode, updateZipCode }) => {
  return (
    <div className="zipcode-modal-page">
      <p>
        {`Unfortunately, we're don't deliver to ${getLabelForZipCode(
          zipCode
        )} yet`}
      </p>

      <a
        href="https://airtable.com/shrs9WED21nlCwrrc"
        className="gp-button-link zipcode-modal-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        Let me know when Goodpluck comes to {getLabelForZipCode(zipCode)}
      </a>
      <button
        className="gp-button-link zipcode-modal-link"
        onClick={() => updateZipCode("")}
      >
        Try another zip code
      </button>
    </div>
  )
}

const ZipAllowedPage = ({ zipCode, setShowModal }) => {
  return (
    <div className="zipcode-modal-page">
      <div className="zipcode-modal-delivery-header">
        {getCountyForZipCode(zipCode) === "Wayne" ? (
          <div className="zipcode-modal-joumana-img" />
        ) : (
          ""
        )}
        <h2>{getLabelForZipCode(zipCode)}</h2>
        <p>We deliver to you!</p>
      </div>
      <button
        className="gp-button gp-button-dark zipcode-modal-continue-btn"
        onClick={() => {
          setShowModal(false)
        }}
      >
        Continue
      </button>
    </div>
  )
}

const ZipCodeModal = ({
  WrappedComponentNeedsZip,
  wrappedComponentNeedsZipProps,
  WrappedComponentZipIsAllowed,
  wrappedComponentZipIsAllowedProps,
  showDeliveryMessageWhenZipAllowed,
  showDeliveryMessageWhenZipNotAllowed,
}) => {
  const [showModal, setShowModal] = useState(false)
  const [zipCode, setZipCode] = useState(getAndValidateZipFromLocalStorage())

  // Check component zipcode data is fresh when component mounts/updates
  useEffect(() => setZipCode(getAndValidateZipFromLocalStorage()))

  /** Update the zipcode and  trigger a page re-render
   *
   * @param {*} zip The new zipcode  to save
   */
  const updateZipCode = zip => {
    setZipToLocalStorage(removeNonNumbers(zip).substr(0, 5))
    setZipCode(getAndValidateZipFromLocalStorage())
  }

  // Determine what should be seen outside the modal
  let outsideModalContent
  if (!zipCode && WrappedComponentNeedsZip) {
    outsideModalContent = (
      <WrappedComponentNeedsZip
        updateZipCode={updateZipCode}
        setShowModal={setShowModal}
        {...wrappedComponentNeedsZipProps}
      />
    )
  }

  if (zipCode) {
    if (WrappedComponentZipIsAllowed && isAllowedZipcode(zipCode)) {
      outsideModalContent = (
        <WrappedComponentZipIsAllowed {...wrappedComponentZipIsAllowedProps} />
      )
    }
  }

  // Determine if a delivery status message should be shown
  let deliveryMessage = ""
  if (zipCode) {
    if (isAllowedZipcode(zipCode) && showDeliveryMessageWhenZipAllowed) {
      deliveryMessage = (
        <span className="zipcode-modal-delivery-message">
          We deliver to {getLabelForZipCode(zipCode)}!
        </span>
      )
    } else if (showDeliveryMessageWhenZipNotAllowed) {
      deliveryMessage = (
        <span className="zipcode-modal-delivery-message">
          Coming soon to {getLabelForZipCode(zipCode)}:{" "}
          <a
            href="https://airtable.com/shrs9WED21nlCwrrc"
            target="_blank"
            className="zipcode-modal-delivery-message"
            rel="noopener noreferrer"
          >
            Let me know when!
          </a>
        </span>
      )
    }
  }

  // Determine what the modal content should be
  let currentPage
  if (!zipCode) {
    currentPage = (
      <ZipInputPage
        updateZipCode={updateZipCode}
        setShowModal={setShowModal}
        inline="false"
      />
    )
  } else if (isAllowedZipcode(zipCode)) {
    currentPage = (
      <ZipAllowedPage zipCode={zipCode} setShowModal={setShowModal} />
    )
  } else {
    currentPage = (
      <ZipNotAllowedPage
        zipCode={zipCode}
        setShowModal={setShowModal}
        updateZipCode={updateZipCode}
      />
    )
  }

  // Dont render all the modal stuff if it doesn't need to be shown
  if (!showModal) {
    return (
      <>
        {outsideModalContent}
        <span>{deliveryMessage}</span>
      </>
    )
  }

  return (
    <div className="zipcode-modal">
      <div className="zipcode-modal-content">
        <button className="gp-close-button" onClick={() => setShowModal(false)}>
          &times;
        </button>
        <div className="zipcode-modal-brand">Goodpluck</div>
        {currentPage}
        <Link className="gp-button-link zipcode-modal-link" to="/howitworks">
          How it works
        </Link>
        <span>
          Already have an account?{" "}
          <Link className="gp-button-link zipcode-modal-link" to="/signin">
            Sign In
          </Link>
        </span>
      </div>
    </div>
  )
}

export default ZipCodeModal
