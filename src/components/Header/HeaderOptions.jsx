import { Avatar } from '@mui/material'
import './HeaderOptions.css'
const HeaderOptions = ({avatar,Icon,title,onClick }) => {
  return (
    <div onClick={onClick} className='header__options'>
          {Icon && <Icon className="header__icon"/>}
          {avatar && <img className="header__icon" src={avatar} alt=""/>}
          <h3>{title}</h3>
    </div>
  )
}

export default HeaderOptions