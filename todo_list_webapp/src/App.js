import './App.css';
import InputTask from './components/InputTask.js';
import SwitchMode from './components/SwitchMode.js';
import AllTasks from './components/AllTasks.js';
import Footer from './components/Footer.js';
import SyncButton from './components/SyncButton';
import Login from './components/Login.js';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllTodos } from './actions/apiActions';

function App() {
  const dispatch = useDispatch();
  const email = useSelector(state => state.email)
  dispatch(fetchAllTodos(email));
  const isLoggedIn = useSelector(state => state.isLoggedIn);

  if (!isLoggedIn) {
    return (
      <Login />
    )
  } else {
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
}

export default App;
