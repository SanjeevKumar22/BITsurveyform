import bitlogo from "./bitlogo.png";
import "./App.css";
import Form from "./form";
import Footer from "./footer";

function App() {
  return (
   
    <div className="App">
      <img src={bitlogo} alt="" srcset="" className="img" />
      <div className="head">
        <h1>Bangalore Institute of Technology</h1>
        <h3>Kr Road,V V Puram,Bangalore-560004</h3>
      </div>
      <Form />
      <Footer />
    </div>
  
  );
}

export default App;
