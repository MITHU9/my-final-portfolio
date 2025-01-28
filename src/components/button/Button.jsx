import "./style.css";

const Button = ({ text, liveLink, githubLink, children }) => {
  return (
    <a
      href={liveLink || githubLink}
      target="_blank"
      className="button flex items-center"
    >
      {" "}
      {children ? children : ""} {text}{" "}
    </a>
  );
};
export default Button;
