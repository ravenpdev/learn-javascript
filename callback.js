function checkAge(age, good, bad) {
  if (age < 18) {
    bad(age);
  } else {
    good(age);
  }
}

checkAge(
  18,
  age => console.log(`You ared allowed age: ${age}`),
  age => console.log(`You are a minor, return when you are 18, age: ${age}`)
);
checkAge(
  "hello",
  age => console.log(`You ared allowed age: ${age}`),
  age => console.log(`You are a minor, return when you are 18, age: ${age}`)
);


function loadScript(src, callback) {
    if (src) {
    callback(null, src);
  } else {
    callback(new Error('Woopsie'), src);
  }
}

loadScript('something', (err, src) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`the src: ${src}`);

    loadScript('anotherScript', (err, src) => {
        if (err) {
          console.log(err);
        } else {
          console.log(`the src: ${src}`);
        }
    });
  }
});
