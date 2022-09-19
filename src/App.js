import Header from "./components/Header";
import 'antd/dist/antd.less';
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import RightSidebar from "./components/RightSidebar";
import MenuLateral from "./components/MenuLateral";


function App() {

  return (
    <div className="App">
      <div className="app__body  ">
          <div className="fixed-top ">

            <Header />
        </div>
        {/* <div  className="col-12 col-md-12 col-lg-3" > <Sidebar/></div> */}
        <div className="col-12 col-md-3 col-lg-3  mt-5 " > <MenuLateral /></div>
        <div className="col-12 col-md-3 col-lg-6" > <Feed /></div>
        <div className="col-12 col-md-3 col-lg-3 mt-4 " > <RightSidebar  /></div>



      </div>

    </div>
  );
}

export default App;
