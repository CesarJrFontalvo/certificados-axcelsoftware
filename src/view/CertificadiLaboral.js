import RightSidebar from "../components/RightSidebar";
import MenuLateral from "../components/MenuLateral";
import ViewPdf from "../components/ViewPdf";


function CertificadoLaboral() {
  return (
    <div className="App">
      <div className="app__body row  ">
      
        <div className="col-12 col-md-12 col-lg-3" style={{ marginTop: '10px'}}> <MenuLateral /></div>
        <div className="col-12 col-md-12 col-lg-6" > <ViewPdf /></div>
        <div className="col-12 col-md-12 col-lg-3" > <RightSidebar /></div>
      </div>
    </div>
  );
}

export default CertificadoLaboral;
