export type BottomTabParamList = {
  Home: undefined;
  AR: { starId?: string };
  Settings: undefined;
};

export type RootStackParamList = {
  Login: undefined;
  BottomTabs: {
    screen: keyof BottomTabParamList;
    params?: BottomTabParamList[keyof BottomTabParamList];
  };
};
