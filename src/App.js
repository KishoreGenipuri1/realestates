
import './App.css';
import React from 'react'
// import { PropertyType } from './components/admin/menu/property/propertyType/propertyType.component';
// import { AgentInformation } from './components/admin/agent/agent.component';
// import { PropertyType } from './components/admin/menu/property/propertyType/propertyType.component';
import { Properties } from './components/admin/menu/property/properties/properties.component';
import { PropertyType } from './components/admin/menu/property/propertyType/propertyType.component';
import { PropertyTypeView } from './components/admin/menu/property/propertyView/propertyView.component';
import { PropertiesView } from './components/admin/menu/property/properties/propertiesView/propertiesView.component';
import { AdminMenu } from './components/admin/menu/menubar/menu.component';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './app.router';
// import { PropertyTypeView } from './components/admin/menu/property/propertyView/propertyView.component';
// import { MenuBar } from './menu';

// import { AdminMenu } from './components/admin/menu/menu.component';
// import { SearchProperty } from './components/admin/menu/property/search-property.component';
function App() {
  return (
    <BrowserRouter>
     <AdminMenu></AdminMenu>
     <AppRouter></AppRouter>
    </BrowserRouter>
  )
}

export default App