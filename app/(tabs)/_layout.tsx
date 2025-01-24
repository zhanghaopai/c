import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function TabLayout() {
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
            <Tabs.Screen
                name="(top-tabs)"
                options={{
                    headerShown: false,
                    title: '贷款计算',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
                }}
            />
            <Tabs.Screen
                name="index"
                options={{
                    headerShown: false,
                    title: '提前还款',
                    tabBarIcon: ({ color }) => <FontAwesome6 size={26} name="calculator" color={color} />,
                }}
            />
        </Tabs>
    );
}
