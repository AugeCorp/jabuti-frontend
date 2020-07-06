import AsyncStorage from '@react-native-community/async-storage';
export default class User {
  constructor(){
    this.UserObject = {
      email: '',
      password: '',
      token: '',
      name: '',

      isActive: true,
      Accesses: {
        lastAccess: '',
        allAccesses: []
      },
      googleAccount: false
    }
  }

  async set(value){
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('User', jsonValue)
    } catch (error) {
      return error
    }
  }

  async get(){
    try {
      const jsonValue = await AsyncStorage.getItem('User')
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(error) {
      return error
    }
  }

  async delete(){
    try {
      await AsyncStorage.removeItem('User')
      return {success: true}
    } catch(error) {
      return error
    }
  }

  async merge(firstObject, secondObject){
    try {
      await AsyncStorage.setItem('User', JSON.stringify(firstObject))
  
      await AsyncStorage.mergeItem('User', JSON.stringify(secondObject))
  
      const currentUser = await AsyncStorage.getItem('User')
  
      return {currentUser}
    }catch(error){
      return error
    }
  }
}