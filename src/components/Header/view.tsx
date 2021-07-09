//libs 
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

interface HeaderProps {}

const base = 'Header';

const Header = ({}:HeaderProps) => {
  const [settings, setSettings] = useState(false);

  return (
    <header className={classNames(base, `${base}--wrapper`)}>
      {!settings ? 
        <Link to='settings'>
          <FontAwesomeIcon 
            icon="cog" 
            onClick={() => setSettings(!settings)}
            className={`${base}--icon`}
          />
        </Link> :
        <Link to='main'>
          <FontAwesomeIcon 
            icon="trash-alt" 
            onClick={() => setSettings(!settings)}
            className={`${base}--icon`}
          />
        </Link>
      }
    </header>
  )
}

export default Header;