import './App.css';

import Columns from './components/Colums';

function App() {
  return (
  <div>
    <Columns state={"WORK"}/>
    <Columns state={"WORKING"}/>
    <Columns state={"DONE"}/>
  </div>
  );
}



export default App;