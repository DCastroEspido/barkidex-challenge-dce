import './App.css';
import Grid from './components/Grid';
import Navbar from './components/layout/Navbar'

/* First 151 pokemon */
const limit = 151;
const offset = 0;

const App = () => {
    return (
      <div className='layout'>
        <div className='main-header'>
          <Navbar></Navbar>
        </div>
        <main className='main-container'>
          <Grid limit={limit} offset={offset}></Grid>
        </main>
        <div className='main-footer'>
          <p>Barkidex developed by DCastroEspido</p>
        </div>
      </div>);
}

export default App;
