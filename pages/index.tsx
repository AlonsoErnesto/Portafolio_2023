import { Home, Navbar, Perfil, Projects, Skills } from '../components';


const App = () => {
  return (
    <div className="container">
      <Navbar/>
      <Home/>
      <Perfil/>
      <Skills/>
      <Projects/>
    </div>
  )
};

export default App;