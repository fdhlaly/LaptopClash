const Header = ({ title }) => {
  return (
    <div className="navbar bg-gray-900 flex justify-center items-center">
      <a className="font-bold text-4xl cursor-pointer text-white">{title}</a>
    </div>
  );
};

export default Header;
