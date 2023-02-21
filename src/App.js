import './App.css';
import { Brands } from './components/brands';
import Header from './components/Header';
import Navs from './components/nav';
import {Cards} from './components/cards';
import Footer from './components/footer';
import Welcome from './components/welcome';
function App() {
  return (
  <>
    <Navs></Navs>
    <Header></Header>
    <Brands></Brands>
    <Welcome></Welcome>  
    <Cards></Cards>
    <Footer></Footer>
    </>
  );
}

export default App;
