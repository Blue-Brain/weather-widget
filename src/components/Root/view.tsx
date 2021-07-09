//libs
import { Route, Routes, Navigate  } from 'react-router-dom';  

//components
import MainPage from '@pages/MainPage';
import SettingsPage from '@pages/SettingsPage/view';

const Root = () => {
  return <Routes>
    <Route path='main'  element={<MainPage/>}/> 
    <Route path='settings' element={<SettingsPage/>}/> 
    <Route path='*' element={<Navigate to='main'/>}/> 
  </Routes>
}

export default Root;