import './App.css';
import Component1 from './components/Component1';

function App() {
  const details=[
    {id: 1, user:"Naren", fulltime:true},
    {id: 2, user:"Mohan", fulltime:false},
  ]
  return (
    <div className="App">
      {details.map((details)=>{
        return(<Component1 details={details} />)
      })}
    </div>
  );
}

export default App;
