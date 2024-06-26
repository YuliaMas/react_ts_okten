import React, {FC, ReactNode} from "react";
import styles from './CharacterSimpson.module.css';
import BtnInfo from "../btnInfo/BtnInfo";
import {ICharacter} from "../../models/ICharacter";

type IProps = { character: ICharacter }  & {children: ReactNode}

const CharacterSimpson: FC<IProps> = ({character,children}) => {
    const {name, surname,age, photo, info} = character;
    console.log(character);
    return (
        <div className={styles.dFlex}>
            <h2 className={styles.cSelf}>{name} {surname} <br/>
                <span>{age}</span></h2>
            <img src={photo} alt={name} />
            <div  id={`child${age}`} className={[styles.w50, styles.blockVisible].join(' ')}>
                <p id={`child${age}`} >{children}</p>
                <p>'HI'</p>
            </div>
            {/*<BtnInfo info={info} age={age} />*/}
            <BtnInfo info={info} age={age} />
        </div>

    )
}

export default CharacterSimpson;