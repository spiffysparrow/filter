# Huckberry Candidate Exercise

This exercise will get a basic Webpack development environment set up so you can
easily start writing React in ES6. Hot loading is set up, so you do no need to
refresh the browser while editing JS or CSS files.

As you are working on the exercise, feel free to add dependencies needed to
complete the work.

To get data, we've simlulated a preloaded result of products that are available
at `window.Data.products`.

## Instructions

You will be building a simple tool to list a group of products and allow user to
filter this list by properties of the products.

1. When no filters are active, the user should see all products. Each product should
have its name, brand, image, and price displayed.
2. The user should see UI for filtering the products by their color. The options
for the users to choose should be limited by the colors that are available on products.
3. The user should see UI for filtering the products by their price. The options
for this filter should be "Less than $50", "$50 to $100", and "Over $100". You may
assume we don't have products that are exactly 50 or 100 dollars.
4. The user may only have one filter from the "Color" filter and "Price" filter active
at a given time. If they have both a "Color" and "Price" filter active at the same time,
they should see the products that match _both_ filters.
5. The user may clear the "Color" and "Price" filter independently.
6. If no products match the user's filters, a message should be displayed to the
user to this effect.

## Setup

### System Dependencies

You will need the latest versions of:

* Node.js
* Chrome
  * We used Chrome to set up the project and will primarily be using Chrome
    to test your work.

### Install

1. `git clone https://github.com/Huckberry/frontend-exercise`
2. `cd frontend-exercise`
3. `npm install`

### Working

1. `npm start`
2. Navigate your browser to [http://localhost:8080](http://localhost:8080)
3. The server will reload

## Submission

Please commit your work, then archive ZIP, Tarball, whatever, the entire directory
and email to [evan@huckberry.com](evan@huckberry.com).

## Evaluation

We will essentially be running `npm install`, `npm start`, then navigating to
localhost:8080 to evaluate the output of your work. Please note any required
changes in the README.

## Contributing

If you have any feedback on the exercise, would like to suggest changes, or have
problems setting it up on your environment, please create an issue on the project's
Github page.
