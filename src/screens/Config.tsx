import { ScrollView , StyleSheet, Text, View, Image } from 'react-native';

import GerButton from './../components/GerButton';
import GerTextInput from './../components/GerTextInput';
import ToggleSwitch from 'toggle-switch-react-native'

export default function Config() {
  return ( 
    <ScrollView style={styles.scroll}>  
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <Text style={styles.nameColor1}>
            Crypto</Text>
          <Text style={styles.nameColor2}>
            Bot</Text>
        </View>
        <View style={styles.content}>
          <View style={styles.inputContent}>
            <Text style={styles.inputTitle}>
              % Ganancia (Take Profit)</Text>
            <GerTextInput placehlr='10%' />
          </View>
          <View style={styles.inputContent}>
            <Text style={styles.inputTitle}>
              % Perdida (Stop Loss)</Text>
            <GerTextInput placehlr='1%' />
          </View>
          
          <View style={styles.count}>
            <Text style={styles.countTitle}>
              Cantidad (Lotaje)</Text>
            <View style={styles.countToggle}>
              <ToggleSwitch
              isOn={true}
              onColor="green"
              offColor="red"
              size="medium"
              disabled={false}
              onToggle={isOn => console.log("changed to : ", isOn)}
              />
              <Text style={styles.countToggleLabel}>
              Cantidad Fija</Text>
            </View>
            <View style={styles.countToggle}>
              <ToggleSwitch
              isOn={false}
              onColor="#B5B5B5"
              offColor="#B5B5B5"
              size="medium"
              disabled={true}
              onToggle={isOn => console.log("changed to : ", isOn)}
              />
              <Text style={styles.countToggleLabel}>
              Porcentaje Capital</Text>
            </View>
            <View style={styles.countFooter}>
              <Text style={styles.countFooterText}>
                50 USD</Text>
            </View>
          </View>
          <View style={styles.inputContent}>
            <Text style={styles.inputTitle}>
             Cantidad de ordenes</Text>
            <GerTextInput valueInput='03' placehlr='0000' />
          </View>
          <View style={styles.countToggle}>
            <ToggleSwitch
            isOn={true}
            onColor="green"
            offColor="red"
            size="medium"
            disabled={false}
            onToggle={isOn => console.log("changed to : ", isOn)}
            />
            <Text style={styles.countToggleLabel}>
            TP Traiñong stop</Text>
          </View>
          <View style={styles.submit}>
          <GerButton 
            onPress={() => {}}
            title='Aplicar'/>
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



  content: {
    ...section.mixed,
    backgroundColor: '#282C34',
    marginBottom: 15,
  },
  inputContent: {
    marginBottom: 10,
  },
  inputTitle: {
    color: '#FFFFFF',
    marginBottom: 3,
  },


  count: {
    backgroundColor: '#3D4452',
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  countTitle: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  countToggle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  countToggleLabel: {
    color: '#FFFFFF',
    marginLeft: 10,
  },

  countFooter: {
    borderColor: '#555F73',
    borderWidth: 2,
    borderStyle: 'solid',
    marginTop: 15,
    borderRadius: 5,
    paddingVertical: 12,
  },
  countFooterText: {
    color: '#9CA6BA',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold'
  },
  submit: {
    marginTop: 20,
  },

});
