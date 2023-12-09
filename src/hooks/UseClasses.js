import axios from "axios";
import { baseURL } from "../data/data";
import { useQuery } from "@tanstack/react-query";

const useClasses = () => {
  const url = baseURL + "/academic-classes";
  const fetchClasses = () => axios.get(url).then((res) => res.data.data);

  return useQuery({
    queryKey: ["allClass"],
    queryFn: fetchClasses,
  });
};

export default useClasses;
