import './PostStyles.css';

function Post(prop){
    return <div className='post'>
        <div className = 'post_header' >
            <img src={prop.author.photo} alt="Avatar" className='avaPikachu'></img>
            <p className='name'>{prop.author.name}</p>
            <p className = 'nickname'>{prop.author.nickname}</p>
        </div>

        <div className = 'post_content'>
            <p className = 'post_content_coment'>{prop.content}</p>
            <img src={prop.image} alt="Post" className='postImage'></img>
        </div>

        <div className='postFooter'>
            <img src={prop.iconLike} alt="Icon" className='icon'></img>
            <img src={prop.iconComment} alt="Icon" className='icon'></img>
            <img src={prop.iconShare} alt="Icon" className='icon'></img>
        </div> 
    </div>
}

export default Post;