import { useParams, link } from "react-router-dom"

function PostDetail(){
    const {id} = useParams()

    const post = {
        id,
        title:`${id}번째 게시글`,
        content: `${id}번째 게시글의 상세내용`
    }

    const handleDelete =()=>{
        alert("게시글이 삭제되었습니다")
    }
    
    
    return( 
        <div className="post-detail-container">
            <h1 className="post-detail-title">{post.title}</h1>
            <p className="post-detail-content">{post.content}</p>
            <div className="button-group">
                <Link to={`/post/edit/${id}`} className="edit-button">
                    수정하기
                </Link>
            </div>
        </div>
    )
}

export default PostDetail

//useParams()는 URL에 들어있는 값을 가져오는 React Router의 기능