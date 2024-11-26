import { Element } from "react-scroll";
import { AppRouter } from "./components/AppRouter";
import { Header } from "./components/HeaderC/Header";
import { LegalA } from "./pages/LegalAssistance/LegalA";
import { MyInfo } from "./pages/MyInfoPage/MyInfo";
import { Services } from "./pages/ServicesPage/Services";
import { CONSULTATION_ROUTE, CONTACTS_ROUTE, MAIN_ROUTE, MYINFO_ROUTE, SERVICES_ROUTE } from "./utils/constants";
import { WorkE } from "./pages/workExperience/workExp";
import { Consultation } from "./pages/AppointmentConsultation/Consultation";
import { Contacts } from "./pages/ContactsPage/Contacts";
import "./index.css"

function App() {


  return (
    <div>
      
      <Header/>  

      <Element name = {MAIN_ROUTE}>
        <WorkE/> 
      </Element> 
      
      <Element name = {SERVICES_ROUTE}>
        <Services/>
      </Element>

      <Element name = {MYINFO_ROUTE}>
        <MyInfo/>
      </Element>

   

      <Element name = {CONSULTATION_ROUTE}>
        <Consultation />
      </Element>

      <Element name = {CONTACTS_ROUTE}>
        <Contacts/>
      </Element>
  
    </div>
  );
}

export default App;