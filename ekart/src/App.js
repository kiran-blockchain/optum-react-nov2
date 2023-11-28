
import { Products } from './Pages/Product';
import { Register } from './Pages/Register';
import { Footer } from './components/Footer';
import { Header } from './components/Header';



/**
 * App Component
 * @returns 
 * The app's HTML
 * 
 */
function App() {
  return (
    <div className='container-fluid'>
      
      <Header/>
      <Products/>
      {/* <Register/> */}
      <Footer/>
    </div>
  );
}

export default App;
