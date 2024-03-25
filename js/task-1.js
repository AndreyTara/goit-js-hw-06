/**
 * Об'єкт, що представляє клієнта.
 * @typedef {Object} customer
 * @property {String} username - Ім'я користувача клієнта.
 * @property {Number} balance - Баланс клієнта.
 * @property {Number} discount - Знижка для клієнта в десятковому форматі (наприклад, 0.1 для 10%).
 * @property {Array[Element(String)]} orders - Масив замовлень клієнта.
 */

const customer = {
  username: 'Mango',
  balance: 24000,
  discount: 0.1,
  orders: ['Burger', 'Pizza', 'Salad'],
  // Change code below this line

  /**
   * Повертає поточний баланс клієнта.
   * @method
   * @returns {Number} - Поточний баланс.
   */
  getBalance() {
    return this.balance;
  },
  /**
   * Повертає поточну знижку клієнта.
   * @method
   * @returns {Number} - Поточна знижка в десятковому форматі.
   */
  getDiscount() {
    return this.discount;
  },
  /**
   * Задає нове значення знижки для клієнта.
   * @method
   * @param {Number} value - Нове значення знижки в десятковому форматі.
   */
  setDiscount(value) {
    this.discount = value;
  },
  /**
   * Повертає масив замовлень клієнта.
   * @method
   * @returns {Array[Element(String)]} Масив замовлень.
   */
  getOrders() {
    return this.orders;
  },
  /**
   * Додає нове замовлення та зменшує баланс клієнта відповідно до вартості та поточної знижки.
   * @method
   * @param {Number} cost - Вартість нового замовлення.
   * @param {String} order - Назва нового замовлення.
   */
  addOrder(cost, order) {
    this.balance = this.balance - cost - cost * this.discount;
    this.orders.push(order);
  },

  // Change code above this line
};

console.log('Задача 1. Акаунт користувача');
// У консоль будуть виведені результати її роботи.

customer.setDiscount(0.15);
console.log(customer.getDiscount()); // 0.15
customer.addOrder(5000, 'Steak');
console.log(customer.getBalance()); // 19750
console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]
