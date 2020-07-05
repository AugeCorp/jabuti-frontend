import AsyncStorage from '@react-native-community/async-storage';
export default class Income {
  constructor(){
    this.IncomeObject = {
      description: '',
      type: '',
      value: 0,
      receiptDate: '',
    }
    this.array = []
  }

  async set(value){
    try {
      const jsonValue = JSON.stringify(value)
      this.array.push(jsonValue)
      await AsyncStorage.setItem('Income', JSON.stringify({array: this.array}))
      
      await AsyncStorage.setItem('Income', getIncome)
    } catch (error) {
      return error
    }
  }

  async get(){
    try {
      const jsonValue = await AsyncStorage.getItem('Income')
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(error) {
      return error
    }
  }

  async delete(){
    try {
      await AsyncStorage.removeItem('Income')
      return {success: true}
    } catch(error) {
      return error
    }
  }

  async merge(firstObject, secondObject){
    try {
      await AsyncStorage.setItem('Income', JSON.stringify(firstObject))
  
      await AsyncStorage.mergeItem('Income', JSON.stringify(secondObject))
  
      const currentIncome = await AsyncStorage.getItem('Income')
  
      return {currentIncome}
    }catch(error){
      return error
    }
  }
}