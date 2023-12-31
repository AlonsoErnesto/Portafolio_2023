import { Home, Navbar, Perfil, Projects, Skills, Education, Contact, Footer } from '../components';
import Head from 'next/head';


const App = () => {
  return (
    <div className="container">
      <Head>
        <title>Ernesto_dev</title>
      </Head>
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