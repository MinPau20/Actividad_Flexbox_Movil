import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box1}></View>
      <View style={styles.box2}></View>
      <View style={styles.box3}></View>
      <View style={styles.box3}></View>
      <View style={styles.box3}></View>
      
      <View style={styles.container2}>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
      </View>
      <StatusBar style="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    backgroundColor: 'pink',
    alignContent: 'space-around',
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  box1: {
    width: 330,
    height: 200,
    backgroundColor:'white',
    borderRadius: 5,
  },
  box2: {
    width: 330,
    height: 100,
    backgroundColor:'white',
    borderRadius: 5,
  },
  box3: {
    width: 90,
    height: 90,
    backgroundColor:'white',
    borderRadius: 5,
  },
  container2: {
    backgroundColor: 'lightblue',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 330,
    height: 250,
    borderRadius: 5,
  },
  box: {
    width: 95,
    height: 95,
    marginTop: 30,
    marginLeft: 11,
    backgroundColor:'white',
    borderRadius: 5,
  }
});
