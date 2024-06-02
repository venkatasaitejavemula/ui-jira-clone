import { useMemo } from "react";
import Ticket from "./Ticket";

function Section({
  title,
  tickets,
  filterStatus,
  handleDrag,
  handleDrop,
  onDragOver,
  users,
}) {
  let filteredTickets = useMemo(() => {
    return tickets?.filter((item) => item?.status === filterStatus);
  }, [tickets, filterStatus]);

  return (
    <div
      className="ticket-section"
      onDrop={(e) => handleDrop(e, filterStatus)}
      onDragOver={onDragOver}
    >
      <div className="ticket-section-title">
        {title} <b>({filteredTickets.length})</b>
      </div>
      {filteredTickets?.map((item, index) => {
        let userInfo = users?.filter((x) => x?.userEmail === item?.assignee);
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
