import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavBar from './components/MyNavBar'
import BadgeQTwo from './components/BadgeQTwo';
import BookList from './components/BookList';
import BookCard from './components/SingleBook';
import FilterBooks from './components/FilterBooks';
import WarningSign from './components/WarningSign'
// import Home from './components/Home'

function App() {
  return (
    <div>
      <MyNavBar />
      {/* <Home /> */}
      <WarningSign />
      <BadgeQTwo />
      <BookList />
      <FilterBooks />
      <BookCard />

    </div>
  );
}

export default App;
