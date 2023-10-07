import React from 'react';
import { View, FlatList, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const AppList = ({ data, onItemClick }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => onItemClick(item)} style={styles.itemContainer}>
          <Image source={item.screenshots[0]} style={styles.thumbnail} />
          <View style={styles.infoContainer}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.category}>{item.category}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    padding: 10,
  },
  thumbnail: {
    width: 80,
    height: 80,
    marginRight: 10,
    borderRadius: 5,
  },
  infoContainer: {
    flex: 1, // Ocupa todo el espacio disponible horizontalmente
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  category: {
    fontSize: 14,
    color: '#666',
  },
});

export default AppList;
