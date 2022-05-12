import './App.css';

import { useState } from 'react';

export default function App() {
  // let apiUrl =

  // const [meme, setMeme] = useState([]);

  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [memeId, setMemeId] = useState('aag');
  const url = `https://api.memegen.link/images/${memeId}/${topText}/${bottomText}.png`;

  const urlBlank = `https://api.memegen.link/images/${memeId}.png`;

  async function getMemeWithText() {
    const loadImages = await fetch(url);
    const arrayBuffer = await loadImages.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
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
      <div className="show-imag">
        <img
          data-test-id="meme-image"
          src={!topText && !bottomText ? urlBlank : url}
          alt="meme"
          style={{ height: 260, with: 400 }}
        />
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
      <div className="memeId">
        <label htmlFor="meme-id">Meme tamplate</label>
        <div>
          <input
            id="meme-id"
            placeholder="Search for template"
            value={memeId}
            onChange={(event) => {
              setMemeId(event.currentTarget.value);
            }}
          />{' '}
        </div>
      </div>

      <br />
      <br />
      <button onClick={getMemeWithText}>Download</button>
    </div>
  ); /*: (
    <div>
      {' '}
      <h2> Too slow!</h2>
    </div>
  ); */
}
