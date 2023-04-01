

import './App.css';
import AnswerQuestion from './Components/AnswerQuestion/AnswerQuestion';
import Blog from './Components/Blog/Blog';
import Bookmark from './Components/Bookmark/Bookmark';

import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
     
     <Header></Header>
     <Blog></Blog>
     <AnswerQuestion></AnswerQuestion>
    </div>
  );
}

export default App;


