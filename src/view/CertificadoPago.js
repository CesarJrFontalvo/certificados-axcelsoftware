import RightSidebar from "../components/RightSidebar";
import MenuLateral from "../components/MenuLateral";
import FormCertificadoPago from "../components/FormCertificadoPago";


const CertificadoPago = () => {
  return (
    <div className="App">
      <div className="app__body row  ">
      
        <div className="col-12 col-md-12 col-lg-3" style={{ marginTop: '10px'}}> <MenuLateral /></div>
        <div className="col-12 col-md-12 col-lg-6" > <FormCertificadoPago /></div>
        <div className="col-12 col-md-12 col-lg-3"> <RightSidebar /></div>
      </div>
    </div>
  )
}

export default CertificadoPago