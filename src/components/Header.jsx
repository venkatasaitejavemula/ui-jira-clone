import { IoIosSearch } from "react-icons/io";
import { useSelector } from "react-redux";
const Header = ({
  selectedUser,
  onSelectUser,
  handleSearch,
  searchTerm,
  setSearchTerm,
}) => {
  const reduxUsers = useSelector((state) => state.jira.users);

  return (
    <div>
      <p className="text-4xl mt-7 text-slate-950">Kanban Board</p>
      <div className="flex items-center gap-3">
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e?.target?.value)}
            onKeyDown={(e) => {
              if (e?.key === "Enter") {
                handleSearch(searchTerm);
              }
            }}
          />
          <IoIosSearch
            className="search-icon"
            onClick={() => handleSearch(searchTerm)}
          />
        </div>
        <div className="flex items-center gap-3">
          <p className="text-xl">Quick Filters</p>
          <div className="flex gap-1">
            {reduxUsers?.map((item, index) => {
              return (
                <div
                  key={index}
                  className={
                    "user-icon cursor-pointer " +
                    (selectedUser?.includes(item?.userName) && "active-user")
                  }
                  title={item?.userName}
                  dangerouslySetInnerHTML={{ __html: item?.userAvatar }}
                  onClick={() => onSelectUser(item?.userName)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
