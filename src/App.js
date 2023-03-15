
import './App.css';
import Header from"./MyComponents/Header";
import {Todos} from"./MyComponents/Todos";
import {Footer} from"./MyComponents/Footer";
function App() {
  const todos = [
    { 
      sno: 1,
      title: "Go to the market",
      desc: "You need to go to thr market to get this job done1"
      },
      {
        sno: 2,
        title: "Go to the Mall",
        desc: "You need to go to thr market to get this job done2"
        },
        {
          sno: 3,
          title: "Go to the Shop",
          desc: "You need to go to thr market to get this job done3"
          }
  ]
  return (
    <>
       <Header title="Aditya Sharma" searchBar={false}/>
       <Todos todos={todos}/>
       <Footer/>  
    </>
  ); 
}

export default App;
