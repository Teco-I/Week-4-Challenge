const fetch = require('node-fetch');

const source_options = {
  1: 'al-jazeera-english',
  2: 'bbc-news',
  3: 'cnn',
  4: 'abc-news'
};
// Get process.stdin as the standard input object.
var standard_input = process.stdin;

// Set input character encoding.
standard_input.setEncoding('utf-8');

console.log('\nNews Source Options\n', source_options);

// Prompt user to input data in console.
console.log('Please input your option. (Should be between 1-4)');

// When user input data and click enter key.
standard_input.on('data', data => {
  // User input exit.
  if (data === 'exit\n') {
    // Program exit.
    console.log('Program exited.');
    process.exit();
  } else {
    let option = parseInt(data, 10);
    if (Number.isNaN(option)) {
      console.log('Please enter a number between 1 - 4');
    } else {
      const url = `https://newsapi.org/v2/top-headlines?sources=${source_options[option]}&pageSize=10&apiKey=2f182cd8a2df44068a6664253e88c5ba`;

      fetch(url)
        .then(res => res.json())
        .then(json => console.log(json));
    }
  }
});
