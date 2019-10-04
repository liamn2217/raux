import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NavBar } from './common';

class ProfilePage extends Component {
    render() {
        return (
            <View style={styles.viewStyle}>
                <Text>
                    Hello
                </Text>
                <NavBar />
            </View>
        );
    }
}

const styles = {
    viewStyle: {
        flex: 1
    }
};

export default ProfilePage;
