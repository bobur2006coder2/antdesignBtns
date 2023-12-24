import { func, string } from "prop-types";
import { useState } from "react";

const PrimaryBtn = (props) => {
    const {text,handleClick,onMouseMove,onMouseDown,onMouseLeave,onMouseOut}=props;
  const [primaryClicked, setPrimaryClicked] = useState(false);

  return (
    <div className="overflow-hidden outline-none p-1.5 rounded-xl">
      <button
        className={` outline-none bg-blue-600 rounded-lg p-2 hover:bg-blue-500  text-white shadow-sm shadow-blue-200 select-none transition-transform duration-150 ${
            primaryClicked ? " buttonEffect" : ""
        }`}
        onClick={() => {
          setPrimaryClicked(true);
          handleClick()
        }}
        onMouseMove={()=>{setPrimaryClicked(false);
            onMouseMove();
        }}
        onMouseDown={()=>{setPrimaryClicked(true);
            onMouseDown();
        }}
        onMouseLeave={()=>{
            onMouseLeave();
        }}
        onMouseOut={()=>{
            onMouseOut();
        }}
      >
        {text ? text : "Primary Button"}
      </button>
    </div>
  );
};

PrimaryBtn.propTypes={
    handleClick:func,
    text:string,
    onMouseMove:func,
    onMouseDown:func,
    onMouseLeave:func,
    onMouseOut:func
}

export default PrimaryBtn;
