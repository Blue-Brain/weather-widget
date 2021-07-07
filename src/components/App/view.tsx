//libs
import { Route, Switch } from 'react-router-dom';  

//components
import MainPage from '@pages/MainPage';
import SettingsPage from '@pages/SettingsPage/view';

const App = () => {
  return <Switch>
    <Route path='/main' component={MainPage}/> 
    <Route path='/settings' component={SettingsPage}/> 
  </Switch>
}

export default App;