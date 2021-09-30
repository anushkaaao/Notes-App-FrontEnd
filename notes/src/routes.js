import { Route } from 'react-router-dom';
import RegistrationForm from './components/signup';
import LoginForm from './components/login';
import Dashboard from './components/dashboard';

const BaseRouter = () => (
    <div>
        <Route exact path="/signup" component={RegistrationForm} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/dashboard" component={Dashboard} />
    </div>
); 

export default BaseRouter;
