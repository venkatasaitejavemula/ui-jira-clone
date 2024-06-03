import { SiJirasoftware } from "react-icons/si";
import { MdAddChart } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { HiOutlineViewBoards } from "react-icons/hi";
import MenuItem from "./MenuItem";
import { Outlet, useNavigate } from "react-router";
const NavigationBar = () => {
  let navigate = useNavigate();

  const githubAction = () => {
    window.open("https://github.com/venkatasaitejavemula", "_blank");
  };
  return (
    <>
      <div className="nav-bar">
        <div className="nav-bar-slider">
          <br />
          <MenuItem Image={SiJirasoftware} title={"Jira"} />
          <br />
          <br />
          <MenuItem
            Image={HiOutlineViewBoards}
            title={"Board"}
            onClickAction={() => navigate("/dashboard")}
          />
          <br />
          <MenuItem
            Image={MdAddChart}
            title={"Reports"}
            onClickAction={() => navigate("/reports")}
          />
          <br />
          <MenuItem
            Image={FaGithub}
            title={"Git Hub"}
            onClickAction={githubAction}
          />
          <br />
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default NavigationBar;
