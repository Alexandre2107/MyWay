import React from 'react';

import { Stack } from 'expo-router';

export default function TabLayout() {


    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="index"
                options={{ title: 'Home' }}
            />
            <Stack.Screen
                name="[studentId]"
            />

        </Stack >
    );
}