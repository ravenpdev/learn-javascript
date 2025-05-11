// JavaScript requires us to call super in the child constructor, that's obligatory. The parent constructor sets the message property.

// class CustomError extends Error {
//   constructor(message) {
//     super(message);
//     this.name = this.constructor.name;
//   }
// }

// class ValidationError extends CustomError {
//   // constructor(message) {
//   //   // The parent constructor also sets the name property to "Error"
//   //   super(message);
//   //   this.name = "ValidationError";
//   // }
// }

// class PropertyRequiredError extends ValidationError {
//   constructor(property) {
//     super("No property: " + property);
//     this.property = property;
//     // this.name = "PropertyRequiredError";
//   }
// }

// function test() {
//   throw new ValidationError("Whoops");
// }

// try {
//   test();
// } catch(err) {
//   console.log(err.name);
//   console.log(err.message);
//   console.log(err.stack);
// }

// function readUser(json) {
//   let user = JSON.parse(json);

//   if (!user.age) {
//     // throw new ValidationError("No field: age");
//     throw new PropertyRequiredError("age");
//   }

//   if (!user.name) {
//     // throw new ValidationError("No field: name");
//     throw new PropertyRequiredError("name");
//   }

//   return user;
// }

// try {
//   let user =readUser('{"age": 25}');
// } catch (err) {
//   if (err instanceof ValidationError) {
//     console.log("Invalid data: " + err.message);
//   } else if (err instanceof SyntaxError) {
//     console.log("JSON Syntax Error: " + err.message);
//   } else {
//     throw err;
//   }
// }


// Wrapping Exception

class ReadError extends Error {
  constructor(message, cause) {
    super(message);
    this.cause = cause;
    this.name = 'ReadError';
  }
}

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
  }
}
class PropertyRequiredError extends ValidationError {
  constructor(property) {
    super(`No property: ${property}`);
    this.name = 'PropertyRequiredError';
    this.property = property;
  }
}

function validateUser(user) {
  if (!user.age) {
    throw new PropertyRequiredError("age");
  }

  if (!user.name) {
    throw new PropertyRequiredError("name");
  }
}

function readUser(json) {
  let user;

  try {
    user = JSON.parse(json);
  } catch (err) {
    if (err instanceof SyntaxError) {
      throw new ReadError('Syntax Error', err);
    } else {
      throw err;
    }
  }

  try {
    validateUser(user);
  } catch (err) {
    if (err instanceof ValidationError) {
      throw new ReadError('Validation Error', err);
    } else {
      throw err;
    }
  }
}
