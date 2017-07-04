import React from 'react';

const NUM_BUTTONS = 9;

export default function ButtonSpace(props) {
  return (
    <ul>
      <ButtonRow keys={props.keys} chords={props.chords} row={0} />
      <ButtonRow keys={props.keys} chords={props.chords} row={1} />
      <ButtonRow keys={props.keys} chords={props.chords} row={2} />
    </ul>
  );
}

function ButtonRow(props) {
  const row = props.row; // 0-indexed
  const keys = props.keys;
  const begin = row * NUM_BUTTONS;
  const end = begin + NUM_BUTTONS;
  const keyRow = keys.slice(begin, end);

  const buttons = keyRow.map(key => <ChordButton key={key} chordKey={key} chords={props.chords} />);
  return <li>{buttons}</li>;
}

function ChordButton(props) {
  let color = 'white';
  const chordKey = props.chordKey;
  const chords = props.chords;
  if (chordKey in chords && chords[chordKey]) {
    color = 'yellow';
  }

  return (
    <button
      style={{backgroundColor: color}}
    className='chordButton'>
    </button>
  );
}