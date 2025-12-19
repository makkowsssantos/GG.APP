import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import InfoBox from '../components/InfoBox';
import Footer from '../components/footer';


export default function Index() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>Welcome to</Text>
      <Text style={styles.shadowedText}>GG. App</Text>
      <Text style={styles.paragraph}>A Gutz Gym Paranaque City App.</Text>

      <View style={styles.section}>
        <InfoBox title='Physique Check⚡' description='Helps you get motivated by seeing your physique.' />
        <InfoBox title='Workout Planner📔' description='Helps you track your REPS and SETS. Even your next work out.'/>
      </View>

      <TouchableOpacity style={styles.getStartedButton}>
            <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>

      
      <Footer title='About Us..' description='Gutz Gym Paranaque is one of the OG Bakal Gym. The hardcore, The Weights.' />
      <Footer title='Help Us..' description='Express your support by following our social media accounts.' />
      <Footer title='Why Us..' description='We offer you the best HARDCORE GYM.' />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    padding: 20,
    flexDirection:'column'
    
  },

   text: {
    color: '#fff',
    fontWeight: '200',
    fontSize: 40,
  },
   

  shadowedText: {
    paddingTop:20,
    fontSize: 80,
    fontWeight: 'bold',
    color: '#fff',
    lineHeight:70
  },

  paragraph: {
    fontSize: 18,
    color: '#fff',
    fontWeight:400
  },

  getStartedButton: {
    backgroundColor: '#1E201E',
    borderRadius: 8,
    padding: 20,
    marginTop:15,
    alignItems: 'center',
    justifyContent:'center',
    maxWidth:200
  },

  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },

  section: {
    flex: 1,
    flexDirection:'row'
  }


});
