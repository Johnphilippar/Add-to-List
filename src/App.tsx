import React, { useState, useEffect } from 'react';
import './App.css';
import AddToList from './components/AddToList';
import List from './components/List';



export interface IState {
  people: {
    name: string
    age: number
    url: string
    note?: string
  }[]
}

const App = () => {

  const [people, setPeople] = useState<IState["people"]>([
    {
      name: 'Monkey D. Luffy',
      age: 36,
      url: 'https://media.comicbook.com/2021/01/one-piece-wano-luffy-cosplay-1252700.jpeg?auto=webp&width=1200&height=627&crop=1200:627,smart',
      note: 'Pirate King'
    },
    {
      name: 'Kobe Bryant',
      age: 39,
      url: ''
    },
    {
      name: 'Steph Curry',
      age: 2,
      url: '',
      note: ''
    },
  ]);

  return (
    <div className="App">
      <h1>People Invited me to Party</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
