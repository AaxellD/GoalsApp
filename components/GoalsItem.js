import React from 'react'
import { View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native'

const GoalsItem = (props) => {
    return (
        <TouchableNativeFeedback onPress={()=>props.onDelete(props.id)}>
            <View style={styles.listItem}>
                <Text>{props.text}</Text>
            </View>
        </TouchableNativeFeedback>
    )
}

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginTop: 10,
        backgroundColor: '#FFF',
        borderColor: 'black',
        borderWidth: 1
    },
    goal:{
        
    }
})

export default GoalsItem

