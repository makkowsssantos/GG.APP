
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import IconButton from '../components/icons';

type MajorProgramsProps = {
    title: string;
    description: string;
};

export default function AboutScreen({ title, description }: MajorProgramsProps) {
    return (
        
        <View style={styles.infobox}>
            <IconButton icon="stopwatch-outline" size={40}/>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    
    title: {
    color: '#000',
    fontSize: 35,
    },

    description: {
    color: '#000',
    fontSize: 20,
    marginTop: 5,
    },

    infobox: {
    padding: 25,
    borderRadius: 8,
    width: 300,
    marginTop: 20,
    backgroundColor: '#fff'
    
    },
});