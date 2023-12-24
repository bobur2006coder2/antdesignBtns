import IndexButtons from "./components/indexButtons";

function App() {

  return (
  <>
    
    <div className="flex items-center justify-center gap-10 mt-5 flex-wrap">

    <IndexButtons type="default" handleClick={()=>console.log("default btn clicked")} />

    <IndexButtons type="primary" handleClick={()=>console.log("primary btn clicked")} />

    <IndexButtons type="dashed"  handleClick={()=>console.log("dashed btn clicked")} />

    <IndexButtons type="textButton" handleClick={()=>console.log("text btn clicked")} />

    <IndexButtons hrefUrl="" type="linkButton" handleClick={()=>console.log("Link btn clicked")} />

    <IndexButtons type="search" text="search" handleClick={()=>console.log("search btn clicked")} />

    <IndexButtons type="download" text="download" handleClick={()=>console.log("download btn clicked")} />

    </div>

  </>
  )
}

export default App;
