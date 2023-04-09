import { Avatar } from '@mui/material';
import './Post.css'
import InputOptions from './InputOptions';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';


const Post = ({name,description,photo,message}) => {
    

  return (
    <div className='post'>
          <div className="post__header">
               <Avatar className="post__avatar"/>
               <div className="post__header__info">
                    <h3>{name}</h3>
                    <h5>{description}</h5>
               </div>
          </div>
          <div className="post__body">
               <p>{message}</p>
               {
                    photo && <img src={photo} alt=""/>
               }
          </div>
          <div className="post__input__options">
               <InputOptions Icon={ThumbUpIcon} title="Like" />
               <InputOptions Icon={InsertCommentIcon} title="Comment" />
               <InputOptions Icon={ShareIcon} title="Share" />
               <InputOptions Icon={SendIcon} title="Send" />
          </div>
    </div>
  )
}

export default Post