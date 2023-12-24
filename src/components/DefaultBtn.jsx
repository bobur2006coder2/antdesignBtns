import {func, string } from "prop-types";
import { useState } from "react";


const DefaultBtn = (props) => {
    const {text,handleClick,onMouseMove,onMouseDown,onMouseLeave,onMouseOut}=props;
    const [defaultClicked, setDefaultClicked]=useState(false);
    return (
        <div className="overflow-hidden p-1.5 rounded-xl">
        <button
        className={`border outline-none select-none p-2 rounded-lg hover:border-blue-400 hover:text-blue-600 ${defaultClicked?" buttonEffect":""}`}
        onClick={()=>{
            setDefaultClicked(true);
            handleClick()
        }}
        onMouseMove={()=>{setDefaultClicked(false);
            onMouseMove();
        }}
        onMouseDown={()=>{setDefaultClicked(true);
            onMouseDown();
        }}
        onMouseLeave={()=>{
            onMouseLeave();
        }}
        onMouseOut={()=>{
            onMouseOut();
        }}
      >
       {text?text:"Default Button"}
      </button>
        </div>
    );
}

DefaultBtn.propTypes={
    handleClick:func,
    text:string,
    onMouseMove:func,
    onMouseDown:func,
    onMouseLeave:func,
    onMouseOut:func
}

export default DefaultBtn;
