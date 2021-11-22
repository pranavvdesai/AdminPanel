import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Questions from './pages/Questions';
import StudentDetails from './pages/StudentDetails';
import Footer from './components/Footer';
import Results from './components/StudentDetails/Results';
import questionCRUD from './components/Questions/questionCRUD';

function App() {
  return (
      <div>
          <Sidebar />
            <div className="md:ml-64">
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <Route exact path="/studentDetails" component={StudentDetails} />
                    <Route exact path="/questions" component={Questions} />
                  <Route exact path="/domains/questions/:name" component={questionCRUD} />
                  <Route exact path="/domains/:name" component={Results} />
                </Switch>
                <Footer />
          </div>
      </div>
  );
}

export default App;
