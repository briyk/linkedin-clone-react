import { useEffect, useState } from 'react';
import CreateIcon from '@mui/icons-material/Create';
import PhotoIcon from '@mui/icons-material/Photo';
import YouTubeIcon from '@mui/icons-material/YouTube';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ArticleIcon from '@mui/icons-material/Article';
import './Feed.css'
import { Avatar } from '@mui/material';
import InputOptions from './InputOptions';
import Post from './Post'
import { db } from '../../firebase';
import { collection, addDoc , getDocs , serverTimestamp , orderBy } from "firebase/firestore";
import { selectUser } from '../../redux/userSlice';
import { useSelector } from 'react-redux';

const Feed = () => {
  const user = useSelector(selectUser);
  // ================ post state
  const [input,setInput] = useState('') ;
  const [posts,setPosts] = useState([]);

  useEffect(() => {
     try {
       const fetchData = async () => {
         const querySnapshot = await getDocs(collection(db, 'posts'),orderBy("timestamp","desc"));
         const fetchedPosts = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
         
         setPosts(fetchedPosts);
       };
       fetchData();
     } catch (error) {
       console.log(error);
     }
   }, [posts]);
   

   const addPost = async (e) => {
     e.preventDefault();
     try {
       const docRef = await addDoc(collection(db, "posts"), {
        displayName: user.displayName,
         description: user.email,
         message: input,
         photo: user.photo || '',
         timestamp: serverTimestamp()
       });
       setInput('');
     } catch (error) {
     }
   };
   
  return (
    <div className='feed'>
      {/* --------------------- input */}
      <div className="feed__input-container">
        <div className="feed__input">
          <Avatar src='/myimage.jpg' alt="" />
          <form>
            <input value={input} onChange={e=>setInput(e.target.value)} type='text' placeholder='Start a Post' />
            <button onClick={addPost} type='submit'>Post</button>
          </form>
        </div>
        <div className="feed__input__options">
          <InputOptions Icon={PhotoIcon} title="Photo" color="#378fe9"/> 
          <InputOptions Icon={YouTubeIcon} title="Video" color="#5f9b41"/> 
          <InputOptions Icon={CalendarMonthIcon} title="Event" color="#c37d16"/> 
          <InputOptions Icon={ArticleIcon} title="Write Article" color="#e16745"/> 
        </div>
      </div>
      {/* ---------------- posts */}
      <div className='feed__posts'>
        {
          posts.map(post => (
            <Post
              key={post.id}
              name={post.displayName}
              description={post.description}
              message={post.message}
              photo={post.photo}
            />
          ))
        }
      </div>
    </div>
  );
}

export default Feed;
