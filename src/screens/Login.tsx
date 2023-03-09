import { Pressable, StyleSheet, Text, View, Image } from 'react-native';

import GerButton from './../components/GerButton';
import GerTextInput from './../components/GerTextInput';

const textStyl = {
  "fontSize": 14,
  "color": "#FFFFFF",
  "fontWeight": "bold",
}

export default function App() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Image 
            source= {require('./../assets/logo.png')}
            style={styles.imagelogo}
          />
        <Text style={styles.titleText}>
          Bienvenido !</Text>
        <Text style={styles.subtitleText}>
          Inicia sesión para continuar</Text>

        <View style={styles.input}>
          <GerTextInput placehlr='Nombre de usuario' />
        </View>
        <View style={styles.input}>
          <GerTextInput placehlr='Contraseña' />
        </View>

        <Pressable style={styles.buttonRecoverPass} onPress={() => null} >
          <Text style={styles.recoverPass}>
            ¿Has olvidado tu contraseña?</Text>
        </Pressable>
        
        <View style={styles.submit}>
          <GerButton 
            onPress={() => {}}
            title='Iniciar Sesión'/>
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
    overflow: 'hidden',
  },
  imagelogo: {
    height: 100,
    width: 100,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  titleText: {
    fontSize: 24,
    marginTop: 15,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  subtitleText: {
    marginTop: 3,
    marginBottom: 30,
    textAlign: 'center',
    fontSize: 16,
    color: '#FFFFFF',
  },
  input: {
    marginBottom: 20,
  },
  buttonRecoverPass: {
    marginLeft: 'auto',
    borderBottomColor: '#999',
    borderBottomStyle: 'solid',
    borderBottomWidth: 1,
  },
  recoverPass: {
    textAlign: 'right',
    fontSize: 14,
    color: '#FFFFFF',
  },
  submit: {
    marginTop: 30,
  },
});
