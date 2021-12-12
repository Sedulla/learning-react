import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import emojipedia from './emojipedia';

ReactDOM.render(<App />, document.getElementById('root'));

const newEmojipedia = emojipedia.map(function (emojiEntry) {
  return emojiEntry.meaning.substring(0, 100);
});

console.log(newEmojipedia);
