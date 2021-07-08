//libs
import { render } from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';


//components
import Root from '@components/Root';
import Header from '@components/Header';

//style
import '@styles/base.scss';

render(
  <Router>
    <Header />
    <Root/>
  </Router>,
  document.getElementById('root')
);