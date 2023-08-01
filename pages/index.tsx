import { Home, Navbar, Perfil, Projects, Skills, Education, Contact } from '../components';


const App = () => {
  return (
    <div className="container">
      <Navbar/>
      <Home/>
      <Perfil/>
      <Skills/>
      <Projects/>
      <Education/>
      <Contact/>
    </div>
  )
};

export default App;