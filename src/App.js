
import './App.css';
import jsx2 from "./jsx2.jpg";
import './style.css';


function App() {
  return (
    <div className="App">
       <div style={{border:'solid 1px black'}}/>
       <h1 className="titlered">my application jsx</h1>
       <img src="./assest/jsx1.jpg" alt="imagefrom public" width="360" height="360" />
       <br/>
       <img src={jsx2} alt ='imagefrom src' width="360" height="360"/>
        <br/>
       <video style={{width:360,height:360}} controls>
      <source src="./myvideo.mp4" type="video/mp4" ></source>
     </video>
        
    </div>
  );
}

export default App;
