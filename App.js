import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, Image, StyleSheet } from 'react-native';

export default function App() {
  const [records, setRecords] = useState([
    {
      id: 1,
      text: "Lionel Messi",
      image: { uri: 'https://tse1.mm.bing.net/th?id=OIP.qdNuItszO43GXd5pD8BMcgHaLT&pid=Api&P=0&h=180' }, // Ruta de la imagen de Messi
    },
    {
      id: 2,
      text: "Julian Alvarez",
      image: { uri: 'https://tse1.mm.bing.net/th?id=OIP.qdNuItszO43GXd5pD8BMcgHaLT&pid=Api&P=0&h=180' }, // Ruta de la imagen de Messi
      // Ruta de la imagen de Alvarez
    },
    // Agrega más registros con imágenes...
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Create, Read, Update, Delete (CRUD) in React Native with Firebase</Text>
      <TextInput style={styles.input} placeholder="New Record" />
      <Button title="Create Record" />
      <Text style={styles.recordsHeader}>Records:</Text>
      <FlatList
        data={records}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.tableRow}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.tableCell}>{item.text}</Text>
            <View style={styles.buttonContainer}>
              <Button title="Edit" style={styles.button} />
              <Button title="Delete" style={styles.button} />
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
    paddingTop: 30,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 10,
  },
  recordsHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    padding: 10,
  },
  tableCell: {
    flex: 1,
    paddingTop: 15,
    paddingLeft: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  button: {
    marginHorizontal: 5,
  },
  image: {
    width: 50, // Ajusta el ancho de la imagen
    height: 50, // Ajusta la altura de la imagen
    marginRight: 10, // Ajusta el margen a la derecha de la imagen
    borderRadius: 100,
  },
});
