import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {colors} from '../constants/theme';
import MainHeader from '../components/MainHeader';
import ScreenHeader from '../components/ScreenHeader';
import TopPlacesCarousel from '../components/TopPlacesCarousel';
import {PLACES, TOP_PLACES} from '../data';
import SectionHeader from '../components/SectionHeader';
import TripsList from '../components/TripsList';
import { TouchableOpacity, Text } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <MainHeader title="Visit India" />
      <Text style={styles.location}>Location: India</Text>
      <ScreenHeader mainTitle="Find Your" secondTitle="Dream Trip" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <TopPlacesCarousel list={TOP_PLACES} />
        <View style={styles.sections}>
        <TouchableOpacity style={styles.section}>
          <Text style={styles.sectionText}>Men</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.section}>
          <Text style={styles.sectionText}>Women</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.section}>
          <Text style={styles.sectionText}>AI Scan</Text>
        </TouchableOpacity>
      </View>
        <SectionHeader
          title="Popular Trips"
          //buttonTitle="See All"
          //onPress={() => {}}
        />
        <TripsList list={PLACES} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
  },
  sections: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
  },
  section: {
    backgroundColor: '#f0f0f0',
    borderRadius: 50,
    padding: 16,
    width: '30%',
    height:80,
    alignItems: 'center',
  },
  sectionText: {
    fontSize: 16,
  },
});

export default HomeScreen;