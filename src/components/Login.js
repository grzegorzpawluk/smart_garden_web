import React, { useContext, useState } from 'react';
import { MyContext } from '../context/MyContext';
import LoginStyles from './Login.module.css';

function Login() {
  const { loginUser, isLoggedIn } = useContext(MyContext);

  const initialState = {
    userInfo: {
      login: '',
      password: '',
    },
    errorMsg: '',
    successMsg: '',
  };

  const [state, setState] = useState(initialState);

  const onChangeValue = (e) => {
    setState({
      ...state,
      userInfo: {
        ...state.userInfo,
        [e.target.name]: e.target.value,
      },
    });
  };

  const submitForm = async (event) => {
    event.preventDefault();
    const data = await loginUser(state.userInfo);
    if (data.success && data.token) {
      setState({
        ...initialState,
      });
      localStorage.setItem('loginToken', data.token);
      await isLoggedIn();
    } else {
      setState({
        ...state,
        successMsg: '',
        errorMsg: data.message,
      });
    }
  };

  let successMsg = '';
  let errorMsg = '';
  if (state.errorMsg) {
    errorMsg = <div>{state.errorMsg}</div>;
  }
  if (state.successMsg) {
    successMsg = <div>{state.sucessMsg}</div>;
  }

  return (
    <div className={LoginStyles.homepage}>
      <div id="panel" className={LoginStyles['form-login']}>
        <br></br>
        <h1>Logowanie</h1>
        <br></br>
        <form onSubmit={submitForm} noValidate>
          <div>
            <input
              className={LoginStyles['form-input']}
              id="username"
              name="login"
              type="text"
              required
              placeholder="Wprowadź login"
              value={state.userInfo.login}
              onChange={onChangeValue}
            />
          </div>
          <br></br>
          <div>
            <input
              className={LoginStyles['form-input']}
              id="password"
              name="password"
              type="password"
              required
              placeholder="Wprowadź hasło"
              value={state.userInfo.password}
              onChange={onChangeValue}
            />
          </div>
          {errorMsg}
          {successMsg}
          <br></br>
          <div>
            <button className={LoginStyles['form-button']} type="submit">
              Zaloguj się
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
