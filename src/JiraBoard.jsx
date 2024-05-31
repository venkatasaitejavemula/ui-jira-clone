import { useCallback, useEffect, useState } from "react";
import { getTicketsAPI } from "./api's/CallAPI";
import { TICKET_STATUS } from "./constants";
import Section from "./components/Section";
import NavigationBar from "./components/NavigationBar";

function JiraBoard() {
  const [ticketDragged, setTicketDragged] = useState({});
  const [tickets, setTickets] = useState([]);
  const getTickets = useCallback(() => {
    getTicketsAPI()
      .then((res) => {
        setTickets(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDrag = (e, item) => {
    console.log("drag", item);
    setTicketDragged(item);
  };
  const handleDrop = (e, filterStatus) => {
    console.log(e);
    let updateTicketStatus = tickets?.map((x) => {
      if (x?._id === ticketDragged?._id) {
        return { ...x, status: filterStatus };
      } else {
        return { ...x };
      }
    });
    setTickets(updateTicketStatus);
  };
  const onDragOver = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    getTickets();
  }, []);
  return (
    <div className="flex gap-6">
      <NavigationBar />
      <div className="tickets-container ">
        <Section
          title={"TODO"}
          tickets={tickets}
          filterStatus={TICKET_STATUS.TODO}
          handleDrag={handleDrag}
          handleDrop={handleDrop}
          onDragOver={onDragOver}
        />
        <Section
          title={"IN PROGRESS"}
          tickets={tickets}
          filterStatus={TICKET_STATUS.IN_PROGRESS}
          handleDrag={handleDrag}
          handleDrop={handleDrop}
          onDragOver={onDragOver}
        />
        <Section
          title={"READY FOR TESTING"}
          tickets={tickets}
          filterStatus={TICKET_STATUS.READY_FOR_TESTING}
          handleDrag={handleDrag}
          handleDrop={handleDrop}
          onDragOver={onDragOver}
        />
        <Section
          title={"DONE"}
          tickets={tickets}
          filterStatus={TICKET_STATUS.DONE}
          handleDrag={handleDrag}
          handleDrop={handleDrop}
          onDragOver={onDragOver}
        />
      </div>
    </div>
  );
}

export default JiraBoard;
