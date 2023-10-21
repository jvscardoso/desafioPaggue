import {useState, createContext, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../services/api';

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const navigate = useNavigate()
  const isAuthenticated = true

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
        console.log(response.data)
      }

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if(data?.accessToken){
      console.log("aqui")
      navigate("/")
    }else{
      console.log("nao foi")
    }
  }, [data])

  return (
    <AuthContext.Provider value={{ data, signIn, signUp, isAuthenticated }}>
      {children}
    </AuthContext.Provider> 
  ) 
}

export const useAuth = () => {
  return useContext(AuthContext);
};