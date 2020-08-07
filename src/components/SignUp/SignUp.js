import React from "react";
import { connect } from "react-redux";

import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import Spinner from "../UI/Spinner/Spinner";

import { signUpFetch } from "../../redux/fetch";
import { authSelector } from "../../redux/selectors";
import { authActionCreators } from "../../redux/actionCreators";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      nickname: "",
      password: "",
      form: {
        fullName: {
          label: "Full Name",
          elementType: "input",
          elementConfig: {
            autoFocus: true,
            name: "fullName",
            type: "text",
            placeholder: "input your full name",
          },
        },
        nickname: {
          label: "Nickname",
          elementType: "input",
          elementConfig: {
            name: "nickname",
            type: "text",
            placeholder: "input your nickname",
          },
        },
        password: {
          label: "Password",
          elementType: "input",
          elementConfig: {
            name: "password",
            type: "password",
            placeholder: "********",
          },
        },
      },
      loading: false,
    };
  }

  updateInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  formSubmitFn = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const user = {
      fullName: this.state.fullName,
      nickname: this.state.nickname,
      password: this.state.password,
    };
    console.log("SignUp -> formSubmitFn -> user", user);
    this.props.signUpFetch(user);
  };

  render() {
    const formElementsArray = [];
    for (let key in this.state.form) {
      formElementsArray.push({
        id: key,
        config: this.state.form[key],
      });
    }
    let form = (
      <div>

      <form onSubmit={this.formSubmitFn}>
        {formElementsArray.map((formElement) => (
          <Input
            key={formElement.id}
            label={formElement.config.label}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={this.state[formElement.id]}
            changed={this.updateInput}
          />
        ))}
        <Button btnType="Success">SignUp</Button>
        <span onClick={this.props.showLogin}>
          Have an account?
        </span>
      </form>
      </div>
    );
    if (this.props.pending) {
      form = <Spinner />;
    }
    return (
      <div>
        <h2>SignUp</h2>
        {form}
        {this.props.auth.error && <span className="error">{this.props.auth.error}</span>}
      </div>
    );
  }
}

/***
 * Container
 */
const { getAuth } = authSelector;

const mapStateToProps = (state) => {
  return {
    auth: getAuth(state),
  };
};

const { toggleSignup } = authActionCreators;

const mapDispatchToProps = {
  signUpFetch,
  showLogin: toggleSignup,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
