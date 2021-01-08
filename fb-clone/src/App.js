import './App.css';
import Header from './Header';
import Sidebar from './Sidebar'
import Feed from './Feed'
function App() {
  return (
    //BEM naming convention-> Helps build app and scale up
    <div className="app">
      <Header />
      <div className="app__body">
        <Sidebar />
        <Feed/>
        {/* Widgets*/}      
      </div>

    </div>
  );
}

export default App;
