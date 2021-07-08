import Div from '@UI/Div';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons'

interface HeaderProps {}

const Header = ({}:HeaderProps) => {
  return <Div 
    absolute
  >
    <FontAwesomeIcon icon={faCog}/>
  </Div>
}

export default Header;