import RightSidebar from "../components/RightSidebar";
import MenuLateral from "../components/MenuLateral";
import FormCertificadoPago from "../components/FormCertificadoPago";


const CertificadoPago = () => {
  return (
    <div className="App">
      <div className="contenedor  ">
      
        <div className="item item1" style={{ marginTop: '10px'}}> <MenuLateral /></div>
        <div className="item item2" > <FormCertificadoPago /></div>
        <div className="item item3"> <RightSidebar /></div>
      </div>
    </div>
  )
}

export default CertificadoPago