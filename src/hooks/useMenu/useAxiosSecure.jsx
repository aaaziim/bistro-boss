import axios from 'axios'
import React from 'react'
export const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
    // headers: {
    //     'Authorization': 'Bearer your-token',
    //     'Content-Type': 'application/json',
    // },
    // timeout: 30000,
    // withCredentials: true,
    // validateStatus: status => status >= 200 && status < 300, // default
 
})
const useAxiosSecure = () => {
  return axiosSecure;
  
}

export default useAxiosSecure
