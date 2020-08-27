import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

function Home({ navigation: { navigate } }) {
  function navigateToCollection() {
    navigate('Collection');
  }

  function navigateToItem() {
    navigate('Item');
  }

  return (
    <View style={styles.container}>
      <View style={styles.border}>
        <Text style={styles.title}>Tela inicial</Text>

        <TouchableOpacity style={styles.button} onPress={navigateToCollection}>
          <Text style={styles.buttonText}>Coleção</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={navigateToItem}>
          <Text style={styles.buttonText}>Item</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Home;
