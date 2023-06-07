import logo from './logo.svg';
import './App.css';
import { HomeComponent } from './components/HomeComponent';
import  HomeContainer  from './containers/HomeContainer';
import HeaderContainer from './containers/HeaderContainer';
import ProductContainer from './containers/ProductContainer';
import RecentProduct from './containers/RecentProduct';
import LoginContainer from './containers/LoginContainer';
import { Route, Routes } from 'react-router-dom';
import DashBoard from './containers/DashBoard';

function App() {
  return (
    <div className="App">
     {/* <HomeComponent/> */}
     
     {/* <HeaderContainer/> */}
     {/* <HomeContainer/> */}

     {/* <ProductContainer/> */}
     <LoginContainer/>
     <Routes>
      <Route path='/dashboard' element= {<DashBoard/>}/>
     </Routes>
     {/* <RecentProduct/> */}
    </div>
  );
}

export default App;
