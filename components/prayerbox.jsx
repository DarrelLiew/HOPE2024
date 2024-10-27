import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { StyleSheet } from 'react-native';
import styles from '../constants/style';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'I pray for external peace. I pray for the priest and the fellow confirmants',
    date: "14/6/2024 - Monday"
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    date: "13/6/2024 - Tuesday"
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    date: "12/6/2024 - Wednesday"
  },
  // More items...
];

const Item = ({ title, date, emojiCounts, onPressEmoji }) => (
  <View style={styles.prayerbox}>
    <Text style={styles.date}>{date}</Text>
    <Text >{title}</Text>
    {/* Emoji Counter at the bottom */}
    <View style={styles.counterContainer}>
      {/* Map over the emojiCounts array to render each emoji with its count */}
      {emojiCounts.map((count, index) => (
        <TouchableOpacity key={index} onPress={() => onPressEmoji(index)}>
          <View style={styles.emojiContainer}>
            <Text style={styles.emoji}>{getEmojiByIndex(index)} {count}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  </View>
);

const getEmojiByIndex = (index) => {
  const emojis = ['✝️', '❤️', '🙏', '⛪']; // Add more emojis here if needed
  return emojis[index] || '👍'; // Default to thumbs up if index exceeds emojis array
};

export default function Prayerbox() {
  // State to track counts for each emoji in each item
  const initialEmojiCounts = DATA.map(() => Array(4).fill(0)); // 4 emojis per item
  const [counts, setCounts] = useState(initialEmojiCounts);

  // Function to increment the count for a specific emoji index
  const incrementEmojiCount = (itemIndex, emojiIndex) => {
    const newCounts = [...counts];
    newCounts[itemIndex][emojiIndex] += 1;
    setCounts(newCounts);
  };

  return (
    <FlatList
      data={DATA}
      renderItem={({ item, index }) => (
        <Item
          date= {item.date}
          title={item.title}
          emojiCounts={counts[index]}
          onPressEmoji={(emojiIndex) => incrementEmojiCount(index, emojiIndex)}
        />
      )}
      keyExtractor={(item) => item.id}
    />
  );
}
