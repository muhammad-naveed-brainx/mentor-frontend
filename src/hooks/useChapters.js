import axios from "axios";
import { baseURL } from "../data/data";
import { useQuery } from "@tanstack/react-query";

const useChapters = (subjId) => {
  const url = baseURL + `/chapters?subjectId=${subjId}`;
  console.log(url);
  const fetchChapters = () => axios.get(url).then((res) => res.data.data);

  return useQuery({
    queryKey: ["subject", subjId, "chapters"],
    queryFn: fetchChapters,
  });
};

export default useChapters;
