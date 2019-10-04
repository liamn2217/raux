import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
//import { CardSection } from './CardSection';
//import { Button } from './Button';
import { Actions } from 'react-native-router-flux';

const NavBar = (props) => {
    const { containerStyle, textStyle, buttonStyle } = styles;

    return (
        <View style={containerStyle}>
            <TouchableOpacity 
            onPress={() => Actions.main({ type: 'reset' })} 
            style={buttonStyle}
            >
                <Text style={textStyle}>
                    Home
                </Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={() => Actions.search()}
            style={buttonStyle}
            >
                <Text style={textStyle}>
                    Browse
                </Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={() => Actions.profile()}
            style={buttonStyle}
            >
                <Text style={textStyle}>
                    Profile
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => Actions.library()}
            style={buttonStyle}
            >
                <Text style={textStyle}>
                    Library
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = {
    containerStyle: {
        height: 60,
        backgroundColor: '#F8F8F8',
        justifyContent: 'flex-end',
        flexDirection: 'row',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'center',
        backgroundColor: '#EBEBEB',
        borderWidth: 0.5,
        borderColor: '#7A7A7A'
    },
    textStyle: {
        alignSelf: 'center',
        color: '#7A7A7A',
        fontSize: 16,
        fontWeight: '300'
    }
};

export { NavBar };
