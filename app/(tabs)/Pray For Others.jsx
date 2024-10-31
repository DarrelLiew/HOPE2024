import { View, Text, TouchableOpacity, ScrollView, Button } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../../constants/style";
import axios from "axios";

const PrayForOthers = () => {
  const [prayers, setPrayers] = useState([]);
  const [error, setError] = useState(null);
  const [showAll, setShowAll] = useState(false); // State to track whether to show all prayers or a limited number

  const getNPrayers = async (n) => {
    try {
      const response = await axios.get(`${process.env.EXPO_PUBLIC_BACKEND_URL}/myprayers/getnprayer`, {
        params: { n }
      });
      console.log(response.data);
      setPrayers(response.data);
    } catch (error) {
      console.error("Error fetching prayers:", error);
      setError("Failed to fetch prayers.");
    }
  };

  useEffect(() => {
    if (showAll) {
      // Fetch all prayers if `showAll` is true
      getNPrayers(); // Call without `n` to get all prayers
    } else {
      // Fetch only a limited number of prayers, e.g., 5
      getNPrayers(5);
    }
  }, [showAll]);

  // Function to handle the button click to show all prayers
  const handleShowAllPrayers = () => {
    setShowAll(true);
  };

  const PrayerrenderBox = ({ prayerList }) => {
    if (!prayerList || prayerList.length === 0) {
      return <Text>No prayers found.</Text>;
    }

    return prayerList.map((prayerDetails, index) => (
      <PrayerBoxBox
        key={index}
        prayerBoxId={prayerDetails._id}
        date={prayerDetails.date}
        prayer={prayerDetails.prayer}
        crossCount={prayerDetails.crossCount}
        heartCount={prayerDetails.heartCount}
        prayCount={prayerDetails.prayCount}
        churchCount={prayerDetails.churchCount}
      />
    ));
  };

  const updateCounter = async (prayerBoxId, emoji, counter) => {
    try {
      await axios.post(`${process.env.EXPO_PUBLIC_BACKEND_URL}/myprayers/updatecounter`, { prayerBoxId, emoji, counter });
    } catch (error) {
      console.error("Error updating counter:", error);
    }
  };

  const PrayerBoxBox = ({
    date,
    prayerBoxId,
    prayer,
    crossCount,
    heartCount,
    prayCount,
    churchCount,
  }) => {
    const [prayCounter, setPrayCounter] = useState(prayCount);
    const [heartCounter, setHeartCounter] = useState(heartCount);
    const [crossCounter, setCrossCounter] = useState(crossCount);
    const [churchCounter, setChurchCounter] = useState(churchCount);

    useEffect(() => {
      if (prayCounter !== prayCount) {
        updateCounter(prayerBoxId, "pray", prayCounter);
      }
    }, [prayCounter]);

    useEffect(() => {
      if (heartCounter !== heartCount) {
        updateCounter(prayerBoxId, "heart", heartCounter);
      }
    }, [heartCounter]);

    useEffect(() => {
      if (crossCounter !== crossCount) {
        updateCounter(prayerBoxId, "cross", crossCounter);
      }
    }, [crossCounter]);

    useEffect(() => {
      if (churchCounter !== churchCount) {
        updateCounter(prayerBoxId, "church", churchCounter);
      }
    }, [churchCounter]);

    const handlePressPray = () => setPrayCounter(prev => prev + 1);
    const handlePressHeart = () => setHeartCounter(prev => prev + 1);
    const handlePressCross = () => setCrossCounter(prev => prev + 1);
    const handlePressChurch = () => setChurchCounter(prev => prev + 1);

    return (
      <View style={styles.prayerbox}>
        <Text style={styles.date}>
          {new Date(date).toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' })}
        </Text>
        <Text>{prayer}</Text>
        <View style={styles.counterContainer}>
          <TouchableOpacity style={styles.emojiContainer} onPress={handlePressPray}>
            <Text>🙏 {prayCounter}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.emojiContainer} onPress={handlePressHeart}>
            <Text>❤️ {heartCounter}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.emojiContainer} onPress={handlePressCross}>
            <Text>✝️ {crossCounter}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.emojiContainer} onPress={handlePressChurch}>
            <Text>⛪ {churchCounter}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      {error && <Text style={{ color: "red" }}>{error}</Text>}
      <ScrollView>
        <PrayerrenderBox prayerList={prayers} />
      </ScrollView>
      {/* Button to show all prayers */}
      {!showAll && (
        <TouchableOpacity style={styles.showAllButton} onPress={handleShowAllPrayers}>
          <Text style={styles.showAllButtonText}>Show All Prayers</Text>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
};

export default PrayForOthers;
