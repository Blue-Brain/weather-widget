//libs
import { render } from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import { library  } from '@fortawesome/fontawesome-svg-core';
import { faCog, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

//components
import Root from '@components/Root';
import Header from '@components/Header';

//style
import '@styles/main.scss';

library.add(faCog, faTrashAlt)

render(
  <Router>
    <Header />
    <Root/>
  </Router>,
  document.getElementById('root')
);