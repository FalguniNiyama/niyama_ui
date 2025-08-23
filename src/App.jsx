import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Emspanel from './pages/Emspanel';
import Bmspanel from './pages/Bmspanel';
import Livechart from './pages/Livechart';
import Reports from './pages/Reports';
import Acknowledge from './pages/Acknowledge';
import Accounts from './pages/Accounts';
import Areas from './pages/Areas';
import Channels from './pages/Channels';
import Departments from './pages/Departments';
import Devices from './pages/Devices';
import Devicesettings from './pages/Devicesettings';
import PIDsettings from './pages/PIDsettings';
import Cascadesetting from './pages/Cascadesetting';
import Outputmapping from './pages/OutputMapping';
import Calibrations from './pages/Calibrations';
import Roles from './pages/Roles';
import Shifts from './pages/Shifts';
import Users from './pages/Users';

import AppProviders from './provider/AppProviders';
import AHUSchedule from './pages/AHUSchedule';
import VFDSchedule from './pages/VFDSchedule';


function App() {
    return (
        <AppProviders>
        <Router>
        <Routes>
            <Route path="/login" element={<Login />} />
            
            {/* Protected routes with Sidebar */}
            <Route element={<Layout />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/emspanel" element={<Emspanel />} />
                <Route path="/bmspanel" element={<Bmspanel />} />
                <Route path="/livechart" element={<Livechart />} />
                <Route path="/reports" element={<Reports />} />
                <Route path="/acknowledge" element={<Acknowledge />} />
                <Route path="/settings/accounts" element={<Accounts />} />
                <Route path="/settings/areas" element={<Areas />} />
                <Route path="/settings/channels" element={<Channels />} />
                <Route path="/settings/departments" element={<Departments />} />
                <Route path="/settings/devices" element={<Devices />} />
                <Route path="/settings/devicesettings" element={<Devicesettings />} />
                <Route path="/settings/pidsettings" element={<PIDsettings />} />
                <Route path="/settings/ahuschedule" element={<AHUSchedule />} />
                <Route path="/settings/vfdschedule" element={<VFDSchedule />} />
                <Route path="/settings/cascadesetting" element={<Cascadesetting />} />
                <Route path="/settings/outputmapping" element={<Outputmapping />} />
                <Route path="/settings/calibrations" element={<Calibrations />} />
                <Route path="/settings/roles" element={<Roles />} />
                <Route path="/settings/shifts" element={<Shifts />} />
                <Route path="/settings/users" element={<Users />} />
                {/* Add more sidebar-routed pages here */}
            </Route>

            <Route path="*" element={<Login />} /> {/* fallback */}
        </Routes>
        </Router>
        </AppProviders>
    );
}

export default App;

