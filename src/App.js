import LoginPage from "./Loginscreen/Loginpage";
import './App.css';
import { Route,Routes } from "react-router-dom";
import Responsescreen from "./Responsescreen/Responsescreen";
import RadioForm from "./Responsescreen/RadioForm";
import SelectSubject from "./Responsescreen/EEE/SelectSubject";
import SelectSubject2 from "./Responsescreen/EEE/SelectSubject2";
import SelectSubject3 from "./Responsescreen/EEE/SelectSubject3";
import SelectSubject4 from "./Responsescreen/EEE/SelectSubject4";
import SelectSubject5 from "./Responsescreen/EEE/SelectSubject5";
import SelectSubject6 from "./Responsescreen/EEE/SelectSubject6";
import SelectSubject7 from "./Responsescreen/EEE/SelectSubject7";
import SelectSubject8 from "./Responsescreen/EEE/SelectSubject8";



function App() {
  return (
    <div>
       <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/responsescreen' element={<Responsescreen />} />
        <Route path='/RadioForm' element={<RadioForm />} />
        <Route path='/SelectSubject' element={<SelectSubject />} />
        <Route path='/SelectSubject2' element={<SelectSubject2 />} />
        <Route path='/SelectSubject3' element={<SelectSubject3 />} />
        <Route path='/SelectSubject4' element={<SelectSubject4 />} />
        <Route path='/SelectSubject5' element={<SelectSubject5 />} />
        <Route path='/SelectSubject6' element={<SelectSubject6 />} />
        <Route path='/SelectSubject7' element={<SelectSubject7 />} />
        <Route path='/SelectSubject8' element={<SelectSubject8 />} />
      </Routes>
    </div>
  );
}

export default App;
