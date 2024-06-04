import { useCallback, useEffect, useState } from "react";
import { getTicketsAPI, getUsersAPI, updateTicketAPI } from "./api's/CallAPI";
import { TICKET_STATUS } from "./constants";
import Section from "./components/Section";
import Header from "./components/Header";
import { useDispatch, useSelector } from "react-redux";
import { ticketSliceActions } from "./slice/ticketSlice";
import { Modal } from "./components/Modal";

function JiraBoard() {
  const [ticketDragged, setTicketDragged] = useState({});
  const [tickets, setTickets] = useState([]);
  const [selectedUser, setSelectedUser] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const dispatch = useDispatch();
  const reduxUsers = useSelector((state) => state.jira.users);
  const reduxTickets = useSelector((state) => state.jira.tickets);

  const getTickets = useCallback(() => {
    getTicketsAPI()
      .then((res) => {
        dispatch(ticketSliceActions.setTickets(res?.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const getUsers = useCallback(() => {
    getUsersAPI()
      .then((res) => {
        dispatch(ticketSliceActions.setUsers(res?.data));
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

  const onSelectUser = useCallback(
    (user) => {
      let selUsers;
      if (selectedUser?.includes(user)) {
        selUsers = selectedUser?.filter((x) => x !== user);
        setSelectedUser(selUsers);
      } else {
        selUsers = [...selectedUser, user];
        setSelectedUser(selUsers);
      }
      if (selUsers.length === 0) {
        setTickets(reduxTickets);
      } else {
        let filteredEmails = [];
        reduxUsers?.forEach((item) => {
          if (selUsers?.includes(item?.userName))
            return filteredEmails.push(item?.userEmail);
        });
        let filterTickets = reduxTickets?.filter((item) =>
          filteredEmails?.includes(item?.assignee)
        );
        setTickets(filterTickets);
      }
    },
    [selectedUser, reduxTickets, reduxUsers]
  );

  const handleSearch = useCallback(
    (searchTerm) => {
      if (!searchTerm) {
        setTickets(reduxTickets);
      } else {
        let filterTickets = reduxTickets?.filter((item) =>
          item?.title?.toLowerCase()?.includes(searchTerm?.toLowerCase())
        );
        setTickets(filterTickets);
      }
    },
    [reduxTickets]
  );

  useEffect(() => {
    getTickets();
    getUsers();
  }, []);

  useEffect(() => {
    setTickets(reduxTickets);
  }, [reduxTickets]);
  return (
    <>
      {/* <Modal /> */}

      <div className="flex gap-6 h-full">
        <div className="flex flex-col overflow-auto">
          <Header
            selectedUser={selectedUser}
            onSelectUser={onSelectUser}
            handleSearch={handleSearch}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
          <br />
          <div className="tickets-container ">
            <Section
              title={"TO DO"}
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
      </div>
    </>
  );
}

export default JiraBoard;
