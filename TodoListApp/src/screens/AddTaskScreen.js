import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const AddTaskScreen = () => {
  const [task, setTask] = useState('');

  const handleAddTask = () => {
    // Logique pour ajouter la tâche à la liste
    console.log(task);
    // Naviguez en arrière après l'ajout
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TextInput
        placeholder="Écrire une tâche ici..."
        value={task}
        onChangeText={setTask}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: '80%' }}
      />
      <Button title="Ajouter" onPress={handleAddTask} />
    </View>
  );
};

export default AddTaskScreen;
