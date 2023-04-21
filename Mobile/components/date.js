import { DatePickerAndroid } from 'react-native';

// ...

const openDatePicker = async () => {
  try {
    const { action, year, month, day } = await DatePickerAndroid.open({
      date: new Date(),
      mode: 'spinner',
    });
    if (action !== DatePickerAndroid.dismissedAction) {
      // Use the selected date
      const selectedDate = new Date(year, month, day);
      console.log('Selected date:', selectedDate);
    }
  } catch ({ code, message }) {
    console.warn('Cannot open date picker', message);
  }
};
