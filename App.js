import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// P04 Exercise 01 - Help 02
// export default function App() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.containerTop}>
//         <View style={styles.top}>
//           <Text style={styles.topText}>Top Left</Text>
//         </View>
//       </View>
//       <View style={styles.containerCenter}>
//       <View style={styles.center}>
//           <Text style={styles.centerText}>Center</Text>
//         </View>
//       </View>
//       <View style={styles.containerBottom}>
//         <View style={styles.bottom}>
//           <Text style={styles.bottomText}>Bottom Right</Text>
//         </View>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: '#e7feff',
//     flex: 1,
//   },
//   containerTop: {
//     flex: 1,
//   },
//   top: {
//     marginTop: 80,
//     marginHorizontal: 40,
//     backgroundColor: '#ffffff',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderWidth: 1,
//     borderColor: 'red',
//   },
//   topText: {
//     fontSize: 20,
//     color: '#21a3d0',
//     fontWeight: 'bold'
//   },
//   containerCenter: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   center: {
//     width: 150,
//     height: 150,
//     backgroundColor: '#33ff60',
//     borderRadius: 100,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   centerText: {
//     fontSize: 20,
//     color: '#21a3d0',
//     fontWeight: 'bold'
//   },
//   containerBottom: {
//     flex: 1,
//   },
//   bottom: {
//     marginTop: 80,
//     marginHorizontal: 40,
//     backgroundColor: '#7ee6fd',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 20,
//   },
//   bottomText: {
//     textAlign: 'right',
//     fontSize: 20,
//     color: '#fff',
//     fontWeight: 'bold'
//   },
// });

// P05 Exercise 02 - Help 02
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.Text}>Top Left</Text>
      </View>
      <View style={styles.bottom}>
        <View style={styles.bottomLeft}>
          <Text style={styles.Text}>Bottom Left</Text>
        </View>
        <View style={styles.bottomRight}>
          <View style={styles.bottomRightTop}>
            <Text style={[styles.Text, styles.textBottom]}>Right Top</Text>
          </View>
          <View style={styles.bottomRightBottom}>
            <Text style={[styles.Text, styles.textBottom]}>Right Bottom</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    flex: 1,
    backgroundColor: '#f4fe87',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Text: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#21a3d0',
  },
  bottom: {
    flex: 1,
    flexDirection: 'row',
  },
  bottomLeft: {
    flex: 1,
    backgroundColor: '#3eee85',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomRight: {
    flex: 1,
  },
  bottomRightTop: {
    flex: 2,
    backgroundColor: '#ee3ee7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomRightBottom: {
    flex: 1,
    backgroundColor: '#379fd9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBottom: {
    color: '#fff',
  }
});