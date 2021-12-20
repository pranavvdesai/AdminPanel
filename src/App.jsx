import React from 'react';
import { Switch, Route , Redirect} from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Questions from './pages/Questions';
import StudentDetails from './pages/StudentDetails';
import Footer from './components/Footer';
import Results from './components/StudentDetails/Results';
import questionCRUD from './components/Questions/questionCRUD';
import Login from './components/Login/Login';
import StudentResult from './components/StudentDetails/StudentResult';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div>
      <div className="md:ml-64">

        <Switch>
          <Route exact path="/" component={Login} />
          <>
            <Sidebar />
            <Navbar />

                    <Route exact path="/landing" component={Dashboard} />
                    <Route exact path="/dashboard" component={Dashboard} />
                    <Route exact path="/studentDetails" component={StudentDetails} />
                    <Route exact path="/questions" component={Questions} />
                  <Route exact path="/domains/questions/:id" component={questionCRUD} />
                  <Route exact path="/domains/:id" component={Results} />
                  <Route exact path="/domains/:id/:id" component={StudentResult} />
                  </>
</Switch>
                {/* <Footer /> */}
          </div>
      </div>
  );
}

export default App;
