import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Register from'./pages/register'
import Header from './components/Header';
import PrivateRoute from './utils/PrivateRoute';
import { AuthContextProvider } from './context/authContext';

function App() {
  return (
    
    <div className="App">
      <Router>
        <AuthContextProvider>
        <Header/>
        <PrivateRoute path="/" component={Home} exact/>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register}/>

        </AuthContextProvider>
        

      </Router>
      
    </div>
  );
}

export default App;
