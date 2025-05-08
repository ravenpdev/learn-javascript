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
