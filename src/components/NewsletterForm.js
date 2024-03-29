import React, { Component } from "react";
import addToMailchimp from "gatsby-plugin-mailchimp";
import styled from "styled-components";

import { AjaxMessage } from "./AjaxMessage";

const AjaxMessageContainer = styled.div`
  margin-top: 30px;
`;

export default class NewsletterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: "",
      submissionResult: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    switch (event.target.name) {
      case "fname":
        this.setState({ fname: event.target.value });
        break;
      case "lname":
        this.setState({ lname: event.target.value });
        break;
      case "email":
        this.setState({ email: event.target.value });
        break;
      default:
        console.log("Wrong Case in Switch HandleChange");
    }
  }
  handleSubmit = async e => {
    e.preventDefault();
    const result = await addToMailchimp(this.state.email, {
      FNAME: this.state.fname,
      LNAME: this.state.lname
    });
    // I recommend setting `result` to React state
    // but you can do whatever you want
    this.setState({ submissionResult: result });
  };

  render() {
    return (
      <div className="newsletter-area">
        <div className="col-md-7">
          <div className="section-title text-center">
            <div className="title-border">
              <h1 className="text-white">
                {this.props.newsletterArea.heading1}
                <span> {this.props.newsletterArea.heading2}</span>
              </h1>
            </div>
            <p className="text-white">{this.props.newsletterArea.blurb}</p>
          </div>
          <form onSubmit={this.handleSubmit}>
            <div className="newsletter-content">
              <div className="row">
                <div className="col-sm-6 col-xs-12">
                  <input
                    aria-label="First Name"
                    aria-required
                    required
                    type="text"
                    name="fname"
                    placeholder="First Name"
                    value={this.state.fname}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="col-sm-6 col-xs-12">
                  <input
                    aria-label="Last Name"
                    aria-required
                    required
                    type="text"
                    name="lname"
                    placeholder="Last Name"
                    value={this.state.lname}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="col-sm-8  col-xs-12">
                  <input
                    aria-label="Email Address"
                    aria-required
                    required
                    type="email"
                    name="email"
                    placeholder="Enter your email address ......"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="col-sm-4 col-xs-12">
                  <button type="submit" className="button">
                    <span>Subscribe</span>
                  </button>
                </div>
              </div>
            </div>
          </form>
          <AjaxMessageContainer>
            <AjaxMessage
              in={this.state.submissionResult !== null}
              dangerouslySetInnerHTML={
                this.state.submissionResult && this.state.submissionResult.msg
              }
            />
          </AjaxMessageContainer>
        </div>
      </div>
    );
  }
}
