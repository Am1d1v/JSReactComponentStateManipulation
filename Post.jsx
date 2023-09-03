


function Post(props){
    const {name, removePost, id} = props;

    return(
        <h2>
            <button  onClick={() => removePost(id)}> Delete </button>{name}

        </h2>
    )
}



export default Post;











