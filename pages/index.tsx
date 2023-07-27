import { Home, Navbar, Perfil, Skills } from '../components';


const App = () => {
  return (
    <div className="container">
      <Navbar/>
      <Home/>
      <Perfil/>
      <Skills/>
    </div>
  )
};

export default App;