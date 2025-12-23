import React from "react";
import { StyleSheet, Text, View } from 'react-native';

type MembershipProps = {
    title: string;
    description: string;
}

export default function membership ({title, description}: MembershipProps) {
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
        flex: 1,

    },

    textBox: {
    backgroundColor: '#000',
    padding: 25,
    borderRadius: 8,
    marginVertical: 10,
    maxWidth:180
    },

    title: {
        color: '#fff',
        fontSize:20
    },

    description:{
        color: '#fff',
        fontSize: 14,
        marginTop: 5,
    },

    header: {
        fontSize: 30,
        color: '#fff',
        fontWeight: 500,
        textAlign: 'center',
        marginTop:50
    }

})