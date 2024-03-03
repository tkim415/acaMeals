// import React, { useContext } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native'
import { useSelector } from 'react-redux'
import MealsList from '../components/MealsList/MealsList';
import { MEALS } from '../data/dummy-data';
// import { FavoritesContext } from '../store/context/favorites-context';

export default function FavoritesScreen() {
  // const favoriteMealsCtx = useContext(FavoritesContext)
  const favoriteMealIds = useSelector(state => state.favoriteMeals.ids)

  const favoriteMeals = MEALS.filter(meal => favoriteMealIds.includes(meal.id));

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    )
  }
  return (
    <MealsList items={favoriteMeals} />
  );
}

const screenWidth = Dimensions.get('screen').width

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: screenWidth < 380 ? 14 : 18,
    fontWeight: 'bold',
    color: 'white',
  }
});
