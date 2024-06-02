import { TicketPriorityIcon, TicketTypeIcon } from "./Icons";
function Ticket({ handleDrag, item, userInfo }) {
  console.log(userInfo?.[0]?.userAvatar);
  return (
    <div>
      {" "}
      <div
        className="ticket-card "
        draggable
        onDrag={(e) => handleDrag(e, item)}
      >
        <div className="ticket-card-title">{item?.title}</div>
        <div className="flex p-2.5 justify-between items-center">
          <div className="flex items-center gap-1">
            <TicketTypeIcon ticketType={item?.type} css={"h-5 w-5 "} />
            <TicketPriorityIcon
              ticketPriority={item?.priortiy}
              css={"h-5 w-5 "}
            />
          </div>
          <div
            className="user-icon"
            dangerouslySetInnerHTML={{ __html: userInfo?.[0]?.userAvatar }}
          />
        </div>
      </div>
    </div>
  );
}

export default Ticket;
