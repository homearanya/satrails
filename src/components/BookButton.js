import React, { Component } from "react";
import ReactModal from "react-modal";
import { Link } from "gatsby";

import { ContactForm } from "./ContactForm";
import "../assets/css/bookButton.css";

// ReactModal.setAppElement("#___gatsby");

export default class BookButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.subject = null;
    if (this.props.tour) {
      this.subject = `Hey! I'm interested in your tour ${this.props.tour.toUpperCase()}`;
      if (this.props.date) {
        this.subject = this.subject + ` on this date: ${this.props.date}`;
      }
    }
  }

  openModal() {
    this.setState({
      visible: true
    });
  }

  closeModal() {
    this.setState({
      visible: false
    });
  }

  render() {
    return (
      <div>
        <Link to="/contact/#contact-form" state={{ subject: this.subject }}>
          <button
            className="booking-button-two"
            type="submit"
            // onClick={() => this.openModal()}
          >
            {this.props.text}
          </button>
        </Link>
        <ReactModal
          isOpen={this.state.visible}
          contentLabel="Contact Form"
          onRequestClose={this.closeModal}
          className="col-md-offset-3 col-md-6 Modal book-button"
          overlayClassName="Overlay"
          closeTimeoutMS={300}
        >
          <div className="modal-contact-form">
            <div className="row">
              <button
                type="button"
                className="close-button"
                onClick={() => this.closeModal()}
              >
                Close
              </button>
            </div>
            <div className="contact-us-form-wrapper">
              <ContactForm subject={this.subject} />
            </div>
          </div>
        </ReactModal>
      </div>
    );
  }
}
