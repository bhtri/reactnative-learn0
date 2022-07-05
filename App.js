import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// P04 Exercise 01 - Help 02
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.containerTop}>
        <View style={styles.top}>
          <Text style={styles.topText}>Top Left</Text>
        </View>
      </View>
      <View style={styles.containerCenter}>
      <View style={styles.center}>
          <Text style={styles.centerText}>Center</Text>
        </View>
      </View>
      <View style={styles.containerBottom}>
        <View style={styles.bottom}>
          <Text style={styles.bottomText}>Bottom Right</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e7feff',
    flex: 1,
  },
  containerTop: {
    flex: 1,
  },
  top: {
    marginTop: 80,
    marginHorizontal: 40,
    backgroundColor: '#ffffff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: 'red',
  },
  topText: {
    fontSize: 20,
    color: '#21a3d0',
    fontWeight: 'bold'
  },
  containerCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  center: {
    width: 150,
    height: 150,
    backgroundColor: '#33ff60',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerText: {
    fontSize: 20,
    color: '#21a3d0',
    fontWeight: 'bold'
  },
  containerBottom: {
    flex: 1,
  },
  bottom: {
    marginTop: 80,
    marginHorizontal: 40,
    backgroundColor: '#7ee6fd',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  bottomText: {
    textAlign: 'right',
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold'
  },
});
