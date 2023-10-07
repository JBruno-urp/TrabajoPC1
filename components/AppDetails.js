import React from 'react';
import { View, Text, Image, ScrollView, Button, StyleSheet } from 'react-native';

const AppDetails = ({ app }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: app.screenshots[0] }} style={styles.image} />
      </View>

      <View style={styles.detailsContainer}>
        {/* Contenedor flex para el título y la descripción */}
        <View style={styles.titleDescriptionContainer}>
          <Text style={styles.nameBackground}>
            <Text style={styles.name}>{app.name}</Text>
          </Text>
          <Text style={styles.descriptionBackground}>
            <Text style={styles.description}>{app.description}</Text>
          </Text>
        </View>

        <Text style={styles.category}>Categoría: {app.category}</Text>
        <Text style={styles.rating}>Calificación: {app.rating}</Text>

        {/* Agregar más detalles aquí, por ejemplo, detalles sobre el desarrollador, tamaño del archivo, etc. */}
      </View>

      {/* Agregar botones u opciones de descarga aquí */}
      <View style={styles.downloadContainer}>
        <Button title="Descargar" onPress={() => handleDownload(app)} />
        {/* Agregar más botones u opciones de descarga según sea necesario */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    aspectRatio: 16 / 9,
    width: '80%',
    alignSelf: 'center',
    marginBottom: 16,
  },
  detailsContainer: {
    marginBottom: 16,
  },
  titleDescriptionContainer: {
    flex: 1,
    marginBottom: 8,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  nameBackground: {
    backgroundColor: 'lightgreen',
    padding: 8,
    borderRadius: 5,
  },
  description: {
    fontSize: 16,
  },
  descriptionBackground: {
    backgroundColor: 'lightgreen',
    padding: 8,
    borderRadius: 5,
  },
  category: {
    fontSize: 16,
    color: '#666',
  },
  rating: {
    fontSize: 16,
    color: '#666',
    marginBottom: 16,
  },
  downloadContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  header: {
    backgroundColor: 'lightgreen', // Cambia a un tono de verde claro para la cabecera
    padding: 16,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  // Agrega más estilos según sea necesario
});

export default AppDetails;

