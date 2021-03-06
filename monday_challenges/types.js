// todays challange:

// PLAYING WITH TYPES
// JavaScript is a dynamically typed programming language. This means that you don't have to specify what kind of information a variable contains, but sometimes it's useful to know it.
// You have to implement a typing() function that takes a parameter and is able to tell the type and value of it.
// EXAMPLE:

// typing(2);    //returns number=2
// typing(true); //returns boolean=true

function typing(x) {
    return typeof(x) + '=' + x;
}


// two answers:-- the first wont always work on all types

function typing(arg) {
  return typeof(arg) + "=" + arg;
}

function typing(arg) {
  return arg.constructor.name + "=" + arg;
}

