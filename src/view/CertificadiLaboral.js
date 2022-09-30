import RightSidebar from "../components/RightSidebar";
import MenuLateral from "../components/MenuLateral";
import ViewPdf from "../components/ViewPdf";


function CertificadoLaboral() {
  return (
    <div className="App">
    <div className="contenedor  ">
      
      <div className="item item1" style={{ marginTop: '10px'}}> <MenuLateral /></div>
      <div className="item item2" > <ViewPdf /></div>
      <div className="item item3"> <RightSidebar /></div>
    </div>
    </div>
  );
}

export default CertificadoLaboral;
