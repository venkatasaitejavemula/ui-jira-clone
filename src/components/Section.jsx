import { useMemo } from "react";
import Ticket from "./Ticket";
import { useSelector } from "react-redux";

function Section({
  title,
  tickets,
  filterStatus,
  handleDrag,
  handleDrop,
  onDragOver,
}) {
  let filteredTickets = useMemo(() => {
    return tickets?.filter((item) => item?.status === filterStatus);
  }, [tickets, filterStatus]);

  const reduxUsers = useSelector((state) => state.jira.users);

  return (
    <div
      className="ticket-section"
      onDrop={(e) => handleDrop(e, filterStatus)}
      onDragOver={onDragOver}
    >
      <div className="ticket-section-title">
        {title} <b>({filteredTickets?.length})</b>
      </div>
      {filteredTickets?.map((item, index) => {
        let userInfo = reduxUsers?.filter(
          (x) => x?.userEmail === item?.assignee
        );
        return (
          <Ticket
            key={index}
            handleDrag={handleDrag}
            item={item}
            userInfo={userInfo}
          />
        );
      })}
    </div>
  );
}

export default Section;
