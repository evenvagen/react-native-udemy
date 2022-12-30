import React, { useReducer } from 'react'; 
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
    switch(action.colorToChange){
        case 'red':
            return state.red + action.amount > 255 || state.red + action.amount < 0 ? state : {...state, red: state.red + action.amount};
        case 'blue':
            return state.blue + action.amount > 255 || state.blue + action.amount < 0 ? state : {...state, blue: state.blue + action.amount};
        case 'green':
            return state.green + action.amount > 255 || state.green + action.amount < 0 ? state : {...state, green: state.green + action.amount};
    }
};

const SquareScreen = () => {
    
    const [state, dispath] = useReducer(reducer, {red: 0, green: 0, blue: 0});
    const { red, blue, green } = state;
    
    return (
    <View>
       <ColorCounter color="Red" onIncrease={() => dispath({ colorToChange: 'red', amount: COLOR_INCREMENT })} onDecrease={() => dispath({ colorToChange: 'red', amount: -1 * COLOR_INCREMENT })} />
       <ColorCounter color="Blue" onIncrease={() => dispath({ colorToChange: 'blue', amount: COLOR_INCREMENT })} onDecrease={() => dispath({ colorToChange: 'blue', amount: -1 * COLOR_INCREMENT })}  />
       <ColorCounter color="Green" onIncrease={() => dispath({ colorToChange: 'green', amount: COLOR_INCREMENT })} onDecrease={() => dispath({ colorToChange: 'green', amount: -1 * COLOR_INCREMENT })}  />
       <View style={{ height:150, width: 150, backgroundColor: `rgb(${red},${green},${blue})` }} />
    </View>
        )
};

const styles = StyleSheet.create({});

export default SquareScreen;