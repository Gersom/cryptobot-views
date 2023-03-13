import { ScrollView , StyleSheet, Text, View, Image } from 'react-native';

import GerButton from './../components/GerButton';
import GerTextInput from './../components/GerTextInput';

export default function Conexion() {
  return ( 
    <ScrollView style={styles.scroll}>  
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <Text style={styles.nameColor1}>
            Crypto</Text>
          <Text style={styles.nameColor2}>
            Bot</Text>
        </View>
        <View style={styles.invertion}>
          <View style={styles.invertionInput}>
            <GerTextInput placehlr='Exchange' />
          </View>
          <View style={styles.invertionInput}>
            <GerTextInput placehlr='Api key' />
          </View>
          <View style={styles.invertionInput}>
            <GerTextInput placehlr='Secret key' />
          </View>
          <View style={styles.submit}>
            <GerButton
              onPress={() => {}}
              title='Probar Conexion'/>
          </View>
        </View>

        <View style={styles.data}>
          <Text style={styles.dataTitle}>
            Datos de Cuenta Binance</Text>

          <View style={styles.dataContent}>
            <Text 
            style={styles.dataId}>
              ID</Text>
            <View style={styles.dataRight}>
              <Text
              style={styles.dataNumber}>
                345456456556</Text>
              <Text
              style={styles.dataStatus}>
                OK</Text>
            </View>
          </View>

          <View style={styles.dataContent}>
            <Text 
            style={styles.dataId}>
              TRADING SPOT:</Text>
            <View style={styles.dataRight}>
              <Text
              style={styles.dataStatus}>
                Activado</Text>
            </View>
          </View>

          <View style={styles.dataContent}>
            <Text 
            style={styles.dataId}>
              TRADING FUTURES:</Text>
            <View style={styles.dataRight}>
              <Text
              style={styles.dataStatus}>
                Activado</Text>
            </View>
          </View>

          <View style={styles.dataContent}>
            <Text 
            style={styles.dataId}>
              RETIROS:</Text>
            <View style={styles.dataRight}>
              <Text
              style={styles.dataStatus}>
                Desactivado</Text>
            </View>
          </View>

          <View style={styles.dataContent}>
            <Text 
            style={styles.dataId}>
              DEPOSITOS:</Text>
            <View style={styles.dataRight}>
              <Text
              style={styles.dataStatus}>
                Desactivado</Text>
            </View>
          </View>

          <View style={styles.dataFooter}>
            <Text
            style={styles.dataConexion}>
              Conexion exitosa</Text>
            <Text
            style={styles.dataStatus}>
              OK</Text>
          </View>



        </View>
      </View>

    </ScrollView>
  );
}

const container = StyleSheet.create({
  mixed: {
    paddingHorizontal: 15,
    width: '100%',
  }
})
const section  = StyleSheet.create({
  mixed : {
    ...container.mixed,
    paddingVertical: 22,
    borderRadius: 20,
    borderBottomColor: '#00ACE6',
    borderBottomWidth: 3,
    borderStyle: 'solid'
  },
})

const styles = StyleSheet.create({
  scroll: {
    width: '100%',
  },
  wrapper: {
    alignItems: 'center',
    backgroundColor: '#21252B',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },


  header: {
    ...container.mixed,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 15,
    paddingTop: 30,
  },
  nameColor1: {
    fontSize: 24,
    color: '#00B84C',
  },
  nameColor2: {
    fontSize: 24,
    color: '#12BAF2',
  },



  invertion: {
    ...section.mixed,
    backgroundColor: '#282C34',
  },
  invertionInput: {
    marginBottom: 10,
  },
  submit: {
    marginTop: 10,
  },

  
  
  data: {
    ...section.mixed,
    backgroundColor: '#282C34',
    marginVertical: 17,
  },
  dataTitle:{
    marginBottom: 10,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  dataContent: {
    flexDirection: 'row',
  },
  dataRight: {
    flexDirection: 'row',
  },
  dataId: {
    marginRight: 'auto',
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  dataNumber: {
    color: '#9FB2BF',
    marginRight: 10,
  },
  dataStatus: {
    color: '#37D377',
  },
  dataFooter: {
    paddingHorizontal: 20,
    paddingVertical: 13,
    width: '100%',
    borderRadius: 7,
    backgroundColor: '#3D4452',
    color: '#fff',
    flexDirection: 'row',
    marginTop: 20,
  },
  dataConexion:{
    marginRight: 'auto'
  },

});
