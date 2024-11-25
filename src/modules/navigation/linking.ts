import * as Linking from 'expo-linking';
import { LinkingOptions } from '@react-navigation/native';
import { BottomTabParamList, RootStackParamList } from './types';
import { auth } from '../../firebase.config';

export const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL('/'), 'soulstar://'],
  config: {
    screens: {
      Login: 'login',
      BottomTabs: {
        path: 'tabs',
        screens: {
          Home: '',
          AR: 'ar/:starId?',
          Settings: 'settings',
        } as Record<keyof BottomTabParamList, string>,
      },
    },
  },
};
