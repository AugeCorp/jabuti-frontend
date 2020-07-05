import AsyncStorage from '@react-native-community/async-storage';
export default class Goals {
  constructor(){
    this.GoalsObject = {
      description: '',
      category: '',
      price: '',
      conquestDate: '',
    }
    this.array = []
  }

  async set(value){
    try {
      const jsonValue = JSON.stringify(value)
      this.array.push(jsonValue)
      await AsyncStorage.setItem('Goals', JSON.stringify({array: this.array}))
    } catch (error) {
      return error
    }
  }

  async get(){
    try {
      const jsonValue = await AsyncStorage.getItem('Goals')
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(error) {
      return error
    }
  }

  async delete(){
    try {
      await AsyncStorage.removeItem('Goals')
      return {success: true}
    } catch(error) {
      return error
    }
  }

  async merge(firstObject, secondObject){
    try {
      await AsyncStorage.setItem('Goals', JSON.stringify(firstObject))
  
      await AsyncStorage.mergeItem('Goals', JSON.stringify(secondObject))
  
      const currentGoals = await AsyncStorage.getItem('Goals')
  
      return {currentGoals}
    }catch(error){
      return error
    }
  }
}