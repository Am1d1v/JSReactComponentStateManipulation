import Post from "./Post"


function Posts(props){
    return(
        <div>
            {
                props.posts.map(post => (
                    <Post key={post.id}
                          id={post.id} 
                          name={post.name} 
                          cb={post.cb} 
                          removePost={props.removePost}/>
                ))
            }
        </div>
    )
}


export default Posts;
















