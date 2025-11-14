/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import music_data from './music_data.json';
import {
  SafeAreaProvider,
  SafeAreaView,
} from 'react-native-safe-area-context';
import SongCard from './components/SongCard';
import SearchBar from './components/SearchBar';


function App() {
  const [list, setList] = useState(music_data);
  const renderSong = ({ item }) => <SongCard song={item} />;
  const renderSeperator = () => <View style={styles.seperator}></View>
  const handleSearch = text => {
    const filteredlist = music_data.filter(song => {
      const searchedText = text.toLowerCase();
      const currentTitle = song.title.toLowerCase();
      const currentArtist = song.artist.toLowerCase()
      const currentDate = song.year.toString();

      return (currentTitle.indexOf(searchedText) > -1 || currentDate.indexOf(searchedText) > -1 || currentArtist.indexOf(searchedText) > -1);
    });
    setList(filteredlist);
  };
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <SearchBar onSearch={handleSearch} />
        <FlatList
          keyExtractor={item => item.id}
          data={list}
          renderItem={renderSong}
          ItemSeparatorComponent={renderSeperator}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}



export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
  },
  seperator: {
    borderWidth: 1,
    borderColor: '#e0e0e0'
  }
});