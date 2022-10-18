
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import {Toaster} from 'react-hot-toast'
import Navbar from './components/Navbar';
import AddBank from './components/AddBank';
import Home from './components/Home';
import EditBank from './components/EditBank';


const Routing = () =>{
  return (
    <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route path='/add' element={<AddBank/>}/>			
    <Route path='/edit/:id' element={<EditBank/>}/>			
   </Routes>
  )
}
function App() {
  return (
    <div>
           <div>
              <Toaster
                position="top-center"
                reverseOrder={false}
                toastOptions={{
                  success : {
                    theme: {
                      primary : '#4aee88',
                    },
                  },
                }}
                />
            </div>
		<BrowserRouter>
             <Navbar/>
             <Routing/>
		
		</BrowserRouter>
	    
	</div>
  );
}

export default App;
