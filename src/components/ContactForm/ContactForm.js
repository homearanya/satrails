import React, { Component } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"
import { ThreeDots } from "react-loader-spinner"
import styled from "styled-components"

import "./contactForm.css"
import { AjaxMessage } from "../AjaxMessage"

const ContactFormWrapper = styled.div`
  && {
    margin-bottom: -50px;
    @media (min-width: 768px) {
      margin-bottom: -100px;
    }
    @media (min-width: 992px) {
      margin-bottom: -110px;
    }
  }
`

const LoaderContainer = styled.div`
  color: white;
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 1;

  svg {
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
    text-align: center;
  }
`

const ButtonContainer = styled.div`
  position: relative;
  text-align: center;
`

const StyledButton = styled.input`
  &&& {
    margin-bottom: 20px;
    color: ${(props) => (props.loadSpinner ? "#0967B9 " : "#ffffff")};
    background-color: #0967b9;
    :focus {
      color: ${(props) => (props.loadSpinner ? "#0967B9 " : "#ffffff")};
      background-color: #0967b9;
    }
    :hover,
    :active {
      color: ${(props) => (props.loadSpinner ? "#043B6C" : "#ffffff")};
      background-color: #043b6c;
    }
  }
`

export class ContactForm extends Component {
  constructor(props) {
    super(props)
    let subject = ""
    if (this.props.subject) {
      subject = this.props.subject
    }
    this.state = {
      f_namefjkdls: "",
      l_namefjkdls: "",
      emailfjkdls: "",
      phone_numberfjkdls: "",
      subjectfjkdls: subject,
      messagefjkdls: "",
      f_name: "",
      l_name: "",
      email: "",
      phone_number: "",
      subject: "",
      message: "",
      contactFormSubmissionResult: null,
      subscribeNewsletter: true,
      newsletterSubmissionResult: null,
      loadSpinner: false,
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    switch (event.target.name) {
      // Real fields
      case "f_namefjkdls":
        this.setState({ f_namefjkdls: event.target.value })
        break
      case "l_namefjkdls":
        this.setState({ l_namefjkdls: event.target.value })
        break
      case "emailfjkdls":
        this.setState({ emailfjkdls: event.target.value })
        break
      case "subjectfjkdls":
        this.setState({ subjectfjkdls: event.target.value })
        break
      case "phone_numberfjkdls":
        this.setState({ phone_numberfjkdls: event.target.value })
        break
      case "messagefjkdls":
        this.setState({ messagefjkdls: event.target.value })
        break
      // h o n e y p o t fields
      case "f_name":
        this.setState({ f_name: event.target.value })
        break
      case "l_name":
        this.setState({ l_name: event.target.value })
        break
      case "email":
        this.setState({ email: event.target.value })
        break
      case "subject":
        this.setState({ subject: event.target.value })
        break
      case "phone_number":
        this.setState({ phone_number: event.target.value })
        break
      case "message":
        this.setState({ message: event.target.value })
        break
      case "subscribe_newsletter":
        this.setState({ subscribeNewsletter: event.target.checked })
        break
      default:
        console.log("Wrong Case in Switch HandleChange")
    }
  }

  subscribeNewsletter() {
    if (this.state.subscribeNewsletter) {
      this.setState(
        {
          loadSpinner: true,
        },
        async () => {
          const result = await addToMailchimp(this.state.emailfjkdls, {
            FNAME: this.state.fnamefjkdls,
            LNAME: this.state.lnamefjkdls,
          })
          // I recommend setting `result` to React state
          // but you can do whatever you want
          this.setState({
            newsletterSubmissionResult: result,
            loadSpinner: false,
          })
        }
      )
    }
  }

  sendEmail() {
    // Check is not spam
    if (
      (this.state.f_name && this.state.f_name.length > 0) ||
      (this.state.l_name && this.state.l_name.length > 0) ||
      (this.state.email && this.state.email.length > 0) ||
      (this.state.subject && this.state.subject.length > 0) ||
      (this.state.phone_number && this.state.phone_number.length > 0) ||
      (this.state.message && this.state.message.length > 0)
    ) {
      // it's spam but let's pretend it's a successful submission!!!
      setTimeout(() => {
        this.setState({
          f_namefjkdls: "",
          l_namefjkdls: "",
          emailfjkdls: "",
          phone_numberfjkdls: "",
          subjectfjkdls: "",
          messagefjkdls: "",
          f_name: "",
          l_name: "",
          email: "",
          phone_number: "",
          subject: "",
          message: "",
          contactFormSubmissionResult:
            "Thanks for the message. I’ll be in touch shortly.",
          loadSpinner: false,
        })
      }, 2000)
      return
    }
    // It's not spam. Let's construct an HTTP request
    var xhr = new XMLHttpRequest()
    xhr.open(
      "POST",
      "https://lyjj57jnmf.execute-api.us-east-1.amazonaws.com/production/static-site-mailer-trails",
      true
    )
    xhr.setRequestHeader("Accept", "application/json; charset=utf-8")
    xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8")

    // Send the collected data as JSON
    xhr.send(JSON.stringify(this.state))

    // Callback function
    xhr.onloadend = (response) => {
      if (response.target.status === 200) {
        // The form submission was successful
        this.setState(
          {
            f_namefjkdls: "",
            l_namefjkdls: "",
            emailfjkdls: "",
            phone_numberfjkdls: "",
            subjectfjkdls: "",
            messagefjkdls: "",
            contactFormSubmissionResult:
              "Thanks for the message. I’ll be in touch shortly.",
            loadSpinner: false,
          },
          this.subscribeNewsletter()
        )
      } else {
        // The form submission failed
        this.setState({
          contactFormSubmissionResult: "Something went wrong",
          loadSpinner: false,
        })
        console.error(response)
        // console.error(JSON.parse(response.target.response).message);
      }
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault()

    this.setState(
      {
        loadSpinner: true,
        contactFormSubmissionResult: null,
        newsletterSubmissionResult: null,
      },
      // Callback funtion to be called after component has been updated with the new state
      this.sendEmail()
    )
  }

  render() {
    return (
      <ContactFormWrapper className="contact-form-area">
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            {/* Real fields */}
            <div className="col-sm-6">
              <input
                aria-label="First Name"
                aria-required
                required
                name="f_namefjkdls"
                type="text"
                className="form-box"
                placeholder="First name"
                value={this.state.f_namefjkdls}
                onChange={this.handleChange}
              />
            </div>
            <div className="col-sm-6">
              <input
                aria-label="Last Name"
                aria-required
                required
                name="l_namefjkdls"
                type="text"
                className="form-box"
                placeholder="Last name"
                value={this.state.l_namefjkdls}
                onChange={this.handleChange}
              />
            </div>
            <div className="col-sm-6">
              <input
                aria-label="Email Address"
                aria-required
                required
                name="emailfjkdls"
                type="emailfjkdls"
                className="form-box"
                placeholder="Email"
                value={this.state.emailfjkdls}
                onChange={this.handleChange}
              />
            </div>
            <div className="col-sm-6">
              <input
                aria-label="Phone Number"
                name="phone_numberfjkdls"
                type="text"
                className="form-box"
                placeholder="Phone number"
                value={this.state.phone_numberfjkdls}
                onChange={this.handleChange}
              />
            </div>
            <div className="col-sm-12">
              <input
                aria-label="Subject"
                aria-required
                required
                name="subjectfjkdls"
                type="text"
                className="form-box"
                placeholder="Subject"
                value={this.state.subjectfjkdls}
                onChange={this.handleChange}
              />
            </div>
            <div className="col-sm-12">
              <textarea
                aria-label="Message"
                aria-required
                required
                name="messagefjkdls"
                className="yourmessage"
                placeholder="Your message"
                value={this.state.messagefjkdls}
                onChange={this.handleChange}
              />
            </div>
            {/* h o n e y p o t fields */}
            <div className="col-sm-6 ohnohoney">
              <input
                name="f_name"
                type="text"
                className="form-box"
                placeholder="First name"
                autoComplete="off"
                value={this.state.f_name}
                onChange={this.handleChange}
              />
            </div>
            <div className="col-sm-6 ohnohoney">
              <input
                name="l_name"
                type="text"
                className="form-box"
                placeholder="Last name"
                autoComplete="off"
                value={this.state.l_name}
                onChange={this.handleChange}
              />
            </div>
            <div className="col-sm-6 ohnohoney">
              <input
                name="email"
                type="email"
                className="form-box"
                placeholder="Email"
                autoComplete="off"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </div>
            <div className="col-sm-6 ohnohoney">
              <input
                name="phone_number"
                type="text"
                className="form-box"
                placeholder="Phone number"
                autoComplete="off"
                value={this.state.phone_number}
                onChange={this.handleChange}
              />
            </div>
            <div className="col-sm-12 ohnohoney">
              <input
                name="subject"
                type="text"
                className="form-box"
                placeholder="Subject"
                autoComplete="off"
                value={this.state.subject}
                onChange={this.handleChange}
              />
            </div>
            <div className="col-sm-12 ohnohoney">
              <textarea
                name="message"
                className="yourmessage"
                placeholder="Your message"
                autoComplete="off"
                value={this.state.message}
                onChange={this.handleChange}
              />
            </div>
            {/* Newsletter option */}
            <div className="col-sm-12">
              <label
                htmlFor="subscribe_newsletter"
                className="subscribe-newsletter-label"
              >
                Would you like to subscribe to our quarterly newsletter?
                <input
                  name="subscribe_newsletter"
                  id="subscribe_newsletter"
                  type="checkbox"
                  className="subscribe-newsletter"
                  checked={this.state.subscribeNewsletter}
                  onChange={this.handleChange}
                />
                <span className="checkmark" />
              </label>
            </div>
            {/* Button Area */}
            <ButtonContainer className="col-sm-12">
              {this.state.loadSpinner && (
                <LoaderContainer>
                  <ThreeDots color="#ffffff" height={15} width={80} />
                </LoaderContainer>
              )}

              <StyledButton
                aria-label="Submit Button"
                type="submit"
                value="Send Message"
                className="submit-button"
                loadSpinner={this.state.loadSpinner}
                disabled={this.state.loadSpinner}
              />
            </ButtonContainer>
          </div>
        </form>
        <AjaxMessage
          in={this.state.contactFormSubmissionResult !== null}
          dangerouslySetInnerHTML={this.state.contactFormSubmissionResult}
        />
        <AjaxMessage
          in={this.state.newsletterSubmissionResult !== null}
          dangerouslySetInnerHTML={
            this.state.newsletterSubmissionResult &&
            this.state.newsletterSubmissionResult.msg
          }
        />
      </ContactFormWrapper>
    )
  }
}
