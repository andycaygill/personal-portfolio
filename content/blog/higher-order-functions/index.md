---
path: "/blog/higher-order-functions"
date: "2019-05-04"
title: "Higher Order Functions in JavaScript"
---

# Higher Order Functions in JavaScript

## What is a higher order function

Put simply, a higher order function is just a regular function that either: takes in one or more functions as parameters, or returns a function. This concept doesn't sound like much at first but it's actually a very powerful tool in writing clean, reusable code.

## Why are higher order functions useful

- reuse functionality

## History

- Where the idea comes from etc. (functional programming)

## Examples in Javascript

JavaScript provides some higher order functions built in to the language which are a great example of why they are so useful. The map, forEach, reduce methods are some examples of these.

### Example of a map() function in use

In the example below, we have an array of years, and we want to find out how long each year is from now. So we want to create a function that takes in an array of years, and returns a new array with the time difference.

Before we do this using any higher order functions, lets have a look at what it would look like without it:

#### Without Highter Order Functions:

```javascript
const dates = [1911, 1952, 1938]
const currentYear = new Date().getFullYear()

const timeFromNow = []
for (let i = 0; i < dates.length; i++) {
  timeFromNow.push(currentYear - currentdates[i])
}
```

#### With Highter Order Functions:

Now lets take a look at how we could write the same code using one of JavaScripts built-in higher order functions, in this case, `map()`;

The map function takes in a function as it's first parameter, meaning it qualifies as a higher order function.

```javascript
const dates = [1911, 1952, 1938]
const currentYear = new Date().getFullYear()
const timeFromNow = dates.map(date => currentYear - date)
```

## Writing our own higher order function

## Higher order functions VS higher order components ?

- Description of higher order components in React, comparison etc
