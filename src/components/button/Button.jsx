import "./style.css";

const Button = ({ text, children }) => {
  return (
    <button className="button flex items-center">
      {" "}
      {children ? children : ""} {text}{" "}
    </button>
  );
};
export default Button;
