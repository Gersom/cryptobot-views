import { StyleSheet, Text, View, Image } from 'react-native';

export default function Loading() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Image 
            source= {require('./../assets/logo.png')}
            style={styles.imagelogo}
          />
        <View style={styles.title}>
          <Text style={styles.titleText1}>
            Crypto</Text>
          <Text style={styles.titleText2}>
            Bot</Text>
        </View>

      </View>
      <View style={styles.footer}>
        <Text style={styles.byText}>
          By</Text>
        <Text style={styles.authorText}>
          Slonpay</Text>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#333842',
    paddingHorizontal: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 50,
  },
  imagelogo: {
    height: 120,
    width: 120,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  title: {
    flexDirection: 'row',
  },
  titleText1: {
    fontSize: 35,
    color: '#00B84C',
  },
  titleText2: {
    fontSize: 35,
    color: '#12BAF2',
  },
  footer: {
    paddingBottom: 20,
  },
  byText: {
    fontSize: 16,
    color: '#919799',
    textAlign: 'center',
  },
  authorText: {
    fontSize: 25,
    color: '#fff',
    textAlign: 'center',
  },
});
