import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';

import GoalsItem from './components/GoalsItem';
import GoalsInput from './components/GoalsInput';

export default function App() {
  // MANAGE STATE HOOKS
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalView, setModalView] = useState(false);

  // FUNCTIONAL HANDLERS
    // ADD GOAL
  const addGoalHandler = (goal) => {
    setCourseGoals([...courseGoals,
    { key: Math.round(Math.random() * 100).toString(), value: goal }]);
    setModalView(!modalView);
  }
    // REMOVE GOAL
  const removeGoalHander = (goalId) => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.key !== goalId)
    })
  }
    // CANCEL MODAL
  const cancelGoalHandler = () => {
    setModalView(!modalView);
  }

  return (
    <View style={styles.container}>
      {/* TITLE */}
      <View style={styles.title}>
        <Text style={{ fontSize: 30, color:'white' }}>My List of Goals</Text>
      </View>

      <View style={styles.title}>
        <Text style={{ fontSize: 15, color:'white' }}>Add a new goal using the button below or click a goal to remove it from the list.</Text>
      </View>

      {/* ADD GOAL BUTTON */}
      <Button title='Add Goal' onPress={()=>setModalView(true)} />

      {/* GOAL INPUT COMPONENT */}
      <GoalsInput 
      onAddGoal={addGoalHandler} 
      visible={modalView} 
      onCancel={cancelGoalHandler} 
      />

      {/* LIST OF GOALS COMPONENT */}
      <FlatList
        data={courseGoals}
        renderItem={itemData =>
          (<GoalsItem 
            text={itemData.item.value} 
            id={itemData.item.key} 
            onDelete={removeGoalHander} 
            />)
          } />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding: 50,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#158'
  },
  title: {
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
