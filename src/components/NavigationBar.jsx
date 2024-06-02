import { HiOutlineTicket } from "react-icons/hi2";
import { SiJirasoftware } from "react-icons/si";
import { MdAddChart } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { HiOutlineViewBoards } from "react-icons/hi";
import MenuItem from "./MenuItem";
const NavigationBar = () => {
  return (
    <div className="nav-bar">
      <div className="nav-bar-slider">
        <br />
        <MenuItem Image={SiJirasoftware} title={"Jira"} />
        <br />
        <br />
        <MenuItem Image={HiOutlineViewBoards} title={"Board"} />
        <br />
        <MenuItem Image={MdAddChart} title={"Reports"} />
        <br />
        <MenuItem Image={FaGithub} title={"Git Hub"} />
        <br />
      </div>
    </div>
  );
};

export default NavigationBar;
