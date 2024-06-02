import { MdOutlineCheckBox } from "react-icons/md";
import { TICKET_PRIORITY, TICKET_TYPE } from "../constants";
import { IoArrowUpSharp } from "react-icons/io5";
import { IoArrowDownSharp } from "react-icons/io5";
import { MdPriorityHigh } from "react-icons/md";
import { AiFillBug } from "react-icons/ai";
import { FaBookmark } from "react-icons/fa";

export const TicketTypeIcon = ({ ticketType, css }) => {
  if (ticketType === TICKET_TYPE.STORY)
    return (
      <FaBookmark
        className={css + "text-green-600"}
        title={TICKET_TYPE.STORY}
      />
    );
  else if (ticketType === TICKET_TYPE.BUG)
    return (
      <AiFillBug className={css + "text-red-600"} title={TICKET_TYPE.BUG} />
    );
  else if (ticketType === TICKET_TYPE.SUPPORT)
    return (
      <MdOutlineCheckBox
        className={css + "text-blue-800"}
        title={TICKET_TYPE.SUPPORT}
      />
    );
};

export const TicketPriorityIcon = ({ ticketPriority, css }) => {
  if (ticketPriority === TICKET_PRIORITY.CRITICAL)
    return (
      <MdPriorityHigh
        className={css + "text-red-800"}
        title={TICKET_PRIORITY.CRITICAL}
      />
    );
  else if (ticketPriority === TICKET_PRIORITY.VERY_HIGH)
    return (
      <IoArrowUpSharp
        className={css + "text-red-800"}
        title={TICKET_PRIORITY.CRITICAL}
      />
    );
  else if (ticketPriority === TICKET_PRIORITY.HIGH)
    return (
      <IoArrowUpSharp
        className={css + "text-red-600"}
        title={TICKET_PRIORITY.HIGH}
      />
    );
  else if (ticketPriority === TICKET_PRIORITY.MEDIUM)
    return (
      <IoArrowDownSharp
        className={css + "text-red-500"}
        title={TICKET_PRIORITY.MEDIUM}
      />
    );
  else if (ticketPriority === TICKET_PRIORITY.LOW)
    return (
      <IoArrowDownSharp
        className={css + "text-blue-400"}
        title={TICKET_PRIORITY.LOW}
      />
    );
};
