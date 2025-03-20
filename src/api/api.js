import axios from "axios";

const GetApi = async (url) => {
  const response = await axios.get(url);

  return (response.data || [])
};

export default GetApi;
