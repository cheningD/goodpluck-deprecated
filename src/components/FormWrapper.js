import {
  FieldWrapper,
  Header,
  Spinner,
  StyledForm,
  SubmitButton,
} from "../components/StyledComponentLib"

import Arrow from "../images/icons/arrow.svg"
import { Formik } from "formik"
import React from "react"
import styled from "styled-components"

const Blurb = styled.div`
  color: #fff;
`

const ButtonArrow = styled(Arrow)`
  display: inline-block;
  margin-left: 20px;
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 auto;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
`

const Wrapper = styled.div`
  background-color: #6c7668;
  width: 100%;
  min-height: calc(100vh + 32px);
  padding-bottom: 32px;
`

const ProgressBar = ({ percentComplete, color, bkcolor }) => {
  return (
    <div
      style={{
        backgroundColor: `${bkcolor}`,
        margin: "16px 0",
      }}
    >
      <div
        style={{
          height: "4px",
          width: `${percentComplete}%`,
          backgroundColor: `${color}`,
        }}
      />
    </div>
  )
}

const BackButton = styled(Arrow)`
  transform: rotate(180deg);

  // Make the arrow white
  filter: invert(100%) sepia(1%) saturate(7500%) hue-rotate(157deg)
    brightness(110%) contrast(114%);
`

const FormWrapper = ({
  initialValues,
  validationSchema,
  onSubmit,
  header,
  FormContent,
  percentComplete,
  blurb,
  goBackFunction,
  submitText,
}) => {
  const form = ({ isSubmitting, ...rest }) => {
    const buttonText = submitText || `Continue`
    return (
      <StyledForm>
        {goBackFunction ? <BackButton onClick={goBackFunction} /> : ""}
        {percentComplete ? (
          <ProgressBar
            color="#f7c59f"
            bkcolor="#788474"
            percentComplete={percentComplete}
          />
        ) : (
          ""
        )}
        <Header>{header}</Header>
        <FormContent isSubmitting={isSubmitting} {...rest} />
        <FieldWrapper>
          <SubmitButton as="button" type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <Spinner />
            ) : (
              <>
                {buttonText}
                <ButtonArrow />
              </>
            )}
          </SubmitButton>
        </FieldWrapper>
        {blurb ? <Blurb>{blurb}</Blurb> : ""}
      </StyledForm>
    )
  }

  return (
    <Wrapper>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        validateOnBlur={true}
        validateOnChange={false}
      >
        {form}
      </Formik>
    </Wrapper>
  )
}

export default FormWrapper
