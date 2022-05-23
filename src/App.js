import './App.css';
import Grid from './components/Grid';

/* First 151 pokemon */
const limit = 151;
const offset = 0;

const App = () => {
  return (
    <main className='main-container'>
      <Grid limit={limit} offset={offset}></Grid>
    </main>);
}

export default App;
