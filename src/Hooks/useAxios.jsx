import axios from "axios";

const axiosCommon = axios.create({
 
   baseURL: "../../public/data.json",
 
});

const useAxios = () => {
  return axiosCommon;
};

export default useAxios;