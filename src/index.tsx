//libs
import { render } from 'react-dom';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

//components
import App from '@components/App';

//style
import '@styles/base.scss';

export const history = createBrowserHistory();

render(
  <Router history={history}>
    <App/>
  </Router>,
  document.getElementById('root')
);