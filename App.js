
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from './SearchBar'; 
import DoctorBox from './DoctorBox';

const App = () => {
    return (
        <View style={styles.container}>
            <SearchBar />
            <Text style={styles.infoText}>Let's find your Doctor</Text>
            <View style={styles.boxContainer}>
                <DoctorBox name="Dr. John Smith" specialty="Dermatologist" rating="4.8" />
                <DoctorBox name="Dr. Anna Dinn" specialty="Psychologist" rating="4.8" />
                <DoctorBox name="De. Angela Rayez" specialty="Therapist" rating="4.8" />
                <DoctorBox name="Dr. Chris Bronte" specialty="Dentist" rating="4.8" />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#E6E6FA',
    },
    infoText: {
        fontSize: 20,
        color: 'black',
        marginTop: 40,
    },
    boxContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
});

export default App;
