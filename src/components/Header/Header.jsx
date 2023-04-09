import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import avatar from '/myimage.jpg'
import HeaderOptions from './HeaderOptions';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';import './Header.css'
import AcUnitIcon from '@mui/icons-material/AcUnit';
import { logOut } from '../../redux/userSlice';
import { auth } from '../../firebase';
import { useDispatch} from 'react-redux';

const Header = () => {
  const dispatch = useDispatch();

  const logoutApp = () => {
      dispatch(logOut())
      auth.signOut();
  }


  return (
    <div className="header">
      {/* ==================================== Left Side */}
        <div className="header__left">
            <img alt="" src="/linkedin.png"/>
            <div className="header__search">
                <SearchIcon/>
                <input type="text" placeholder='Search'/>
            </div>
            <HeaderOptions Icon={SearchIcon} title="Search" className="header_search_icon"/>
        </div>
        {/* ================================ Right Side */}
        <div className="header__right">
            <HeaderOptions Icon={HomeIcon} title="Home"/>
            <HeaderOptions Icon={SupervisorAccountIcon} title="My Network"/>
            <HeaderOptions Icon={BusinessCenterIcon} title="Jobs"/>
            <HeaderOptions Icon={ChatIcon} title="Messaging"/>
            <HeaderOptions Icon={NotificationsActiveIcon} title="Notifications"/>
            <HeaderOptions avatar={avatar} onClick={logoutApp} title="Me"/>
         
        </div>
    </div>
  )
}

export default Header