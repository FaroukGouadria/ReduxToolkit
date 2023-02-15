import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../Redux/counterReducer';
import { ApiCall } from '../Redux/ApiReducer';
const HomeScreen = () => {
    const count = useSelector((state) => state.counter.counter);//read data from the store 
    const dispatch = useDispatch();//dispatch actions
    return (
        <View style={styles.sectionContainer}>
            <Text style={{ color: 'black', fontSize: 40 }}>{count}</Text>
            <View style={{ top: 30, flexDirection: 'row', justifyContent: 'space-between', margin: 40 }}>
                <Button title='Increment' onPress={() => dispatch(increment())} style={[styles.btn]} />
                <Button title='Decrement' onPress={() => dispatch(decrement())} style={styles.btn} />
            </View>
            <Button title='API CALL' onPress={() => dispatch(ApiCall())} style={styles.btn} />

        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    sectionContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: 'black'
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
    btn: {
        borderColor: 'black',
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 10,
        padding: 10,
        left: 20,
        right: 30
    }
});