//libs
import { render } from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';

//components
import Root from '@components/Root';

//style
import '@styles/base.scss';

render(
  <Router>
    <Root/>
  </Router>,
  document.getElementById('root')
);