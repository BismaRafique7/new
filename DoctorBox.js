
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const DoctorBox = ({ name, specialty, rating }) => {
    return (
        <View style={styles.box}>
            <Icon name="user" size={80} color="#808080" marginTop={30}/>
            <Text style={styles.boxText}>{name}</Text>
            <Text style={styles.boxSubText}>{specialty}</Text>
            <View style={styles.ratingContainer}>
                <View style={styles.ratingBox}>
                    <Icon name="star" size={20} color="gold" />
                    <Text style={styles.ratingText}>{rating}</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    box: {
        width: '48%',
        height: 230,
        backgroundColor: '#f0f0f0',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        marginTop: 20,
        borderRadius: 10,
    },
    boxText: {
        marginTop: 10,
        fontSize: 10,
        fontWeight: 'bold',
    },
    boxSubText: {
        marginTop:0,
        fontSize: 10,
        color: 'gray',
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    ratingBox: {
        backgroundColor: '#0000FF',
        padding: 5,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
    },
    ratingText: {
        fontSize: 10,
        marginLeft: 5,
        color: '#fff',
    },
});

export default DoctorBox;
