import React, {FC} from 'react';
import './App.css';
import CharacterSimpson from './components/characterSimpsons/CharacterSimpson';
import {ICharacter} from "./models/ICharacter";
import {simpsons} from "./components/characterSimpsons/simpsons";

const App: FC = () => {

    return (
        <div className="App">
            {/*<CharacterSimpson name={simpsons[0].name}*/}
            {/*                  age={simpsons[0].age}*/}
            {/*                  surname={simpsons[0].surname}*/}
            {/*                  photo={simpsons[0]['photo']} info={simpsons[0].info}/>*/}
            {/*<CharacterSimpson name={simpsons[1].name}*/}
            {/*                  age={simpsons[1].age}*/}
            {/*                  surname={simpsons[1].surname}*/}
            {/*                  photo={simpsons[1]['photo']} info={simpsons[1].info}/>*/}
            {/*<CharacterSimpson name={simpsons[2].name}*/}
            {/*                  age={simpsons[2].age}*/}
            {/*                  surname={simpsons[2].surname}*/}
            {/*                  photo={simpsons[2]['photo']} info={simpsons[2].info}/>*/}
            {/*<CharacterSimpson name={simpsons[3].name}*/}
            {/*                  age={simpsons[3].age}*/}
            {/*                  surname={simpsons[3].surname}*/}
            {/*                  photo={simpsons[3]['photo']} info={simpsons[3].info}/>*/}
            {
                simpsons.map((character: ICharacter, index) =>
                    <CharacterSimpson key={index}  character={character}>{character.info}</CharacterSimpson>)
            }
        </div>
    );
}

export default App;
