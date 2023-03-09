import { ScrollView , StyleSheet, Text, View, Image } from 'react-native';

import GerButton from './../components/GerButton';

export default function Home() {
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
          <Image 
            source= {require('./../assets/logo.png')}
            style={styles.invertionLogo}
          />
          <Text style={styles.invertionDescription}>
            Haga su primera inversión hoy</Text>
          <View style={styles.submit}>
            <GerButton
              onPress={() => {}}
              title='Activar Bot'/>
          </View>
        </View>

        <View style={styles.historial}>
          <Text style={styles.historialTitle}>
            ULTIMOS MOVIMIENTOS</Text>

          <View style={styles.historialItemUp}>
            <View style={styles.historialCoin}>
              <Image 
                source= {require('./../assets/bitcoin.png')}
              />
              <Text 
              style={styles.historialCoinText}>
                Bitcoin</Text>
            </View>
            <View style={styles.historialValue}>
              <Text 
              style={styles.historialValueMount}>
                $23.825.26</Text>
              <View style={styles.historialValuePercentage}>
                <Text 
                style={styles.historialValueVarUp}>
                  +2.47 %</Text>
                <Image 
                  source= {require('./../assets/up.png')}
                />
              </View>
            </View>
          </View>



          <View style={styles.historialItemDown}>
            <View style={styles.historialCoin}>
              <Image 
                source= {require('./../assets/ethereum.png')}
              />
              <Text 
              style={styles.historialCoinText}>
                Ethereum</Text>
            </View>
            <View style={styles.historialValue}>
              <Text 
              style={styles.historialValueMount}>
                $23.825.26</Text>
              <View style={styles.historialValuePercentage}>
                <Text 
                style={styles.historialValueVarDown}>
                  -3.40 %</Text>
                <Image 
                  source= {require('./../assets/down.png')}
                />
              </View>
            </View>
          </View>



          <View style={styles.historialItemDown}>
            <View style={styles.historialCoin}>
              <Image 
                source= {require('./../assets/ethereum.png')}
              />
              <Text 
              style={styles.historialCoinText}>
                Ethereum</Text>
            </View>
            <View style={styles.historialValue}>
              <Text 
              style={styles.historialValueMount}>
                $23.825.26</Text>
              <View style={styles.historialValuePercentage}>
                <Text 
                style={styles.historialValueVarDown}>
                  -3.40 %</Text>
                <Image 
                  source= {require('./../assets/down.png')}
                />
              </View>
            </View>
          </View>



          <View style={styles.historialItemDown}>
            <View style={styles.historialCoin}>
              <Image 
                source= {require('./../assets/ethereum.png')}
              />
              <Text 
              style={styles.historialCoinText}>
                Ethereum</Text>
            </View>
            <View style={styles.historialValue}>
              <Text 
              style={styles.historialValueMount}>
                $23.825.26</Text>
              <View style={styles.historialValuePercentage}>
                <Text 
                style={styles.historialValueVarDown}>
                  -3.40 %</Text>
                <Image 
                  source= {require('./../assets/down.png')}
                />
              </View>
            </View>
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
  },
})
const historialItem  = StyleSheet.create({
  mixed : {
    borderBottomWidth: 2,
    borderStyle: 'solid',
    flexDirection: 'row',
    paddingVertical: 12,
  },
})
const historialValueVar  = StyleSheet.create({
  mixed : {
    fontSize: 14,
    marginRight: 5,
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
    backgroundColor: '#3D4452',
  },
  invertionLogo: {
    height: 110,
    width: 110,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  invertionDescription: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 20,
  },
  submit: {
    marginTop: 20,
  },

  
  
  historial: {
    ...section.mixed,
    backgroundColor: '#282C34',
    marginVertical: 17,
  },
  historialTitle:{
    marginBottom: 20,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  historialItemUp: {
    ...historialItem.mixed,
    borderBottomColor: '#37D377',
  },
  historialItemDown: {
    ...historialItem.mixed,
    borderBottomColor: '#E25050',
  },
  historialCoin: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  historialCoinText: {
    fontWeight: 'bold',
    color: '#FFFFFF',
    fontSize: 18,
    marginLeft: 8,
  },
  historialValue: {
    marginLeft: 'auto',
  },
  historialValueMount: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  historialValuePercentage: {
    flexDirection: 'row',
    marginLeft: 'auto',
  },
  historialValueVarUp: {
    ...historialValueVar.mixed,
    color: '#37D377',
  },
  historialValueVarDown: {
    ...historialValueVar.mixed,
    color: '#F65858',
  },

});
