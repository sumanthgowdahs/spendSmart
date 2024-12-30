import AsyncStorage from '@react-native-async-storage/async-storage';

export const backUpData = async (method, data) => {
  const currentData =
    JSON.parse(await AsyncStorage.getItem('expenseList')) || [];
  switch (method) {
    case 'ADD':
      await AsyncStorage.setItem(
        'expenseList',
        JSON.stringify([...currentData, data]),
      );
      break;
    case 'REMOVE':
      const filteredData = currentData.filter((item, index) => {
        return index != data;
      });
      await AsyncStorage.setItem('expenseList', JSON.stringify(filteredData));
  }
};
