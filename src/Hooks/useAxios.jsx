import axios from "axios";

const axiosCommon = axios.create({
 
   baseURL: import.meta.env.VITE_API ,
 
});

const useAxios = () => {
  return axiosCommon;
};

export default useAxios;