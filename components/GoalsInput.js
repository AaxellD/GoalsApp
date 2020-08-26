import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button, Modal } from 'react-native'

const GoalsInput = (props) => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    }

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    }

    return (
        <Modal visible={props.visible} animationType="slide" style={styles.modal}>
            <View style={styles.inputContainer}>

                <TextInput placeholder="My Goal" style={styles.input} onChangeText={goalInputHandler} value={enteredGoal} />

                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Cancel" color='red' onPress={props.onCancel} style={styles.button} />
                    </View>

                    <View style={styles.button}>
                        <Button title="ADD" style={styles.button} onPress={addGoalHandler} />
                    </View>

                </View>

            </View>
        </Modal>
    )
}


const styles = StyleSheet.create({
    modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputContainer: {
        padding: 50,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input: {
        width: "80%",
        borderColor: 'black',
        borderWidth: 1,
        padding: 10
    },
    buttonContainer: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 15
    },
    button: {
        width: '50%'
    }
})

export default GoalsInput