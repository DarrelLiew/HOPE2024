import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../../constants/style";
import axios from "axios";

const PrayForOthers = () => {
  const [prayers, setPrayers] = useState([]);
  const [error, setError] = useState(null);

  const lasttenPrayers = async () => {
    try {
      const response = await axios.get(`${process.env.EXPO_PUBLIC_BACKEND_URL}/myprayers/lastten`);
      console.log(response.data);
      setPrayers(response.data); // Set the fetched prayers to state
    } catch (error) {
      console.error("Error fetching prayers:", error);
      setError("Failed to fetch prayers.");
    }
  };

  useEffect(() => {
    lasttenPrayers();
  }, []);

  const PrayerrenderBox = ({ prayerList }) => {
    if (!prayerList || prayerList.length === 0) {
      return <Text>No prayers found.</Text>;
    }

    return prayerList.map((prayerDetails, index) => (
      <PrayerBoxBox
        key={index}
        date={prayerDetails.date}
        prayer={prayerDetails.prayer}
        crossCount={prayerDetails.crossCount}
        heartCount={prayerDetails.heartCount}
        prayCount={prayerDetails.prayCount}
        churchCount={prayerDetails.churchCount}
      />
    ));
  };

  const PrayerBoxBox = ({ date, prayer, crossCount, heartCount, prayCount, churchCount }) => {
    // Functions to handle button presses
    const handlePressPray = () => {
      console.log("Pray button pressed");
      // Implement functionality to update count
    };
    const handlePressHeart = () => {
      console.log("Heart button pressed");
      // Implement functionality to update count
    };
    const handlePressCross = () => {
      console.log("Cross button pressed");
      // Implement functionality to update count
    };
    const handlePressChurch = () => {
      console.log("Church button pressed");
      // Implement functionality to update count
    };

    return (
      <View style={styles.prayerbox}>
        <Text style={styles.date}>{new Date(date).toLocaleString()}</Text>
        <Text>{prayer}</Text>
        <View style={styles.counterContainer}>
          {/* Emoji buttons */}
          <TouchableOpacity style={styles.emojiContainer} onPress={handlePressPray}>
            <Text>🙏 {prayCount}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.emojiContainer} onPress={handlePressHeart}>
            <Text>❤️ {heartCount}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.emojiContainer} onPress={handlePressCross}>
            <Text>✝️ {crossCount}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.emojiContainer} onPress={handlePressChurch}>
            <Text>⛪ {churchCount}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      {error && <Text style={{ color: 'red' }}>{error}</Text>}
      <PrayerrenderBox prayerList={prayers} />
    </SafeAreaView>
  );
};

export default PrayForOthers;
