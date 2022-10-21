import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

import SPACING from '../config/SPACING';
import COLORS from '../config/COLORS';
import CATEGORIES from '../config/CATEGORIES';
import ADVANTURES from '../config/ADVANTURES';

const avatar = require('../assets/images/Avatar.png');

const WIDTH = Dimensions.get('screen').width;

const HomeScreen = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <SafeAreaView>
      <View style={{ padding: SPACING * 2 }}>
        <View
          style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}
        >
          <Text style={{ fontSize: SPACING * 3, fontWeight: 'bold', color: COLORS.dark }}>
            Discover
          </Text>
          <Image
            style={{ height: SPACING * 5, width: SPACING * 5, borderRadius: SPACING * 5 }}
            source={avatar}
          />
        </View>
        <ScrollView style={{ marginVertical: SPACING * 2 }} horizontal>
          {CATEGORIES.map((category, index) => (
            <TouchableOpacity
              style={{ marginRight: SPACING }}
              key={category.id}
              onPress={() => setActiveCategory(index)}
            >
              <Text
                style={[
                  { fontSize: SPACING * 2, color: COLORS.dark },
                  activeCategory === index && { color: COLORS.primary },
                ]}
              >
                {category.title}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <Text style={{ fontSize: SPACING * 1.7, color: COLORS.dark }}>
          {`${CATEGORIES[activeCategory].tours.length} `}
          {CATEGORIES[activeCategory].title}
        </Text>
        <ScrollView
          horizontal
          pagingEnabled
          decelerationRate="fast"
          snapToInterval={WIDTH * 0.7}
          showsHorizontalScrollIndicator={false}
          style={{ marginVertical: SPACING * 2 }}
        >
          {CATEGORIES[activeCategory].tours.map((tour) => (
            <TouchableOpacity
              style={{
                width: WIDTH * 0.7,
                height: WIDTH * 0.9,
                overflow: 'hidden',
                borderRadius: SPACING * 2,
                marginRight: SPACING * 2,
              }}
              key={tour.id}
            >
              <View
                style={{
                  position: 'absolute',
                  zIndex: 1,
                  height: '100%',
                  width: '100%',
                  backgroundColor: COLORS.transparent,
                  justifyContent: 'space-between',
                  padding: SPACING,
                }}
              >
                <TouchableOpacity
                  style={{
                    alignSelf: 'flex-end',
                    padding: SPACING,
                    backgroundColor: COLORS.white,
                    borderRadius: SPACING * 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Ionicons name="heart-outline" color={COLORS.primary} size={SPACING * 3} />
                </TouchableOpacity>
                <Text
                  style={{
                    fontSize: SPACING * 2,
                    color: COLORS.white,
                    fontWeight: '700',
                    marginLeft: SPACING,
                  }}
                >
                  {tour.title}
                </Text>
              </View>
              <Image source={tour.image} style={{ width: '100%', height: '100%' }} />
            </TouchableOpacity>
          ))}
        </ScrollView>
        <View
          style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}
        >
          <Text style={{ fontSize: SPACING * 2, fontWeight: 'bold', color: COLORS.dark }}>
            Feeling Adventuring ?
          </Text>
          <TouchableOpacity>
            <Text style={{ fontSize: SPACING * 1.4, fontWeight: '500', color: COLORS.primary }}>
              Show All
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          horizontal
          pagingEnabled
          style={{ marginVertical: SPACING * 2 }}
          showsHorizontalScrollIndicator
        >
          {ADVANTURES.map((adventure) => (
            <TouchableOpacity
              key={adventure}
              style={{ marginRight: SPACING * 3, padding: SPACING, alignItems: 'center' }}
            >
              <View style={{ width: SPACING * 3, height: SPACING * 3 }}>
                <Image
                  source={adventure.image}
                  resizeMode="contain"
                  style={{ width: '100%', height: '100%' }}
                />
              </View>
              <Text style={{ textTransform: 'uppercase', fontSize: SPACING, marginTop: SPACING }}>
                {adventure.title}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

// const styles = StyleSheet.create({});
