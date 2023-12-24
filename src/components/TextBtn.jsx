import {func, string } from "prop-types";


const DefaultBtn = (props) => {
    const {text,handleClick,onMouseMove,onMouseDown,onMouseLeave,onMouseOut}=props;
    return (
        <div className="overflow-hidden p-1.5 rounded-xl">
        <button
        className={` outline-none select-none p-2 rounded-lg active:bg-gray-300 hover:bg-gray-200`}
        onClick={()=>{
            handleClick()
        }}
        onMouseMove={()=>{
            onMouseMove();
        }}
        onMouseDown={()=>{
            onMouseDown();
        }}
        onMouseLeave={()=>{
            onMouseLeave();
        }}
        onMouseOut={()=>{
            onMouseOut();
        }}
      >
       {text?text:"Text Button"}
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
