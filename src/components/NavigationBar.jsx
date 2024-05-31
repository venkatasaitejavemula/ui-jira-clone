import { HiOutlineTicket } from "react-icons/hi2";
import { SiJirasoftware } from "react-icons/si";
import { GoGraph } from "react-icons/go";
const NavigationBar = () => {
  return (
    <div className="nav-bar">
      <div className="nav-bar-slider">
        <br />
        <br />
        <div className="flex items-center w-36 gap-3">
          <SiJirasoftware className="w-8 h-8 text-white ml-6"></SiJirasoftware>
          <div> Jira Clone </div>
        </div>
        <br />
        <br />
        <div className="flex items-center  w-36 gap-3">
          <HiOutlineTicket className="w-8 h-8 text-white ml-6" />
          <div>Board</div>
        </div>
        <br />
        <br />
        <div className="flex items-center  w-36 gap-3">
          <GoGraph className="w-8 h-8 text-white ml-6" />
          <div>Charts</div>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
