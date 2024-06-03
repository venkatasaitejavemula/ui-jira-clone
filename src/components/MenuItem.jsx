const MenuItem = ({ Image, title, onClickAction }) => {
  return (
    <div>
      <div
        className="flex items-center  gap-5 text-xl h-12 side-menu-item"
        onClick={onClickAction}
      >
        <Image className="w-9 h-9 text-white ml-6" />
        <div className="text-white">{title}</div>
      </div>
    </div>
  );
};

export default MenuItem;
