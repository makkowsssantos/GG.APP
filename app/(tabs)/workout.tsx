import { Checkbox } from 'expo-checkbox';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function AboutScreen() {
  const [isChecked, setChecked] = useState(false);
  const text = 'Ano workout mo ngayon ya?';

  
  return (
    <View style={styles.container}>
      <Text style={[styles.text, { color: '#fff', fontSize: 30 }]}>{text}</Text>
      <View style={styles.container}>
      <View style={styles.section}>
        <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} />
          <Text style={styles.paragraph}>Legs babyyy!</Text>
                
          <TouchableOpacity style={styles.button} onPress={() => alert('go buhat well :)')} >
            <Text style={styles.buttonText}>Attendance kay kuya larry</Text>
             </TouchableOpacity>
      </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    padding:20
  },
  text: {
    color: '#fff',
  },

  section: {
     marginTop:20,
    flexDirection: 'column',
    alignItems: 'center',
  },
  paragraph: {
    fontSize: 15,
    color:'#fff'
  },
  checkbox: {
    margin: 8,
  },
  
   blurContainer: {
    flex: 1,
    padding: 20,
    textAlign: 'center',
    overflow: 'hidden',
    borderRadius: 20,
  },
   
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    
  },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold', },

});
