import { IoIosSearch } from "react-icons/io";
const Header = () => {
  return (
    <div>
      <p className="text-4xl mt-7 text-slate-950">Kanban Board</p>
      <div className="search-container">
        <input type="text" className="search-input" placeholder="Search..." />
        <IoIosSearch className="search-icon" />
      </div>
    </div>
  );
};

export default Header;
