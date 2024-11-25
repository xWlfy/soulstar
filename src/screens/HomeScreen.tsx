import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, Text, Button, StarCard } from '../components';
import { useStars } from '../modules/api/queries/stars';
import { optimizedList as FlashList } from '../utils/performance';
import { Star } from '../types/star';
import { useStarStore } from '../modules/stores/useStarStore';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';

export const HomeScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { data: stars, isLoading } = useStars();
  const setSelectedStar = useStarStore(state => state.setSelectedStar);

  const handleStarPress = (star: Star) => {
    setSelectedStar(star);
    navigation.navigate("AR", { star });
  };

  if (true) {
    return (
      <SafeAreaView>
        <Text variant="body">Loading stars...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView>
      <View style={{ padding: 16 }}>
        <Text variant="header">SoulStar</Text>
        <FlashList
          data={stars}
          renderItem={({ item }: { item: Star }) => (
            <StarCard star={item} onPress={handleStarPress} />
          )}
          estimatedItemSize={100}
        />
      </View>
    </SafeAreaView>
  );
};