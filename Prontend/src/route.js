import Department from './pages/department';
import Employee from './pages/employee';
import Holiday from './pages/holiday';
import Home from './components/home.component';
import Position from './pages/position';
import Shift from './pages/shift';
import Timecheck from './pages/timecheck';

import Reschedule from'./pages/reschedule';
import Report from './pages/report';

//import { Form } from 'react-bootstrap';
import Profile from './components/profile.component';
import HeadPage from './blocks/headpage';
import Salary from './pages/salary';
import Calculate from './pages/calculate';
import UICalculateSalary from './pages/UICalculateSalary'
const routes=[
    //{path:"/login", exact:true, name:"Login", component:Login},
    {path:"/headpage", exact:false, name:"HeadPage", component:HeadPage},
    {path:"/", exact:true, name:"Home", component:Home},
    {path:"/home", exact:true, name:"Home", component:Home},
    {path:"/department",exact:true, name:"Department", component:Department},
    {path:"/employee",exact:true, name:"Employee", component:Employee},
    {path:"/position",exact:true, name:"Position", component:Position},
    {path:"/shift",exact:true, name:"Shift", component:Shift},
    {path:"/holiday",exact:true, name:"Holiday", component:Holiday},
    {path:"/timecheck",exact:true, name:"Timecheck", component:Timecheck},
    {path:"/reschedule",exact:true, name:"Reschedule", component:Reschedule},
    {path:"/profile",exact:true, name:"Profile", component:Profile},
    {path:"/report", exact:true, name:"Report", component:Report},
    {path:"/salary", exact:true, name:"Salary", component:Salary},
    {path:"/calculate", exact:true, name:"Calculate", component:Calculate},
    {path:"/uicalculatesalary", exact:true, name:"UICalculateSalary", component:UICalculateSalary}
    
];
export default routes;