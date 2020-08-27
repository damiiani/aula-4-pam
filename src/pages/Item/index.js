import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

function Item({ navigation: { goBack } }) {
  function navigateToHome() {
    goBack();
  }

  return (
    <View style={styles.container}>
      <View style={styles.border}>
        <Text style={styles.title}>Item</Text>

        <TouchableOpacity style={styles.button} onPress={navigateToHome}>
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

Item.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};

export default Item;
