
import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchBar = () => {
    return (
        <View style={styles.searchBarContainer}>
            <Icon name="search" size={20} color="gray" style={styles.searchIcon} />
            <TextInput style={styles.searchBar} placeholder="Search..." />
        </View>
    );
};

const styles = StyleSheet.create({
    searchBarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        marginTop: 69,
    },
    searchIcon: {
        marginLeft: 10,
    },
    searchBar: {
        flex: 1,
        height: 50,
    },
});

export default SearchBar;
