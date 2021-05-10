import React, { createContext, useState } from 'react';
import axios from 'axios';

export const MyContext = createContext();

const Axios = axios.create({
  baseURL: 'https://smartgarden.ddns.net/php-login-registration-api/',
});

function MyContextProvider(props) {
  const [state, setState] = useState({
    isAuth: false,
    theUser: null,
  });

  const logoutUser = () => {
    localStorage.removeItem('loginToken');
    setState({
      ...state,
      isAuth: false,
    });
  };

  const loginUser = async (user) => {
    const login = await Axios.post('login.php', {
      user: user.login,
      pass: user.password,
    });
    return login.data;
  };

  const isLoggedIn = async () => {
    const loginToken = localStorage.getItem('loginToken');

    if (loginToken) {
      Axios.defaults.headers.common['Authorization'] = 'Bearer ' + loginToken;

      const { data } = await Axios.get('user-info.php');

      if (data.success && data.user) {
        setState({
          ...state,
          isAuth: true,
          theUser: data.user,
        });
      }
    }
  };

  const contextValue = {
    rootState: state,
    setState: setState,
    isLoggedIn: isLoggedIn,
    loginUser: loginUser,
    logoutUser: logoutUser,
  };

  return (
    <MyContext.Provider value={contextValue}>
      {props.children}
    </MyContext.Provider>
  );
}

export default MyContextProvider;
