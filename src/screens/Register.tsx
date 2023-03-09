import { Pressable, StyleSheet, Text, View, Image } from 'react-native';

import GerButton from './../components/GerButton';
import GerTextInput from './../components/GerTextInput';

export default function Register() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Image 
            source= {require('./../assets/logo.png')}
            style={styles.imagelogo}
          />
        <Text style={styles.titleText}>
          Registrate</Text>
        <Text style={styles.subtitleText}>
          Rellena los campos para continuar</Text>

        <View style={styles.input}>
          <GerTextInput placehlr='Nombre de usuario' />
        </View>
        <View style={styles.input}>
          <GerTextInput placehlr='Nombre' />
        </View>
        <View style={styles.input}>
          <GerTextInput placehlr='E-mail' />
        </View>
        <View style={styles.input}>
          <GerTextInput placehlr='Contraseña' />
        </View>
        
        <View style={styles.submit}>
          <GerButton 
            onPress={() => {}}
            title='Registrarse'/>
        </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#21252B',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  container: {
    backgroundColor: '#333842',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 30,
    width: '100%',
    borderBottomColor: '#00ACE6',
    borderBottomWidth: 3,
    borderStyle: 'solid'
  },
  imagelogo: {
    height: 70,
    width: 70,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  titleText: {
    fontSize: 24,
    marginTop: 10,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  subtitleText: {
    marginTop: 3,
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 16,
    color: '#FFFFFF',
  },
  input: {
    marginBottom: 20,
  },
  submit: {
  },
});
