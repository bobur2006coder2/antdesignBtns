import { bool, func, string } from "prop-types";

const LinkBtn = (props) => {
  const {
    hrefUrl,
    target,
    text,
    handleClick,
    onMouseMove,
    onMouseDown,
    onMouseLeave,
    onMouseOut,
  } = props;
  return (
    <div className="overflow-hidden p-1.5 rounded-xl">
      <a href={hrefUrl||"#!"} target={target ? "_blank" : "_self"} rel="noreferrer">
        <button
          className={`outline-none select-none p-2 rounded-lg hover:text-blue-400 text-blue-600 `}
          onClick={() => {
            handleClick();
          }}
          onMouseMove={() => {
            onMouseMove();
          }}
          onMouseDown={() => {
            onMouseDown();
          }}
          onMouseLeave={() => {
            onMouseLeave();
          }}
          onMouseOut={() => {
            onMouseOut();
          }}
        >
          {text ? text : "Link Button"}
        </button>
      </a>
    </div>
  );
};

LinkBtn.propTypes = {
  handleClick: func,
  text: string,
  onMouseMove: func,
  onMouseDown: func,
  onMouseLeave: func,
  onMouseOut: func,
  target: bool,
  hrefUrl: string,
};

export default LinkBtn;
