import logo from './logo.svg';
import './App.css';
import MainList from './Components/MainList';
import {Provider} from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <MainList/>
      </div>
    </Provider>
  );
}

export default App;