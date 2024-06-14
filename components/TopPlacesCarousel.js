import React from 'react';
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {colors, shadow, sizes, spacing} from '../constants/theme';
import {useNavigation} from '@react-navigation/native';

const CARD_WIDTH = sizes.width - 80;
const CARD_HEIGHT = 200;
const CARD_WIDTH_SPACING = CARD_WIDTH + spacing.l;

const TopPlacesCarousel = ({list}) => {
  const navigation = useNavigation(); 

  const handleAddToCart = (item) => {
    // Navigate to the cart screen
    navigation.navigate('Cart',{item}); 
  };
  return (
    <FlatList
      data={list}
      horizontal
      snapToInterval={CARD_WIDTH_SPACING}
      decelerationRate="fast"
      showsHorizontalScrollIndicator={false}
      keyExtractor={i => i.id}
      renderItem={({item, index}) => {
        return (
          <TouchableOpacity
            style={{
              marginLeft: spacing.l,
              marginRight: index === list.length - 1 ? spacing.l : 0,
            }}>
            <View style={[styles.card, shadow.dark]}>
              <View style={styles.imageBox}>
                <Image source={item.image} style={styles.image} />
              </View>
              <View style={styles.titleBox}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.location}>{item.location}</Text>
                <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.addToCartButton} onPress={()=>handleAddToCart(item)}>
                <Text style={styles.addToCartButtonText}>Add to Cart</Text>
              </TouchableOpacity></View>
              </View>
              
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    marginVertical: 10,
  },

  imageBox: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: sizes.radius,
    overflow: 'hidden',
  },
  image: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    resizeMode: 'cover',
  },
  titleBox: {
    position: 'absolute',
    top: CARD_HEIGHT - 80,
    left: 16,
  },
  title: {
    fontSize: sizes.h2,
    fontWeight: 'bold',
    color: colors.white,
  },
  location: {
    fontSize: sizes.h3,
    color: colors.white,
  },
  addToCartButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: sizes.radius,
    marginLeft: 65,
    marginTop:0
  },
  addToCartButtonText: {
    color: colors.white,
    fontSize: sizes.body,
  },
  buttonContainer: {
    // position: 'absolute',
    bottom: 10,
    left: 15,
    right: 0,
    alignItems: 'center',
  },
});

export default TopPlacesCarousel;