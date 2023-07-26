import { Home, Navbar, Perfil } from '../components';


const App = () => {
  return (
    <div className="container">
      <Navbar/>
      <Home/>
      <Perfil/>
    </div>
  )
};

export default App;