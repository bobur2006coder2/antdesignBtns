import { func, string } from "prop-types";
import { useState } from "react";

const SearchBtn = (props) => {
    const {text,handleClick,onMouseMove,onMouseDown,onMouseLeave,onMouseOut}=props;
    const [primaryClicked, setPrimaryClicked] = useState(false);
    const [showToltip,setShowtoltip]=useState(false);
  return (
    <div className="grid items-center justify-center relative">
     <center>
        {showToltip && <div className="transition-ease-in-out duration-150 absolute w-16 z-10 -top-5">
        <div className="bg-black max-sm:block hidden text-white p-1.5 rounded-lg -mt-3 relative">
            Search
            <div className="triangle-down absolute left-[40%] "></div>
        </div>
        </div>}

    <div className="overflow-hidden outline-none p-1.5 rounded-xl">
      <button
      title={window.innerWidth<=640?"Search":""}
        className={`flex items-center gap-x-2 outline-none bg-blue-600 rounded-lg p-2 hover:bg-blue-500  text-white shadow-sm shadow-blue-200 select-none transition-transform duration-150 ${
            primaryClicked ? " buttonEffect" : ""
        }`}
        onClick={() => {
          setPrimaryClicked(true);
          handleClick()
        }}
        onMouseMove={()=>{setPrimaryClicked(false);
            onMouseMove();
            setShowtoltip(true);
        }}
        onMouseDown={()=>{setPrimaryClicked(true);
            onMouseDown();
        }}
        onMouseLeave={()=>{
            setShowtoltip(false);
            onMouseLeave();
        }}
        onMouseOut={()=>{
            onMouseOut();
        }}
      >
        <img src="https://www.iconpacks.net/icons/2/free-search-icon-2907-thumb.png" className="invert w-4 max-sm:w-5"  alt="" />
        <span className="max-sm:hidden lg:inline-block">
        {text ? text : "Search"}
        </span>
      </button>
    </div>
    </center>
    </div>

  );
};

SearchBtn.propTypes={
    handleClick:func,
    text:string,
    onMouseMove:func,
    onMouseDown:func,
    onMouseLeave:func,
    onMouseOut:func
}

export default SearchBtn;
