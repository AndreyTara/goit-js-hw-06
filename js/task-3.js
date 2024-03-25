/**
 * Напиши клас StringBuilder, який приймає один параметр initialValue — довільний рядок,
 * який записується у приватну властивість value об'єкта, що створюється.
 * Оголоси наступні методи класу:
 * getValue() — повертає поточне значення приватної властивості value.
 * padEnd(str) — отримує параметр str (рядок) і додає його в кінець значення приватної
 * властивості value об'єкта, який викликає цей метод.
 * padStart(str) — отримує параметр str (рядок) і додає його на початок значення приватної
 *  властивості value об'єкта, який викликає цей метод.
 * padBoth(str) — отримує параметр str (рядок) і додає його на початок і в кінець значення
 * приватної властивості value об'єкта, який викликає цей метод.
 * Візьми код нижче з ініціалізацією екземпляра й викликами методів і встав його після
 * оголошення класу для перевірки коректності роботи. У консоль будуть виведені результати
 * їх роботи. Будь ласка, нічого там не змінюй.
 */

class StringBuilder {
  // ініціалізація змінної StringBuilder.
  #value;
  /**
   * Створює екземпляр StringBuilder.
   * @param {String} initialValue -Ініціалізація сроки в обїекті StringBuilder.
   */
  constructor(initialValue) {
    this.#value = initialValue;
  }
  /**
   * Повертає поточну строку, яка зберігається в об'єкті StringBuilder.
   * @method
   * @returns {String} - Збережена строчка.
   */
  getValue() {
    return this.#value;
  }
  /**
   * Повертає додату Str на початоку строки, яка зберігається в об'єкті StringBuilder.
   * @method
   * @param {String} str - Новий елемент для додавання.
   * @returns {String} - Збережена строчка.
   */
  padEnd(str) {
    return (this.#value += str);
  }
  /**
   * Повертає додату Str на кінець строки, яка зберігається в об'єкті StringBuilder.
   * @method
   * @param {String} str - Новий елемент для додавання.
   * @returns {String} - Збережена строчка.
   */
  padStart(str) {
    return (this.#value = str + this.#value);
  }
  /**
   * Повертає додату Str на кінець та початок строки, яка зберігається в об'єкті StringBuilder.
   * @method
   * @param {String} str - Новий елемент для додавання.
   * @returns {String} - Збережена строчка.
   */
  padBoth(str) {
    return (this.#value = str + this.#value + str);
  }
}

console.log('Задача 3. Конструктор рядків');
// У консоль будуть виведені результати її роботи.

const builder = new StringBuilder('.');
console.log(builder.getValue()); // "."
builder.padStart('^');
console.log(builder.getValue()); // "^."
builder.padEnd('^');
console.log(builder.getValue()); // "^.^"
builder.padBoth('=');
console.log(builder.getValue()); // "=^.^="