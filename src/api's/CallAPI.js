import axios from "axios";
import { API_URL } from "./apiHeaders";

export const getTicketsAPI = async () => {
  const url = API_URL + "/api/ticket/findall";
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

export const updateTicketAPI = async (_id, payload) => {
  const url = API_URL + `/api/ticket/update-ticket/${_id}`;
  const response = await axios.put(
    url,
    payload,
  );
  return response;
};
