import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';


export default function TabLayout() {
  return (
<Tabs
  screenOptions={{
    tabBarActiveTintColor: '#fff',
    headerStyle: {
      backgroundColor: '#000000',
    },
    headerShadowVisible: false,
    headerTintColor: '#fff',
    tabBarStyle: {
    backgroundColor: '#000000',
    },
  }}
>

      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarStyle:{ display:'none'},
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24}  />
          ),
        }}
      />
      <Tabs.Screen
        name="workout"
        options={{
          title: 'Workout Planner',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'barbell-outline' : 'barbell-outline'} color="#ebff33ff" size={24}/>
          ),
        }}
      />

        <Tabs.Screen
        name="camera"
        options={{
          title: 'Physique Check',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'flash' : 'flash-outline'} color="#FFE52A" size={24}/>
          ),
        }}
      />

        <Tabs.Screen
        name="loginPage"
        options={{
          title: 'Profile',
          headerShown: false,
          tabBarStyle:{ display:'none'},
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'person' : 'person-outline'} color="#FFE52A" size={24}/>
          ),
        }}
      />
      
      
    </Tabs>

    
  );
}
