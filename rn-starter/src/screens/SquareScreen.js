import React, { useReducer } from 'react'; 
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {

};

const SquareScreen = () => {
    
    const [state, dispath] = useReducer(reducer, {red: 0, green: 0, blue: 0});
    
    return (
    <View>
       <ColorCounter color="Red" onIncrease={() => setColor('red', COLOR_INCREMENT)} onDecrease={() => setColor('red', -1 * COLOR_INCREMENT)} />
       <ColorCounter color="Blue" onIncrease={() => setColor('blue', COLOR_INCREMENT)} onDecrease={() => setColor('blue', -1 * COLOR_INCREMENT)}  />
       <ColorCounter color="Green" onIncrease={() => setColor('green', COLOR_INCREMENT)} onDecrease={() => setColor('green', -1 * COLOR_INCREMENT)}  />
       <View style={{ height:150, width: 150, backgroundColor: `rgb(${red},${green},${blue})` }} />
    </View>
        )
};

const styles = StyleSheet.create({});

export default SquareScreen;