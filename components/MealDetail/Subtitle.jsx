import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

// import { Container } from './styles';

export default function Subtitle({ children }) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}

const screenWidth = Dimensions.get('screen').width

const styles = StyleSheet.create({
  subtitle: {
    color: '#e2b497',
    fontSize: screenWidth < 380 ? 14 : 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitleContainer: {
    padding: 6,
    borderBottomColor: '#e2b497',
    borderBottomWidth: 2,
    marginVertical: 4,
    marginHorizontal: 12,
  }
});
