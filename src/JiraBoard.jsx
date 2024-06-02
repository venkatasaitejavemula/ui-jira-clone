import { useCallback, useEffect, useState } from "react";
import { getTicketsAPI, getUsersAPI, updateTicketAPI } from "./api's/CallAPI";
import { TICKET_STATUS } from "./constants";
import Section from "./components/Section";
import NavigationBar from "./components/NavigationBar";

function JiraBoard() {
  const [ticketDragged, setTicketDragged] = useState({});
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const getTickets = useCallback(() => {
    getTicketsAPI()
      .then((res) => {
        setTickets(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const getUsers = useCallback(() => {
    getUsersAPI()
      .then((res) => {
        setUsers(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const updateTicket = useCallback((payload) => {
    updateTicketAPI(payload?._id, payload)
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDrag = (e, item) => {
    setTicketDragged(item);
  };
  const handleDrop = (e, filterStatus) => {
    let updateTicketStatus = tickets?.map((x) => {
      if (x?._id === ticketDragged?._id) {
        return { ...x, status: filterStatus };
      } else {
        return { ...x };
      }
    });
    setTickets(updateTicketStatus);
    updateTicket({ ...ticketDragged, status: filterStatus });
    setTicketDragged({});
  };
  const onDragOver = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    getTickets();
    getUsers();
  }, []);
  return (
    <div className="flex gap-6">
      <NavigationBar />
      <div className="flex flex-col">
        <p>Projects / Jira Clone</p>
        <h1>Kanban Board</h1>
        <input />
        <div className="tickets-container ">
          <Section
            title={"TODO"}
            tickets={tickets}
            filterStatus={TICKET_STATUS.TODO}
            handleDrag={handleDrag}
            handleDrop={handleDrop}
            onDragOver={onDragOver}
            users={users}
          />
          <Section
            title={"IN PROGRESS"}
            tickets={tickets}
            filterStatus={TICKET_STATUS.IN_PROGRESS}
            handleDrag={handleDrag}
            handleDrop={handleDrop}
            onDragOver={onDragOver}
            users={users}
          />
          <Section
            title={"READY FOR TESTING"}
            tickets={tickets}
            filterStatus={TICKET_STATUS.READY_FOR_TESTING}
            handleDrag={handleDrag}
            handleDrop={handleDrop}
            onDragOver={onDragOver}
            users={users}
          />
          <Section
            title={"DONE"}
            tickets={tickets}
            filterStatus={TICKET_STATUS.DONE}
            handleDrag={handleDrag}
            handleDrop={handleDrop}
            onDragOver={onDragOver}
            users={users}
          />
        </div>
      </div>
    </div>
  );
}

export default JiraBoard;
