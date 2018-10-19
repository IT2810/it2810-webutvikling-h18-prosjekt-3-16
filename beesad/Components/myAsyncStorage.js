import {AsyncStorage} from 'react-native';
​

export const getObjectFromAsyncStorage = (itemName) => {
  return AsyncStorage.getItem(itemName)
  .then(item => {
    if(item) JSON.parse(item)
    else {
      reject(Error('Empty result'))
    }
  ).catch(error => console.log(error))
}
​
export const setObjectInAsyncStorage = (key, value) => {
  const valueString = JSON.stringify(value)
  AsyncStorage.setItem(key, value)
  alert(valueString)

}
