import "./style3.css";

const Button3 = ({ text, children }) => {
  return (
    <button className="button2 flex items-center">
      {children ? children : ""} {text}
    </button>
  );
};
export default Button3;
