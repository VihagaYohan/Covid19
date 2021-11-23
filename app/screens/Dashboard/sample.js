function setUp() {
  delay(1000)
    .then(() => console.log('hello'))
    .catch(e => console.log(e));
}

function delay(time) {
  setTimeout(() => {
    sayHello();
  }, time);
}

function sayHello() {
  console.log('hello');
}
