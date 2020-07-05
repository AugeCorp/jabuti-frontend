import AsyncStorage from '@react-native-community/async-storage';
export default class Expense {
  constructor(){
    this.IncomeObject = {
      priority: '',
      description: '',
      category: '',
      type: '',
      price: 0,
      validity: '',
      payDate: '',
      paymentType: {
        cash: false,
        credit: false,
        parceledOut: false,
        installments: 1,
      }
    }
    this.array = []
  }

  async set(value){
    try {
      const jsonValue = JSON.stringify(value)
      this.array.push(jsonValue)
      await AsyncStorage.setItem('Expense', JSON.stringify({array: this.array}))
    } catch (error) {
      return error
    }
  }

  async get(){
    try {
      const jsonValue = await AsyncStorage.getItem('Expense')
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(error) {
      return error
    }
  }

  async delete(){
    try {
      await AsyncStorage.removeItem('Expense')
      return {success: true}
    } catch(error) {
      return error
    }
  }

  async merge(firstObject, secondObject){
    try {
      await AsyncStorage.setItem('Expense', JSON.stringify(firstObject))
  
      await AsyncStorage.mergeItem('Expense', JSON.stringify(secondObject))
  
      const currentExpense = await AsyncStorage.getItem('Expense')
  
      return {currentExpense}
    }catch(error){
      return error
    }
  }
}