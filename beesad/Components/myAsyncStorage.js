import {AsyncStorage} from 'react-native';
​
//This is a more elegant solution for AsyncStorage across several Components, implementation errors left it unused.
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
