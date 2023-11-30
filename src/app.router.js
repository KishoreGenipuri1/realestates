import { Route, Routes } from "react-router-dom";
import { PropertyType } from "./components/admin/menu/property/propertyType/propertyType.component";
import { PropertyTypeView } from "./components/admin/menu/property/propertyView/propertyView.component";
import { Properties } from "./components/admin/menu/property/properties/properties.component";
import { PropertiesView } from "./components/admin/menu/property/properties/propertiesView/propertiesView.component";
import { Contact } from "./components/home/contact/contact.component";
import { About } from "./components/home/about/about.component";


export function AppRouter() {
    return (
        <Routes>
            <Route path="add-property-type" element={<PropertyType></PropertyType>}></Route>
            <Route path="/property-types" element={<PropertyTypeView></PropertyTypeView>}></Route>
            <Route path="/add-property" element={<Properties></Properties>}></Route>
            <Route path="/properties" element={<PropertiesView></PropertiesView>}></Route>

            <Route path="/contact" element={<Contact></Contact>}></Route>
            <Route path="/about" element={<About></About>}></Route>
        </Routes>
    )
}