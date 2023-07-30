import { Home, Navbar, Perfil, Projects, Skills, Education } from '../components';


const App = () => {
  return (
    <div className="container">
      <Navbar/>
      <Home/>
      <Perfil/>
      <Skills/>
      <Projects/>
      <Education/>
    </div>
  )
};

export default App;