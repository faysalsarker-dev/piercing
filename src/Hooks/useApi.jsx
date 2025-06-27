import axios from "axios";

const api = axios.create({
 
   baseURL: import.meta.env.VITE_API_KLIPP,
 
});

const useApi = () => {
  return api;
};

export default useApi;