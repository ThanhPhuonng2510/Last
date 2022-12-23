import { Routes, Route} from 'react-router-dom';
import config from "~/config";
import LayoutDashBoard from "~/Page/Admin/Dashboard/Dashboard";
import Login from "~/Page/Login/Login";
import Dashboard from "~/Page/Admin/home";
import List from "~/Conpoments/List/List";
import Single from "~/Conpoments/Single/Single";
import New from "~/Page/Admin/User/New/New";
import {ToastContainer} from "react-toastify";
import Home from "~/Page/Web/Home";
import Edit from "~/Page/Admin/User/Edit/Edit";


function App() {
    return (
       <div>
           <Routes>
               <Route path={config.routes.login} element={<Login/>}/>
               <Route index path={config.routes.dashboard} element={<LayoutDashBoard><Dashboard/></LayoutDashBoard>}/>
               <Route path={config.routes.employee}>
                   <Route index element={<LayoutDashBoard><List /></LayoutDashBoard>}/>
                   <Route path={config.routes.single} element={<LayoutDashBoard><Single /></LayoutDashBoard>}/>
                   <Route
                       path={config.routes.new}
                       element={<LayoutDashBoard><New title="Add New User" /></LayoutDashBoard>}
                   />
                   <Route
                       path={config.routes.edit}
                       element={<LayoutDashBoard><Edit title="Edit New User" /></LayoutDashBoard>}
                   />
               </Route>
               <Route path={config.routes.home} element={<Home/>}/>
           </Routes>
           <ToastContainer
               position="top-right"
               autoClose={5000}
               hideProgressBar={false}
               newestOnTop={false}
               closeOnClick
               rtl={false}
               pauseOnFocusLoss
               draggable
               pauseOnHover
           />
       </div>
    );
}

export default App;