import {useState, createContext, useContext } from 'react';
import axios from 'axios';
import { api } from '../services/api';

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [data, setData] = useState(null);

  async function signUp(username, email, password, isAdim){
    try {
      const response = await api.post("users/", {
        username: username,
        email: email,
        password: password,
        isAdmin: isAdim
      })

      if(response.data){
        setData(response.data)
      }

    } catch (error) {
      console.log(error)
    }
  }

  async function signIn(email, password){
    try {
      const response = await api.post("login/", {
        email: email,
        password: password
      })

      if(response.data){
        setData(response.data)
      }

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <AuthContext.Provider value={{ data, signIn, signUp }}>
      {children}
    </AuthContext.Provider> 
  ) 
}


export const useAuth = () => {
  return useContext(AuthContext);
};