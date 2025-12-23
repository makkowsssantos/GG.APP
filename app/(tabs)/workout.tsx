import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MajorProgram from '../components/majorProgram';
import Wod from '../components/wod';

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.subtitle}>Let us Grind.</Text>
      <View style={styles.programs}>
        <MajorProgram title='Workout' description='Today at 2:50pm'/>
      </View>


      <Text style={styles.paragraph}>Your Workout Of the Day:</Text>
      <View style={styles.wod}>
      <Wod title='Chest focused' description='Incline DB Press (12x3)' />
        <Wod title='Shoulder focused' description='DB Lateral Raises (15x4)' />
        </View>
      <TouchableOpacity style={styles.getStartedButton}>
              <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
      
      <View style={styles.calendarSection}>
        
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    padding:20,
    
  },

  wod: {
    flexDirection:'row'
  },

  calendarSection:{
    flex: 1,
    
  },

  programs:{
    alignItems: 'flex-start'
  },


  subtitle: {
    marginTop:20,
    color: '#fff',
    fontSize: 30,
    fontWeight: 300,
  },

  paragraph: {
    marginTop: 50,
    color: '#fff',
    fontSize: 20,
  },

    getStartedButton: {
    backgroundColor: '#FFEF5F',
    borderRadius: 8,
    padding: 20,
    marginTop:15,
    alignItems: 'center',
    justifyContent:'center',
    maxWidth:400
  },

  buttonText: {
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold',
  },

});
