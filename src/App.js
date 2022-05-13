import './App.css';

import { useState } from 'react';

import { saveAs } from 'file-saver';

export default function App() {
  // let apiUrl =

  // const [meme, setMeme] = useState([]);

  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [memeId, setMemeId] = useState('feelsgood');
  const url = `https://api.memegen.link/images/${memeId}/${topText}/${bottomText}.png`;

  const urlBlank = `https://api.memegen.link/images/${memeId}.png`;

  function getMemeWithText() {
    saveAs(url, 'meme.png');
  }

  /* useEffect(() => {
    fetch('https://api.memegen.link/templates')
      .then((res) =>
        res.json().then((response) => {
          setMeme(response);
          console.log(response);
        }),
      )
      .catch(() => {
        console.log('error');
      });
  }, []); */

  // meme.length ?
  return (
    <div className="main">
      <h1>Meme Generator</h1>
      <div className="display">
        <div className="image-display">
          <img
            data-test-id="meme-image"
            src={!topText && !bottomText ? urlBlank : url}
            alt="meme"
          />
        </div>
        <div className="input-display">
          <div className="memeId">
            <label htmlFor="meme-id">Meme template</label>
            <div>
              <input
                id="meme-id"
                placeholder="Search for template"
                onChange={(event) => {
                  setMemeId(event.currentTarget.value);
                }}
              />{' '}
            </div>
          </div>
          <div className="top-text">
            <label htmlFor="top-text">Top text</label>
            <div>
              {' '}
              <input
                id="top-text"
                placeholder="Top text"
                value={topText}
                onChange={(event) => {
                  setTopText(event.currentTarget.value);
                  console.log(event.currentTarget.value);
                }}
              />{' '}
            </div>
          </div>
          <div className="bottom-text">
            <label htmlFor="bottom-text">Bottom text</label>
            <div>
              <input
                placeholder="Bottom text"
                id="bottom-text"
                value={bottomText}
                onChange={(event) => {
                  setBottomText(event.currentTarget.value);
                }}
              />{' '}
            </div>
          </div>
          <div className="btn-display">
            <button className="download-btn" onClick={getMemeWithText}>
              Download
            </button>

            <button
              className="reset-btn"
              onClick={() => {
                setBottomText('');
                setTopText('');
              }}
            >
              Reset
            </button>
          </div>
        </div>

        <br />
        <br />
      </div>
    </div>
  );
}
