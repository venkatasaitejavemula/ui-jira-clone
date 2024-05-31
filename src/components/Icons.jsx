import { FaRegBookmark } from "react-icons/fa";
import { MdOutlineCheckBox } from "react-icons/md";
import { GrBug } from "react-icons/gr";
import { TICKET_PRIORITY, TICKET_TYPE } from "../constants";
import { IoArrowUpSharp } from "react-icons/io5";
import { IoArrowDownSharp } from "react-icons/io5";
import { MdPriorityHigh } from "react-icons/md";

export const TicketTypeIcon = ({ ticketType, css }) => {
  if (ticketType === TICKET_TYPE.STORY)
    return <FaRegBookmark className={css + "text-green-600"} />;
  else if (ticketType === TICKET_TYPE.BUG)
    return <GrBug className={css + "text-red-600"} />;
  else if (ticketType === TICKET_TYPE.SUPPORT)
    return <MdOutlineCheckBox className={css + "text-blue-800"} />;
};

export const TicketPriorityIcon = ({ ticketPriority, css }) => {
  if (ticketPriority === TICKET_PRIORITY.CRITICAL)
    return <MdPriorityHigh className={css + "text-red-800"} />;
  else if (ticketPriority === TICKET_PRIORITY.VERY_HIGH)
    return <IoArrowUpSharp className={css + "text-red-800"} />;
  else if (ticketPriority === TICKET_PRIORITY.HIGH)
    return <IoArrowUpSharp className={css + "text-red-600"} />;
  else if (ticketPriority === TICKET_PRIORITY.MEDIUM)
    return <IoArrowDownSharp className={css + "text-red-500"} />;
  else if (ticketPriority === TICKET_PRIORITY.LOW)
    return <IoArrowDownSharp className={css + "text-blue-400"} />;
};
