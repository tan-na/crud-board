import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home';
import CreatePost from './CreatePost';
import PostDetail from './PostDetail';
import PostEdit from './PostEdit';

function App() {
  return (
      <Router>
        <div className='App'>
          <Routes>
            <Route path={"/"} element={<Home />}/>
            <Route path={"/create"} element={<CreatePost/>}/>
            <Route path={"/post/:id"} element={<PostDetail/>}/>
            <Route path={"/post/edit/:id"} element={<PostEdit/>}/>
          </Routes>
        </div>
      </Router>
  )
}
// Router은 이 안에서는 React Router를 사용할거다라는 선언
// Routes 는 여러개의 Route를 관리하는 컨테이너
// Route는 URL과 화면을 연결하는 역활

//9줄에서 http://localhost:5173/ 이경우는 Home 컴포넌트를 보여줌
//10줄은 /create 일경우 Createpost 컴포넌트 보여줌
//11줄도 마찬가지 하지만 :id 부분은 URL에서 변하는 값을 받겠다는 뜻
// /post/1 /post/2 /post/10 이런식으로

export default App
