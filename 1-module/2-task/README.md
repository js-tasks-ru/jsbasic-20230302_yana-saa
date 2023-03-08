# Допишите функцию валидации имени пользователя

Необходимо, чтобы на сайте можно было поприветствовать только пользователей,
которые удовлетворяют следующему условию - *имя не пустое, без пробелов, минимум 4 символа*.

```js
/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 * @param {string | null} name
 * @returns {boolean}
 */
function isValid(userName) {
  if (userName.includes(' ') && userName.length<4 && userName === null) {
    return false;
  }
  return true;
}

/**
 * Эту функцию трогать не нужно
 */
function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}

sayHello();
```


