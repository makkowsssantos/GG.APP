import React from "react";
import { StyleSheet, Text, View } from "react-native";

type FooterProps = {
    title: string;
    description: string;
}

export default function footer({title, description}: FooterProps) {
    return (
        <View style={styles.container}>
            <View style={styles.textBox}>
            <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{description}</Text>
                </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'column'
    }, 

    textBox: {
        marginTop:50,
        flexDirection: 'column',
        gap:10
    },

    title: {
    color: '#fff',
    fontSize: 20,
    },

    description: {
    color: '#ccc',
    fontSize: 15,
    marginTop: 5,
    },
})