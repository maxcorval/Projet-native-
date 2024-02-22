import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Liste des tâches</Text>
      <Button
        title="Ajouter une tâche"
        onPress={() => navigation.navigate('AddTask')}
      />
      {/* Ici, vous afficherez votre liste de tâches */}
    </View>
  );
};

export default HomeScreen;
