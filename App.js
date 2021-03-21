import 'react-native-gesture-handler';
import * as React from 'react';
import {BrandContextProvider} from './src/Context/Brands';
import {ProductsContextProvider} from './src/Context/Products';
import AppNavContainer from './src/Navigations/index';

const globalScreenOptions={
  headerStyle:{backgroundColor:"#2C6BED"},
  headerTitleStyle:{color:"white"},
  headerTintColor:"white",
}
const App = () =>{
  return (
    // <Provider store={store}>
      <BrandContextProvider>
        <ProductsContextProvider>
            <AppNavContainer></AppNavContainer> 
        </ProductsContextProvider>   
      </BrandContextProvider>
    // </Provider>
  )
}
export default App;