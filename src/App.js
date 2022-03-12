import "./App.css";
import Layout from "./Components/Layout";
import Contact from "./Pages/Contact";
import Work from "./Pages/Work";
import Education from "./Pages/Education";
import Skills from "./Pages/Skills";
import Summary from "./Pages/Summary";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Start from "./Pages/Start";
import Finalize from "./Pages/Finalize";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Test from "./Components/Test";




function App() {



  return (
    <Router>
      <Provider store={store}>
        {/* <Test /> */}
        <Layout>
          <Routes>
            <Route path="/Contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/Work" element={<Work />} />
            <Route path="/" element={<Start />} />
            <Route path="/Education" element={<Education />} />
            <Route path="/Skills" element={<Skills />} />
            <Route path="/Summary" element={<Summary />} />
            <Route path="/finalize" element={<Finalize />} />
          </Routes>
        </Layout>
      </Provider>
    </Router>
  );
}

export default App;
