import React from "react";
import { connect } from "react-redux";

import Input from "../../shared/ui-components/Input/Input";
import Button from "../../shared/ui-components/Button/Button";
import Spinner from "../../shared/ui-components/Spinner/Spinner";

import authApiConnection from "../../redux/modules/reduxAuthModule/authApiConnection";
import authSelector from "../../redux/modules/reduxAuthModule/authSelector";
import authActionCreator from "../../redux/modules/reduxAuthModule/authActions/authActionCreator";

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
    this.props.login(user);
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

const mapStateToProps = (state) => {
  return {
    auth: authSelector.getAuth(state),
  };
};

const mapDispatchToProps = {
  login: authApiConnection.login,
  showSignup: authActionCreator.toggleShowSignup,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
