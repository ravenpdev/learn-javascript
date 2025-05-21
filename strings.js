// Strings
//
// The internal format for strings is always UTF-16. it is not tied to the page encoding

// String length
// The length property has the string length:
//
// length is a numeric property, not a function.
console.log(`My\n`.length); // Note: that \n is a single "special" character. so the length is indeed 3.

// Accessing characters
//
// To get a character at position pos, use square brackets [pos] or call the method str.at(pos). The first character starts from the zero position:
{
  let str = `Hello`;
  console.log(str[0]); // H
  console.log(str.at(0)); // H

  // the last character

  console.log(str[str.length - 1]); // o

  // .at(pos) method has a benefit of allowing negative position.
  console.log(str.at(-1)); // o

  // The square brackets always return undefined for negative indexes
  console.log(str[-2]); // undefined
  console.log(str.at(-2)); // l
}

// We can also iterate over characters using for..of:
for (let char of "Hello") {
  console.log("%s", char);
}

// for (let char in "Hello") {
//   console.log('%s', char);
// }

// Strings are immutable
{
  let str = "Hi";
  // str[0] = "h"; // error
  console.log("this should not be working", str[0]); // Doesn't work
}
// The usual workaround is to create a whoe new string and assign it to str instead of the old one.
{
  let str = "Hi";
  str = "h" + str[1]; // replace the string
  console.log(str);
}

// Changing the case
{
  console.log("Interface".toUpperCase());
  console.log("Interface".toLowerCase());

  const capitalize = (...words) => {
    return words.map((w) => {
      if (typeof w !== "string") {
        return w;
      }
      return w.at(0).toLocaleUpperCase() + w.slice(1);
    });
  };

  let names = ["raven", "kristine", "iya", "elia", 1234];
  names = capitalize(...names);
  console.log(names);
  names = capitalize("january", "february", "march");
  console.log(names);
}

// Searching for a substring
//
// There are multiple ways to look for a substring withingn a string.
//
// str.indexOf(substr, pos)
// it looks for the substr in str, starting from the given position pos, and returns the position where the match was found or -1 if nothing can be found.
{
  let str = "Widget with id";
  console.log(str.indexOf("Widget")); // 0 because 'Widget' is found at the beginnning
  console.log(str.indexOf("widget")); // -1, not found, the serach is case-sensitive

  console.log(str.indexOf("id")); // 1, "id" is found at the position 1 (..idget with id)

  // The optional second parameter allows us to start searching from a given position.
  console.log(str.indexOf("id", 2)); // 12

  // There is a slight incovenience with indexOf in the if test. We can't put it in the if like this:
  //
  // if considers 0 to be false.
  if (str.indexOf("Widget")) {
    console.log("We found it");
  }

  if (str.indexOf("Widget") != -1) {
    console.log("This works!");
  }
}

// includes, startsWith, endsWith
{
  console.log("Widget with id".includes("Widget")); // true
  console.log("Hello".includes("Bye")); // false

  console.log("Widget".includes("id")); // true
  console.log("Widget".includes("id", 3)); // false

  console.log("Widget".startsWith("Wid")); // true
  console.log("Widget".endsWith("get")); // true
}

// Getting substring
{
  let str = "stringify";
  console.log(str.slice(0, 5)); // strin, the substring from 0 to 5 (not including 5)
  console.log(str.slice(0, 1)); // s, from 0 to 1, but not including 1

  // If there is no second argument, then slice goes till the end of the string:
  console.log(str.slice(2)); // ringify

  // str.substring(start [, end])
  // returns the part of the string between start and end (not including end).
  // this is almost the same as slice, but it allows start to be greater than end (in this case it simply swaps start and end values).
}

// Comparing strings
// strings are compared character-by-character in alphabetical order.

{
  // 1. A lowercase letter is always greater than the uppercase:
  console.log("a" > "Z"); // true
  // 2. Letter with diacritical marks are "out of order":
  console.log("Österreich" > "Zealand");
  // This may lead to strange result if we sort these country names, Usually people would expect Zealand to come after 'Österreich' in the list.

  // To understand what happens, we should be aware that strings in JavaScript are encoded using UTF-16. That is: each character has a corresponding numeric code.

  // There are special methods that allow to get the character for the code and back.

  // str.codePointAt(pos)
  // return a decimal number representing the code for the character at position pos:
  console.log("Z".codePointAt(0)); // 90
  console.log("z".codePointAt(0)); // 122
  console.log("z".codePointAt(0).toString(16)); // 7a

  // String.fromCodePoint(code)
  // creates a character by its numeric code
  console.log(String.fromCodePoint(90)); // z
  console.log(String.fromCodePoint(0x5a)); // Z
}

{
  let str = "";
  for (let i = 65; i <= 220; i++) {
    str += String.fromCodePoint(i);
  }
  console.log(str);

  // See? capital characters go first, then a few special ones, then lowercase characters, and  Ö near the end of the output.
  //
  // Now it becomes obvious why a > Z.
  //
  // The characters are compared by their numeric code. The greater code means that the character is greater. The code for a (97) is greater than the code for Z (90).
  //
  // All lowercase letters go after uppercase letters because their codes are greater
  // Some letters like Ö stand apart from the main alphabet. Here, its code is greater than anything from a to z.
}

// Correct comparisons
//
// The call str.localeCompare(str2) returns an integer indicating whether str is less, equal or greater than str2 according to the language rules:
//
// 1. Returns a negative number if str is less than str2.
// 2. Returns a positive number if str is greater than str2.
// 3. Returns 0 if they are equivalent.
{
  console.log("Österreich".localeCompare("Zealand"));
}

// There are serveral other helpful methods in strings:
{
  console.log("   hello    ".trim());
  console.log("*".repeat(5));
}

// Tasks

/**
 * @param {string} word
 */
function ucFirst(word) {
  if (!word) {
    return;
  }

  return word.at(0).toUpperCase() + word.slice(1);
}

// write a fuction ucFirst(str) that returns the string str with the uppercased first character
{
  console.log(ucFirst("raven") === "Raven");
  console.log(ucFirst("") === "something");
}

/**
 * @param {string} word
 *
 * @return {bool}
 */
function checkSpam(word) {
  return word.toLocaleLowerCase().includes("viagra") || word.toLocaleLowerCase().includes("xxx");
}
// Check for spam
// write a function checkSpam(str) that returns true if str contains `viagra` or `xxx`, otherwise false
{
  console.log(checkSpam("buy ViAgRA now"));
  console.log(checkSpam("free xxxxx"));
  console.log(checkSpam("innocent rabbit"));
}

/**
 * @param {string} value
 * @param {number} maxLength
 */
function truncate(value, maxLength) {
  if (value.length > maxLength) {
    return value.slice(0, maxLength - 1) + "\u2026";
  }

  return value;
}

// create a function truncate(str, maxLength) that checks the length of the str and, if it exceeds maxLength - replaces the end of str with the ellipsis character "...", to make its length equal to maxLength.
{
  const result = truncate("What I'd like to tell on this topic is: ", 20);
  console.log(result);
  console.log(result.length);
  console.log(truncate("Hi everyone!", 20));
}

/**
 * @param {string} value
 *
 * @return {number}
 */
function extractCurrencyValue(value) {
  if (isFinite(value.at(0))) {
    return parseInt(value);
  }

  return parseInt(value.slice(1));
}
// Extract the money.
// We have a cost in the form "$120". That is: the dollar sign goes first, and then the number.
//
// Create a function extractCurrencyValue(str) that would extract the numeric value from such string and return it.
{
  console.log(extractCurrencyValue("$120"));
}
