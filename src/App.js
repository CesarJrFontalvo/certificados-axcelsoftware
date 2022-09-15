import Header from "./components/Header";
import 'antd/dist/antd.less';
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import RightSidebar from "./components/RightSidebar";


function App() {
  return (
    <div className="App">
      <Header />
      <div className="app__body">
        <Sidebar />
        <Feed />
        <RightSidebar/>
      </div>
    </div>
  );
}

export default App;
