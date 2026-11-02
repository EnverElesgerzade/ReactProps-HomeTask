import React from 'react'
import StudentCard from './components/StudentCard/StudentCard';

const App = () => {
let students = [
    {
        id: 1,
        name: "Cristiano",
        surname: "Ronaldo",
        bal: 99,
        img: "https://media.api-sports.io/football/players/874.png"
    },
    {
        id: 2,
        name: "Ashraf",
        surname: "Hakimi",
        bal: 70,
        img: "https://media.api-sports.io/football/players/9.png"
    },
    {
        id: 3,
        name: "Karim",
        surname: "Benzema",
        bal: 62,
        img: "https://media.api-sports.io/football/players/759.png"
    },
    {
        id: 4,
        name: "Kylian",
        surname: "Mbappé",
        bal: 52,
        img: "https://media.api-sports.io/football/players/278.png"
    },
    {
        id: 5,
        name: "Lionel",
        surname: "Messi",
        bal: 2,
        img: "https://media.api-sports.io/football/players/154.png"
    },
    {
        id: 6,
        name: "Neymar",
        surname: "Júnior",
        bal: 22,
        img: "https://media.api-sports.io/football/players/276.png"
    },
    {
        id: 7,
        name: "Olivier",
        surname: "Giroud",
        bal: 41,
        img: "https://media.api-sports.io/football/players/2295.png"
    }
];
  return (
    <div>
      <StudentCard students={students} />
    </div>
  )
}

export default App