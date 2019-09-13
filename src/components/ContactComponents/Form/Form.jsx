import React, { Component } from "react";
import FormInput from "../FormInput/FormInput";
import Select from "react-select";

import "./form.scss";

class Form extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    budget: "",
    additionalInfo: "",
    selectedOption: null
  };

  handleSubmit = async event => {
    event.preventDefault();
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  handleSelectedOption = selectedOption => {
    this.setState({ selectedOption });
  };

  render() {
    const {
      firstName,
      lastName,
      email,
      phone,
      location,
      budget,
      additionalInfo
    } = this.state;

    const { selectedOption } = this.state;

    const options = [
      { label: "Residential", value: 1 },
      { label: "Commercial", value: 2 },
      { label: "Restaurant", value: 3 },
      { label: "Industrial", value: 4 },
      { label: "Hospitality", value: 5 },
      { label: "Corporate", value: 6 }
    ];

    return (
      <section className="contact-form">
        <div className="contact-form__box-left">
          <h2 className="contact-form__box-left__title">CONTACT US</h2>

          <div className="contact-form__box-left__address">
            <p>624 Lofter Road</p>
            <p>London E8 4AH</p>
          </div>

          <div className="contact-form__box-left__phone-email">
            <p>+44 (0)7966 266711</p>
            <p>info@lofter.co.uk</p>
          </div>

          <div className="contact-form__box-left__info">
            <p>
              If you have a residential, commercial, restaurant, industrial,
              hospitality or corporate project that you'd like to to discuss,
              please don't hesitate to get in touch on the details above, or
              fill in our Project Enquiry Form and we'll respond within 24
              hours.
            </p>
          </div>
        </div>
        <form className="form" onSubmit={this.handleSubmit}>
          <h2 className="contact-form__title">PROJECT ENQUIRY FORM</h2>

          <FormInput
            type="text"
            name="firstName"
            value={firstName}
            handleChange={this.handleChange}
            label="First Name"
            required
          />
          <FormInput
            type="text"
            name="lastName"
            value={lastName}
            handleChange={this.handleChange}
            label="Last Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            handleChange={this.handleChange}
            label="Email Address"
            required
          />
          <FormInput
            type="text"
            name="phone"
            value={phone}
            handleChange={this.handleChange}
            label="Contact Number"
            required
          />
          <FormInput
            type="text"
            name="location"
            value={location}
            handleChange={this.handleChange}
            label="Location"
            required
          />
          <FormInput
            type="number"
            name="budget"
            value={budget}
            handleChange={this.handleChange}
            label="Estimated Budget in &#163;"
            required
          />
          <Select
            className="select"
            value={selectedOption}
            onChange={this.handleSelectedOption}
            options={options}
            placeholder={"Design Style"}
            onFocus="none"
            theme={theme => ({
              ...theme,
              borderRadius: 0,
              colors: {
                ...theme.colors,
                primary25: "#fff",
                neutral20: "grey",
                primary: "grey"
              }
            })}
          />
          <FormInput
            type="text"
            name="additionalInfo"
            value={additionalInfo}
            handleChange={this.handleChange}
            label="Additional Information"
            required
          />
        </form>
      </section>
    );
  }
}

export default Form;
