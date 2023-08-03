import { Home, Navbar, Perfil, Projects, Skills, Education, Contact, Footer } from '../components';


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
      <Footer/>
    </div>
  )
};

export default App;