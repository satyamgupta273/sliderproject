import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';

const AddToCart = () => {
  const route = useRoute();
  const { item } = route.params;

  const handleProceed = () => {
    // Handle the proceed action
    console.log('Proceed to checkout');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cart</Text>
      {item && (
        <Image
          source={item.image} // The image passed from TripsList
          style={styles.image}
        />
      )}
      <TouchableOpacity style={styles.proceedButton} onPress={handleProceed}>
        <Text style={styles.proceedButtonText}>Proceed to Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  proceedButton: {
    backgroundColor: '#007BFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  proceedButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default AddToCart;
