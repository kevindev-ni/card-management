import {createDrawerNavigator} from "@react-navigation/drawer";
import CustomDrawerContent from "./CustomDrawerContent";
import HomerContainer from "./HomerContainer";

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                title: 'Home Page',
            }}
            drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
            <Drawer.Screen name="Inbox" component={HomerContainer}/>
            <Drawer.Screen name="Outbox" component={HomerContainer}/>
        </Drawer.Navigator>
    );
}

export default MyDrawer