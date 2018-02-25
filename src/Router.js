import React from 'react';
import { Scene, Router, Stack, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

const RouterComponent = () => {
    return (
        <Router sceneStyle={{backgroundColor: "#FFF"}}>
            <Stack key="root" hideNavBar>

            <Stack key="auth">
                <Scene key="login" component={LoginForm} title="LOGIN" initial/>
            </Stack>
            
            <Stack key="main">
               <Scene 
               key="employeeList" 
               component={EmployeeList} 
               title="EMPLOYEES"
               rightTitle="Add"
               onRight={() => Actions.employeeCreate()}/>
               <Scene key="employeeCreate" component={EmployeeCreate} title="CREATE EMPLOYEE" backTitle=" "/>
            </Stack>
            
            </Stack>
        </Router>
    );
};

export default RouterComponent;
