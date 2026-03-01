// ui/Homescreen.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Homescreen = ({ layout }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Welcome to the Home Screen</Text>
            {/* Add customizable layout here based on `layout` prop */}
            {layout}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default Homescreen;