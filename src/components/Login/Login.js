import React from "react";
import { connect } from "react-redux";

import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import Spinner from "../UI/Spinner/Spinner";

import { loginFetch } from "../../redux/fetch";
import { authSelector } from "../../redux/selectors";
import { authActionCreators } from "../../redux/actionCreators";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nickname: "",
      password: "",
      form: {
        nickname: {
          label: "Nickname",
          elementType: "input",
          elementConfig: {
            autoFocus: true,
            name: "nickname",
            type: "text",
            placeholder: "input your nickname",
            autoComplete: "new-password",
          },
        },
        password: {
          label: "Password",
          elementType: "input",
          elementConfig: {
            name: "password",
            type: "password",
            placeholder: "********",
            autoComplete: "new-password",
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
      nickname: this.state.nickname,
      password: this.state.password,
    };
    console.log("Login -> formSubmitFn -> user", user);
    this.props.loginFetch(user);
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
          <Button btnType="Success" type="submit">
            Login
          </Button>
        <span onClick={this.props.showSignup}>
          Create an account?
        </span>
        </form>
      </div>
    );
    if (this.props.pending) {
      form = <Spinner />;
    }
    return (
      <div>
        <h2>Login</h2>
        {form}
        {this.props.auth.error && (
          <span className="error">{this.props.auth.error}</span>
        )}
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
  loginFetch,
  showSignup: toggleSignup,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
