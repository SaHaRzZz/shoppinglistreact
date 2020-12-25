import logo from './logo.svg';
import './App.css';
import MainList from './Components/MainList';
import Options from './Components/Options';
import {Provider} from 'react-redux';
import store from './redux/store';
import {Router, Route, Switch, BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
        <BrowserRouter>
          <Route component={Options} path="/options" exact/>
          <Route component={MainList} path="/ShoppingListReact" exact/>
        </BrowserRouter>
    </Provider>
  );
}

export default App;