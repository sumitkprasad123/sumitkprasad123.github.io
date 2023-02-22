import './App.css';
import About from "./components/About me/About";
import Skill from "./components/Skills/Skill";
import Project from "./components/Projects/Project";
import Contact from "./components/Contacts/Contact";
import Navbar from "./components/Navbar/Navbar"
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import GithubState from './components/github/GithubState';


function App() {
  return (
    <div className="App">
          <Navbar/>
          <Home/>
          <About/>
          <Skill/>
          <Project/>
          <GithubState/>
          <Contact/>
          <Footer />
    </div>
  );
}

export default App;
