import axios from "axios";
import { baseURL } from "../data/data";
import { useQuery } from "@tanstack/react-query";

const useSubjects = (classId) => {
  const url = baseURL + `/academic-subjects?classId=${classId}`;
  const fetchSubjects = () => axios.get(url).then((res) => res.data.data);

  return useQuery({
    queryKey: ["class", classId, "subjects"],
    queryFn: fetchSubjects,
  });
};

export default useSubjects;
