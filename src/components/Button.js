import React  from 'react';
import {Text,TouchableOpacity} from 'react-native';

const Button = (props) => {
    return(
        <TouchableOpacity style={styles.buttonStyle} onPress={props.onPress}>
        <Text style={styles.textStyle}>{props.children} </Text>
        </TouchableOpacity>
    )
};

styles = {
    buttonStyle: {
        flex: 1,
        alignSelf: 'center',
        backgroundColor: '#fff',
        boderRadius: 5,
        borderWidth: 2,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5,
        color: '#007aff'
    },
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 18,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    }
}
export default Button;