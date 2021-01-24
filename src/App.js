import './App.css';
import MainList from './Components/MainList';
import Options from './Components/Options';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route component={Options} path="/options" exact />
          <Route component={MainList} path="/ShoppingListReact" exact />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;