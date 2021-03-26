import './App.css';
import Login from './login';
import Sidebar from './Sidebar';
import Chat from './Chat';
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();
  // const [user, setUser] = useState(null);
  return (
    <div className="app">
      { !user ? (
        <Login />
      ) :  
       (  
        <div className="app__body">
          <Sidebar />
          <Chat />
        </div>
       )
       } 
    </div>
  );
}

export default App;

