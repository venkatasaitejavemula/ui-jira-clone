import axios from "axios";

export const getTicketsAPI = async () => {
  const url = "http://localhost:3001/api/ticket/findall";
  const response = await axios.get(
    url,
    null,
    {
      headers: { "Access-Control-Allow-Origin": "*" },
    },
    { mode: "cors" }
  );
  return response;
};
