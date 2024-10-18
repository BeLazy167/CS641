import React from 'react';
import { Navigation } from './src/navigation';
import { useAuth } from './src/hooks/useAuth';
import { View, ActivityIndicator } from 'react-native';

export default function App() {
  const { loading } = useAuth();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return <Navigation />;
}
