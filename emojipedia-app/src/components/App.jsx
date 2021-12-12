import React from 'react';
import Entry from './Entry';
import emojipedia from '../emojipedia.js';
import '../css/style.css';

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojipedia.map((emojiTerm) => (
          <Entry
            key={emojiTerm.id}
            emoji={emojiTerm.emoji}
            name={emojiTerm.name}
            meaning={emojiTerm.meaning}
          />
        ))}
      </dl>
    </div>
  );
}

export default App;
