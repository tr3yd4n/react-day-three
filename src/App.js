import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavBar from './components/MyNavBar'
import BadgeQTwo from './components/BadgeQTwo';
import BookList from './components/BookList';
// import Home from './components/Home'

function App() {
  return (
    <div>
      <MyNavBar />
      {/* <Home /> */}
      <BadgeQTwo />
      <BookList />
    </div>
  );
}

export default App;
