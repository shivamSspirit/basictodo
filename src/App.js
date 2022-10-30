import './App.css';
import AppContext from './todoContext';
import MainPage from './components/mainpage/mainPage';

function App() {
  return (
    <AppContext>
      <div className="App">
       <MainPage/>
      </div>
    </AppContext>
  );
}

export default App;
