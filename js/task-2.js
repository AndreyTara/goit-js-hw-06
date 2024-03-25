/**
 * Створи клас Storage, який створюватиме об'єкти для управління складом товарів. Клас очікує лише
 * один аргумент — початковий масив товарів, який записується до створеного об'єкта в приватну властивість items.
 * Оголоси наступні методи класу:
 * getItems() — повертає масив поточних товарів у приватній властивості items.
 * addItem(newItem) — приймає новий товар newItem і додає його до масиву товарів у приватну властивість items об'єкта.
 * removeItem(itemToRemove) — приймає рядок з назвою товару itemToRemove і видаляє його з масиву товарів у приватній властивості items об'єкта.
 * Візьми код нижче з ініціалізацією екземпляра й викликами методів і встав його після оголошення класу для перевірки
 * коректності роботи. У консоль будуть виведені результати їх роботи. Будь ласка, нічого там не змінюй.
 */

/**
 * Являє собою ємність для зберігання.
 */
class Storage {
  /**
   * Створює екземпляр Storage.
   * @param {Array} arr -Ініціалізація массиву в обїекті Storage.
   */
  constructor(arr) {
    this.arr = arr;
  }
  /**
   * Повертає масив, який зберігається в об'єкті Storage.
   * @method
   * @returns {Array<String>} - Збережений масив.
   */

  getItems(arr) {
    return this.arr;
  }
  /**
   * Додає елемент у масив, який зберігається в об'єкті Storage.
   * @method
   * @param {String} newItem Новий елемент для додавання
   * @returns {Array<String>} - Оновлений масив після додавання нового елемента.
   */
  addItem(newItem) {
    return this.arr.push(newItem);
  }
  /**
   * Видаляє елемент з масиву, який зберігається в об'єкті Storage.
   * @method
   * @param {String} itemToRemove Видалення існуючого елементу з масиву в об'єкті Storage.
   * @returns {Array<String>} - Оновлений масив після видалення нового елемента.
   */
  removeItem(itemToRemove) {
    const indexDel = this.arr.findIndex(el => el === itemToRemove);
    if (indexDel === -1) {
      return console.log(`Елемент - "${itemToRemove}" не знайдено у масиві.`);
    }
    return this.arr.splice(indexDel, 1);
  }
}

console.log('Задача 2. Склад');
// У консоль будуть виведені результати її роботи.

const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem('Droid');
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem('Prolonger');
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
