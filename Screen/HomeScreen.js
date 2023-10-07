// src/screens/HomeScreen.js
import React, { useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import { gamesData } from '../data/gamesData';
import SearchBar from '../components/SearchBar';
import AppList from '../components/AppList'; 
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const navigation = useNavigation();

  const handleSearch = (searchText) => {
    const filteredGames = gamesData.filter((game) =>
      game.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setSearchResults(filteredGames);
    setShowSearchResults(true);
  };

  const handleGameSelect = (game) => {
    navigation.navigate('AppDetails', { app: game });
  };

  return (
    <View>
      <SearchBar onSearch={handleSearch} />
      {showSearchResults ? (
        searchResults.length === 0 ? (
          <Text>No se encontraron juegos</Text>
        ) : (
          <AppList data={searchResults} onItemClick={handleGameSelect} />
        )
      ) : (
        <AppList data={gamesData} onItemClick={handleGameSelect} />
      )}
    </View>
  );
};

export default HomeScreen;
