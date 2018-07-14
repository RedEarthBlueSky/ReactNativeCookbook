import { createStackNavigator } from 'react-navigation';
import Home from '../components/Home';
import Detail from '../components/Detail';
import Page3 from '../components/Page3';
import Page4 from '../components/Page4';

//  Main stack navigator.  All routes must be added here in order
//  to function
const RootStack = createStackNavigator(
  {
    Home,   //  { Home: Home } destructure,
    Detail, //  { Detail: Detail } destructure,
    Page3,  //  { Page3: Page3 } destructure,
    Page4,  //  { Page4: Page4 } destructure,
  },
  {
    initialRouteName: 'Home'
  }
);

export default RootStack;
