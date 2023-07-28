import React from 'react';
import logo from './logo.svg';
import { Row, Col, Card } from 'antd';
// import './App.css';
import { Login } from './Components/Authentication/login';
import { ForgotPassword } from './Components/Authentication/ForgotPassword';
import { SideNav } from './Components/Common/SideNav/sideNav';
// import { UserManagement} from "./Components/UserManagement/UserManagement"
import { Route, Routes } from 'react-router-dom';
// import UserManagement from './Components/user/UserManagement';
import Dashboard from './Components/Dashboard/Dashboard';
import Projects from './Components/Projects/Projects';
import { TaskView } from './Components/Time Tracker/taskView';
import MainLayout from './Components/Common/Layout/mainLayout';
import { TimeSheet } from './Components/Time Tracker/timeSheet';
import { UsersView } from './Components/User Module/usersView';
import { UserForm } from './Components/User Module/userForm';
import { useState } from 'react';
import ProjectStatus from './Components/ProjectsStatus/ProjectStatus';
import Teams from './Components/Teams/Teams';
import { EditUser } from './Components/User Module/editUser';
import { EditTask } from './Components/Time Tracker/editTask';


function App() {


  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App"
      style={{ height: "100vh" }}
    >
      {isLoggedIn ?
        <MainLayout setIsLoggedIn={setIsLoggedIn}>
          <Routes>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/usersview' element={<UsersView />} />
            <Route path='userForm' element={<UserForm />} />
            <Route path='/forgotpassword' element={<ForgotPassword />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/timesheet' element={<TimeSheet />} />
            <Route path='/taskview' element={<TaskView />} />
            <Route path='/projectstatus' element={<ProjectStatus />} />
            <Route path='/teams' element={<Teams />} />
            <Route path='/editUser' element={<EditUser/>}/>
            <Route path='/editTask' element={<EditTask/>}/>
          </Routes>
        </MainLayout>
        :
        <Routes>
          <Route path='/' element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        </Routes>
      }


    </div>
  );
}

export default App;
