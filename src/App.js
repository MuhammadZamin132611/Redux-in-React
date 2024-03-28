import './App.css';
// import User from './User';
import HomeContainer from './containers/HomeContainer'
import HeaderContainer from './containers/HeaderContainer'
function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <HomeContainer />
      {/* <User data={{name: 'MD Zamin', age:25}}/> */}
    </div>
  );
}

export default App;
