const MenuItem = ({ Image, title }) => {
  return (
    <div>
      <div className="flex items-center  gap-5 text-xl h-12 side-menu-item">
        <Image className="w-9 h-9 text-white ml-6" />
        <div className="text-white">{title}</div>
      </div>
    </div>
  );
};

export default MenuItem;
