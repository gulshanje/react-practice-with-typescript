import './App.css';
import Greetings from './components/Greetings';

function App() {
  const familyList = [
    {
      first: 'John',
      last: 'Pekka'
    },
    {
      first: 'Matt',
      last: 'Juho'
    }
  ]
  return (
    <div className="App">
 
    <Greetings name='Gulshan' today='20.10.2021' family={familyList} />
    </div>
  );
}

export default App;
