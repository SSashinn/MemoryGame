import {  useState } from "react"

export default function Card(){

    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [pokedex,setPokedex] = useState([
                                {name: 'Pikachu', img: 'Pikachu.png?url', id:0},
                                {name: 'Squirtle', img: 'Squirtle.png?url', id:1},
                                {name: 'Charizard', img: 'Charizard.png?url', id:2},
                                {name: 'Snorlax', img: 'Snorlax.png?url', id:3},
                                {name: 'Rayquaza', img: 'Rayquaza.png?url', id:4},
                                {name: 'Bulbasaur', img: 'Bulbasaur.png?url', id:5},
                                {name: 'Wartortle', img: 'Wartortle.png?url', id:6},
                                {name: 'Dragonite', img: 'Dragonite.png?url', id:7},
                                {name: 'Magikarp', img: 'Magikarp.png?url', id:8},
                                {name: 'Mewtwo', img: 'Mewtwo.png?url', id:9},
                                {name: 'Xerneas', img: 'Xerneas.png?url', id:10},
                                {name: 'Ralts', img: 'Ralts.png?url', id:11},
                                {name: 'Psyduck', img: 'Psyduck.png?url', id:12},
                                {name: 'Jigglypuff', img: 'Jigglypuff.png?url', id:13},
                                {name: 'Ditto', img: 'Ditto.png?url', id:14},])

    // const [jjk,setJjk] = useState([
    //                             {name: 'Gojo', img: '/jjk/Gojo.png?url', id:0},
    //                             {name: 'Geto', img: '/jjk/Geto.png?url', id:1},
    //                             {name: 'Yuta', img: '/jjk/Yuta.webp?url', id:2},
    //                             {name: 'Yuji', img: '/jjk/Yuji.png?url', id:4},
    //                             {name: 'Sukuna', img: '/jjk/Sukuna.png?url', id:5},
    //                             {name: 'Megumi', img: '/jjk/Megumi.png?url', id:6},
    //                             {name: 'Nobara', img: '/jjk/Nobara.jpg?url', id:7},
    //                             {name: 'Todo', img: '/jjk/Todo.png?url', id:8},
    //                             {name: 'Toji', img: '/jjk/Toji.png?url', id:9},
    //                             {name: 'Nanamin', img: '/jjk/Nana.jpg?url', id:10},
    //                             {name: 'Mahito', img: '/jjk/Mahito.jpg?url', id:11},
    //                             {name: 'jogo', img: '/jjk/Jogo.jpg?url', id:12},
    //                             {name: 'Maki', img: '/jjk/Maki.jpg?url', id:13},
    //                             {name: 'Inumaki', img: '/jjk/Inumaki.png?url', id:14},
    //                             {name: 'Choso', img: '/jjk/Choso.png?url', id:15},
    //                             ]);
    const [clicked,setClicked] = useState([]);

    function updateScore(id){
            if (clicked.includes(id)){
                setScore(0);
                setClicked([]);
                score > bestScore ? setBestScore(score): null; 
            }
            else{
                setScore(s => s+1);
                setClicked([...clicked,id]);
            }
            shuffle();
        }

    // useEffect(()=>{
    //     const arrCopy = [...pokedex];
    //     for (let i = arrCopy.length - 1; i>0;i--){
    //         const j = Math.floor(Math.random() * (i+1));
    //         [arrCopy[i],arrCopy[j]] = [arrCopy[j], arrCopy[i]];
    //     }
    //     setPokedex(arrCopy);
      
    // },[score]);

    function shuffle(){
        const arrCopy = [...pokedex];
        for (let i = arrCopy.length - 1; i>0;i--){
            const j = Math.floor(Math.random() * (i+1));
            [arrCopy[i],arrCopy[j]] = [arrCopy[j], arrCopy[i]];
        }
        setPokedex(arrCopy);
    }
   
    return(
    <div className="container">
        <div className="head">
            <h1>Amphibia Memory Game</h1>
            <span><p>Score: {score}</p>
                  <p>Best Score: {bestScore}</p>  
            </span>
        </div>
        <p className="rule">Get points by clicking on an image but don&apos;t click on any more than once</p>

        <div className="cards-container" >
            {pokedex.map((element) =>{
                return (
                <div className="cards" key={element.id} onClick={() =>updateScore(element.id)}>
                    <img src={element.img}/>
                    <p>{element.name}</p>
                </div>);
            })}
        </div>

   
    </div>)
}