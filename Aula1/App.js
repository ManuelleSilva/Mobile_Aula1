import { Text, SafeAreaView, StyleSheet } from 'react-native';
import Ola from './components/ola';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>
        <Ola nome="Helena" idade="23" city="Londres" work="Design de Games" />
        {'\n'}{'\n'}
        <Ola
          nome="Genevive"
          idade="45"
          city="Veneza"
          work="Corretora de Imóveis"
        />
        {'\n'}{'\n'}
        <Ola nome="Mirian" idade="29" city="Mongagua" work="Empreendedora" />
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
  },
});
