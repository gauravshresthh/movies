import 'react-native-gesture-handler';
import React from 'react';

import { StatusBar } from 'expo-status-bar';

import MainNavigator from './components/routes';

export default function App() {
	return (
		<>
			<StatusBar hidden />
			<MainNavigator />
		</>
	);
}
