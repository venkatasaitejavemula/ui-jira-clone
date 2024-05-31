import { useMemo } from "react";
import Ticket from "./Ticket";

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
        return <Ticket key={index} handleDrag={handleDrag} item={item} />;
      })}
    </div>
  );
}

export default Section;
