import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Footer from '../components/footer';
import InfoBox from '../components/InfoBox';
import Membership from '../components/membership';

export default function Index() {
  const router = useRouter();
  return (
    <SafeAreaView style={{flex:1, backgroundColor:'#000'}}>
    <ScrollView style={styles.container}>
      <Text style={styles.text}>Welcome to</Text>
      <Text style={styles.shadowedText}>GG. App</Text>
      <Text style={styles.paragraph}>A Gutz Gym Paranaque City App.</Text>

      <View style={styles.section}>
        <InfoBox title='Physique Check⚡' description='Helps you get motivated by seeing your physique.' />
        <InfoBox title='Workout Planner📔' description='Helps you track your REPS and SETS. Even your next work out.'/>
        </View>
        
      <View style={styles.logsection}>
      <TouchableOpacity onPress={() =>router.push('/(auth)/login')} style={styles.getStartedButton}>
        <Text style={styles.buttonText}>LogIn</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() =>router.push('/(tabs)/workout')} style={styles.getStartedButton}>
        <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
          </View>


      <Text style={styles.header}>Enroll now with our Promos</Text>
      <View style={styles.enrollSection}>
      <Membership title='Student Promo' description='₱50 per Session & ₱500 per Monthly' />
        <Membership title='Regular Enroll' description='₱60 per Session & ₱600 per Monthly' />
      </View>
      
      <View style={styles.footerSection}>
        <Footer title='GG.App' description='All rights reserved'/>
      </View>
      </ScrollView>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    padding: 20,
    flexDirection:'column'
    
  },

  logsection: {
    flex: 1,
    flexDirection: 'row',
    gap:10
  },

  header: {
        fontSize: 30,
        color: '#fff',
        fontWeight: 500,
        textAlign: 'center',
        marginTop:50
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
    maxWidth: 200,
  },

  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },

  section: {
    flex: 1,
    flexDirection:'row'
  },

  enrollSection: {
    flex: 1,
    flexDirection:'row'
  },

  footerSection: {
    flex: 1,
    textAlign: 'center',
    justifyContent:'center'
  }

});
