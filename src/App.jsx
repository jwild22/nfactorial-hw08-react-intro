import './App.css';
import Header from './components/Header';
import Post from './components/Post';
import 'bootstrap/dist/css/bootstrap.min.css';
import { articles } from './data/articles';
articles;

function App() {
  return (
    <div className="container mt-3">
      <Header />
      <div className="hello my-5">Hello world!</div>
      {articles.map((article, index) => (
        <Post {...article} key={index} />
      ))}
    </div>
  );
}

export default App;
