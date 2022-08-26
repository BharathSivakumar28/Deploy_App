import React,{useState} from 'react'
import './App.css';
import { BrowserRouter, Routes, Route ,Link} from "react-router-dom";
import Doubt from './Doubt';


import Login from './components/studentcomponent/Login';
import Hero from './Hero';
import Commonlogin from './components/Commonlogin'
import Contact from './components/studentcomponent/Contact';
import Profile from './components/studentcomponent/Profile';
import Course from './Course';
import Leaderpage from './Leaderpage';
import Signup from './components/studentcomponent/Signup';
import Doubtsask from './components/studentcomponent/Doubtsask';
import Scan from './components/studentcomponent/Scan';
import Speechtotext from './components/studentcomponent/Speechtotext';
// import Teacher from './Teacher';
import Teacher from './pages/Teacher';
import SpeechRecognition, {
  useSpeechRecognition
} from "react-speech-recognition";
import Parents from './pages/Parents';
import Ec from './pages/Ec';
import ParentsDoubt from './components/parentsComponents/ParentsDoubt';
import Collegelist from './components/parentsComponents/Collegelist';
import Studentlogin from './components/Studentlogin';
import Parentlogin from './components/Parentlogin';
import Teacherlogin from './components/Teacherlo';
import Expertslogin from './components/Expertslogin';
import Certificate from './components/ECcomponents/Certificate';

import Schlorshiplist from './components/parentsComponents/Schlorshiplist';
import { Skills } from './Teacherscomponents/Skills';
import { Newsletter } from './Teacherscomponents/Newsletter';
import { Contactteacher } from './Teacherscomponents/ContactTeacher';
import { Banner } from './Teacherscomponents/Banner';

function App() {
  // const commands = [
  //   {
  //     command: ["Go to * page", "Go to *", "Open * page", "Open *"],
  //     callback: (redirectPage) => setRedirectUrl(redirectPage),
  //   },
  // ];

  // const { transcript } = useSpeechRecognition({ commands });
  // const [redirectUrl, setRedirectUrl] = useState("");
  // const pages = ["home", "courses", "speech","doubt", "contact"];
  // const urls = {
  //   home: "/",
  //   courses: "/course",
  //   doubt: "/doubt",
  //   speech: "/speech",
    
  //   contact: "/contact",
  // };

  // if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
  //   return null;
  // }

  // let redirect = "";

  // if (redirectUrl) {
  //   if (pages.includes(redirectUrl)) {
  //     redirect = <Link to={urls[redirectUrl]} />;
  //   } else {
  //     redirect = <p>Could not find page: {redirectUrl}</p>;
  //   }
  // }
  return (
    
    // <div className="App">
      
      
    //   <Hero/>
      

    // </div>
    <>
    <BrowserRouter>
    
      <Routes>
      <Route exact path="/" element={<Hero/>} />
      <Route  path="/teacherdoubt" element={<Skills/>} />
      <Route  path="/newsletter" element={<Newsletter/>} />
      <Route  path="/banner" element={<Banner/>} />
      <Route  path="/contactteacher" element={<Contactteacher/>} />
        <Route path="/doubt" element={<Doubt/>} />
        <Route path="/ansdoubt" element={<Ec/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/board" element={<Leaderpage/>} />
        <Route path="/login" element={<Commonlogin/>} />
        <Route path="/studentlogin" element={<Studentlogin/>} />
        <Route path="/parentlogin" element={<Parentlogin/>} />
        <Route path="/teacherlogin" element={<Teacherlogin/>} />
        <Route path="/expertlogin" element={<Expertslogin/>} />
        <Route path="/course" element={<Course/>} />
        <Route path="/parentsdoubt" element={<ParentsDoubt/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route exact path="/speech" element={<Speechtotext/>} />
        <Route path="/scan" element={<Scan/>} />
        <Route path="/collegelist" element={<Collegelist/>} />
        <Route path="/schlorshiplist" element={<Schlorshiplist/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/teacher" element={<Teacher/>} />
        <Route path="/parents" element={<Parents/>} />
        
        <Route path="/certi" element={<Certificate/>} />
       
      
        <Route path="/doubtsask" element={<Doubtsask/>} />
        <Route path="/collegelist" element={<Collegelist/>} />

        {/* {redirect} */}
      </Routes>
    
    </BrowserRouter>
    {/* <p id="transcript">Transcript: {transcript}</p>

      <button onClick={SpeechRecognition.startListening}>Start</button> */}
    </>
  );
}

export default App;
