import "./header.css";

function Header() {
  return (
    <div className="d-flex align-items-center">
      <img
        src="https://ionicframework.com/docs/icons/logo-react-icon.png"
        className="logo"
      />
      <h3 className="text-success shadow">React JS</h3>
    </div>
  );
}
export default Header;
