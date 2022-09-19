import Header from "./components/Header";
import 'antd/dist/antd.less';
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import RightSidebar from "./components/RightSidebar";
import ViewPdf from "./components/ViewPdf";


function App() {
  
  return (
    <div className="App">
      <Header />
      <div className="app__body row ">
<div  className="col-12 col-md-12 col-lg-3" > <Sidebar/></div>
<div  className="col-12 col-md-12 col-lg-6" > <Feed /></div>
<div  className="col-12 col-md-12 col-lg-3" > <RightSidebar/></div>
       
       
       
      </div>
      
      {/* <ViewPdf/> */}
    </div>
  );
}

export default App;
