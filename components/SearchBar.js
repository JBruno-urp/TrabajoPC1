
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    onSearch(searchText);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Buscando Juegos...."
        onChangeText={setSearchText}
        value={searchText}
      />
      <Button title="Buscar" onPress={handleSearch} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 5,
  },
});

export default SearchBar;
