import Feed from "./components/Feed";
import RightSidebar from "./components/RightSidebar";
import MenuLateral from "./components/MenuLateral";

function App() {

  return (
    <div className="App">
      <div className="app__body row  ">
      
        <div className="col-12 col-md-3 col-lg-3 " style={{ marginTop: '10px'}} > <MenuLateral /></div>
        <div className="col-12 col-md-3 col-lg-6" > <Feed /></div>
        <div className="col-12 col-md-3 col-lg-3  " > <RightSidebar /></div>
      </div>
    </div>
  );
}

export default App;
