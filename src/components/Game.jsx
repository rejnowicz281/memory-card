import { useEffect, useState } from "react";
import Portrait from "./Portrait";

import {
    portrait1,
    portrait10,
    portrait11,
    portrait12,
    portrait13,
    portrait14,
    portrait15,
    portrait2,
    portrait3,
    portrait4,
    portrait5,
    portrait6,
    portrait7,
    portrait8,
    portrait9,
} from "../assets";

export default function CardGame() {
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);

    const portraits = [
        portrait1,
        portrait2,
        portrait3,
        portrait4,
        portrait5,
        portrait6,
        portrait7,
        portrait8,
        portrait9,
        portrait10,
        portrait11,
        portrait12,
        portrait13,
        portrait14,
        portrait15,
    ];

    const [chosenPortraits, setChosenPortraits] = useState([]);
    const [currentPortraits, setCurrentPortraits] = useState(getRandomPortraits());

    function getRandomPortraits() {
        let arr = [];
        let randomPortrait;
        while (arr.length < 8) {
            randomPortrait = portraits[Math.floor(Math.random() * portraits.length)];
            if (arr.some((portrait) => portrait === randomPortrait)) continue;
            arr.push(randomPortrait);
        }
        return arr;
    }

    function randomizeCurrentPortraits() {
        setCurrentPortraits(getRandomPortraits());
    }

    function onPortraitClick(portrait) {
        if (chosenPortraits.some((chosenPortrait) => chosenPortrait === portrait)) {
            setChosenPortraits([]);
        } else {
            setChosenPortraits([...chosenPortraits, portrait]);
        }
        randomizeCurrentPortraits();
    }

    useEffect(() => {
        setScore(chosenPortraits.length);
        if (score > highScore) setHighScore(score);
    }, [chosenPortraits, score, highScore]);

    return (
        <div className="Game">
            <header>
                <h1>Stalker: The Memory Of Strelok</h1>
            </header>
            <main>
                <div className="card">
                    <Portrait portrait={currentPortraits[0]} onPortraitClick={onPortraitClick} />
                </div>
                <div className="card">
                    <Portrait portrait={currentPortraits[1]} onPortraitClick={onPortraitClick} />
                </div>
                <div className="card">
                    <Portrait portrait={currentPortraits[2]} onPortraitClick={onPortraitClick} />
                </div>
                <div className="card">
                    <Portrait portrait={currentPortraits[3]} onPortraitClick={onPortraitClick} />
                </div>
                <div className="card">
                    <Portrait portrait={currentPortraits[4]} onPortraitClick={onPortraitClick} />
                </div>
                <div className="card">
                    <Portrait portrait={currentPortraits[5]} onPortraitClick={onPortraitClick} />
                </div>
                <div className="card">
                    <Portrait portrait={currentPortraits[6]} onPortraitClick={onPortraitClick} />
                </div>
                <div className="card">
                    <Portrait portrait={currentPortraits[7]} onPortraitClick={onPortraitClick} />
                </div>
            </main>
            <footer>
                <p>Score: {score}</p>
                <p>High Score: {highScore}</p>
            </footer>
        </div>
    );
}
