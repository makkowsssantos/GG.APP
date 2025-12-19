
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type InfoBoxProps = {
    title: string;
    description: string;
};

export default function InfoBox({title, description}: InfoBoxProps) {
  return (
      <View style={styles.box}>
          <View style={styles.infobox}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{description}</Text>
              </View>
    </View>
  );
}

const styles = StyleSheet.create({
    box: {
    flex:1
    },
    
    title: {
    color: '#fff',
    fontSize: 16,
    },

    description: {
    color: '#ccc',
    fontSize: 14,
    marginTop: 5,
    },

    infobox: {
    backgroundColor: '#333',
    padding: 25,
    borderRadius: 8,
    marginVertical: 10,
    maxWidth:180
    },
});
