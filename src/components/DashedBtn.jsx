import { func, string } from "prop-types";
import { useState } from "react";

const DashedBtn = (props) => {
  const { handleClick, text } = props;
  const [dashedClicked, setDashedClicked] = useState(false);
  return (
    <div className="overflow-hidden outline-none p-1.5 rounded-xl">
      <button
        className={` outline-none  rounded-lg p-2 shadow-sm border border-dashed border-1 hover:border-blue-400 hover:text-blue-500 select-none transition-transform duration-150 ${
          dashedClicked ? " buttonEffect" : ""
        }`}
        onMouseMove={() => setDashedClicked(false)}
        onMouseDown={() => setDashedClicked(true)}
        onClick={() => {
        setDashedClicked(true);
        handleClick();
        }}
      >
        {text ? text : "Dashed Button"}
      </button>
    </div>
  );
};

DashedBtn.propTypes = {
  handleClick: func,
  text: string,
};

export default DashedBtn;
