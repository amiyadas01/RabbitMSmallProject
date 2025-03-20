import axios from "axios";

const GetApi = async () => {
  const response = await axios.get("https://api.github.com/users");

  return (response.data || [])
};

export default GetApi;
