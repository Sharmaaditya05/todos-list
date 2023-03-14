
import './App.css';
import Header from"./MyComponents/Header";
import {Todos} from"./MyComponents/Todos";
import {Footer} from"./MyComponents/Footer";
function App() {
  let todos = [
    {
      sno: 1,
      title: "Go to the market",
      desc: "You need to go to thr market to get this job done"
      

    }
  ]
  return (
    <>
       <Header title="Aditya Sharma" searchBar={false}/>
       <Todos/>
       <Footer/>  
    </>
  ); 
}

export default App;
