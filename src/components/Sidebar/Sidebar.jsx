import { Avatar } from '@mui/material'
import BookmarkIcon from '@mui/icons-material/Bookmark';
import './Sidebar.css'
import avatar from '/myimage.jpg'

const Sidebar = () => {

     const recentItem = (item) =>{
          return(
               <div className="sidebar__item">
                    <span className="sidebar__hash">#</span>
                    <p>{item}</p>
               </div>
          )
     }


  return (
    <div className='sidebar'>

          <div className="sidebar__top">
               <img src="/linkedincover.png" alt="" className='sidebar__banner'/>
               <Avatar src={avatar} alt="" className="sidebar__avatar" />
               <h2>Mohamed Bryik</h2>
               <h5>Front End Developer & UI Designer || React || JavaScript</h5>
               <div className='sidebar__stats'>
                    <div className="sidebar__stat">
                         <p>Who's viewed your profile</p>
                         <span> 154 </span>
                    </div>     
                    <div className="sidebar__stat">
                         <p>Impressions of your post</p>
                         <span> 270 </span>
                    </div>     
               </div>
               <div className="sidebar__saved">
               <BookmarkIcon/> 
               <span>My Items</span>    
               </div>     
          </div>

          <div className="sidebar__bottom">
              <p className='sidebar__head'>Recent</p>
              {recentItem('javascript')}
              {recentItem('webdevelopment')}
              {recentItem('reactjs')}
              {recentItem('nextjs')}
              {recentItem('interview')}
              
          </div>
    </div>
  )
}

export default Sidebar