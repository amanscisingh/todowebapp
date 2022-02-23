import './App.css';
import InputTask from './components/InputTask.js';
import SwitchMode from './components/SwitchMode.js';
import AllTasks from './components/AllTasks.js';
import Footer from './components/Footer.js';
import SyncButton from './components/SyncButton';



function App() {
  return (
    <div className="App">
      <InputTask />
      <SwitchMode />
      <AllTasks />
      <Footer />
      <SyncButton />
    </div>
  );
}

export default App;
