import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Button } from 'react-native';
import axios from 'axios';

const POSTS_PER_PAGE = 10;

const HomeScreen = ({ navigation }) => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchPosts = async (page) => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
        params: { _page: page, _limit: POSTS_PER_PAGE },
      });
      setPosts(response.data);
      // Assuming a total of 100 posts for simplicity
      setTotalPages(Math.ceil(100 / POSTS_PER_PAGE));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPosts(currentPage);
  }, [currentPage]);

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('PostDetails', { postId: item.id })}
          >
            <Text style={styles.title}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
      <View style={styles.navBar}>
        <Button
          title="Previous"
          onPress={() => setCurrentPage(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
        />
        <Text>{currentPage} / {totalPages}</Text>
        <Button
          title="Next"
          onPress={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  item: {
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 18,
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
});

export default HomeScreen;
