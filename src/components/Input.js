import React from 'react';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.onFocusHandler = this.onFocusHandler.bind(this);
    this.onBlurHandler = this.onBlurHandler.bind(this);
    this.state = {
      placeholder: this.props.placeholder,
      className: this.props.legendclassName,
      focus: false
    }
  }

  onFocusHandler() {
    if (!this.state.focus) {
      this.setState({
        placeholder: "",
        className: "inputField",
        focus: true
      });
    }
  }

  onBlurHandler() {
    if (this.state.focus) {
      this.setState({
        placeholder: this.props.placeholder,
        className: this.props.legendclassName,
        focus: false
      });
    }
  }

  errorMessageHtml =
    <>
      <i className="fas fa-check-circle"></i>
      <i className="fas fa-exclamation-circle"></i>
      <p className="message">Error Message</p>
    </>

  render() {
    if (this.props.type === "date") {
      let legend;
      if (this.props.name === "dob") {
        legend = "Enter Date of Birth";
      }
      else if (this.props.name === "doj") {
        legend = "Enter Date of Joining";
      }
      return (
        <>
          <legend className="visible">{legend}</legend>
          <input type={this.props.type} name={this.props.name} min={this.props.min} max={this.props.max} />
          {this.errorMessageHtml}
        </>
      );
    }

    if (this.props.type === "textArea") {
      return (
        <>
          <legend className={this.state.className}>{this.props.placeholder}</legend>
          <textarea rows="3" cols="40" name={this.props.name} placeholder={this.state.placeholder} onFocus={this.onFocusHandler} onBlur={this.onBlurHandler}></textarea>
          {this.errorMessageHtml}
        </>
      );
    }

    if (this.props.type === "select") {
      let option;
      if (this.state.placeholder !== "") {
        option = <option>{this.state.placeholder}</option>
      }
      else {
        option = <option></option>
      }

      return (
        <>
          <legend className={this.state.className}>{this.props.placeholder}</legend>
          <select name={this.props.name} onFocus={this.onFocusHandler} onBlur={this.onBlurHandler}>
            {option}
          </select>
        </>
      );
    }

    return (
      <>
        <legend className={this.state.className}>{this.props.placeholder}</legend>
        <input type={this.props.type} name={this.props.name} placeholder={this.state.placeholder} onFocus={this.onFocusHandler} onBlur={this.onBlurHandler} />
        {this.errorMessageHtml}
      </>
    );
  }
}

export default Input;