import './App.css';
import Header from './Header';
import Sidebar from './Sidebar'
import Feed from './Feed'
import Widgets from "./Widgets"
import Login from "./Login"
import { useStateValue } from './StateProvider';
function App() {
  const [{user},dispatch] = useStateValue();
  return (
    //BEM naming convention-> Helps build app and scale up
    <div className="app">
      {!user ? (<Login/>):(
        <>
          <Header />
          <div className="app__body">
            <Sidebar />
            <Feed/>
            <Widgets/>     
          </div>
        </>
      )}
      

    </div>
  );
}

export default App;
