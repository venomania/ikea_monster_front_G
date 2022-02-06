import './App.css';
import Homme from './composent/Homme';
import Card from './composent/Card';
import Godcard from './composent/Godcard';
import ArticleDetails from './composent/ArticleDetails';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Panier from './composent/Panier';
import Formulaire from './composent/Formulaire';
 
function App() {

 

  return (
  
    <div className="App"> 
 <Router>
        
        <Routes>
            <Route exact path='/' element={< Homme />}></Route>
            <Route path="/article/:id" element={ < ArticleDetails />}></Route>
            <Route exact path='/payemnt' element={< Card />}></Route>
            <Route exact path='/valide' element={ <Godcard />  }></Route>
            <Route exact path='/panier' element={ <Panier/>  }></Route>
            <Route exact path='/Formulaire' element={ <Formulaire/>  }></Route>
          </Routes>
      </Router>
      
       
  </div>
  );
}

export default App;
