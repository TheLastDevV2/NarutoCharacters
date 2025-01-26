import React, { useState, useEffect } from "react"

import { Container, Header, Navigator, Logo, List, Item, Card} from "./styles.tsx";

// import Nlogo from './assets/logo.jpeg'

// import Naruto from './assets/naruto.png'

function Home(){

    const [page, setPage] = useState(1);
    const [characters, setCharacters] = useState([]);

    async function Load(currentPage: number){
        try{
            const response = await fetch(`https://narutodb.xyz/api/character?page=${currentPage}&limit=10`)
            if(!response.ok){
                throw new Error("Had a fail") 
            }
            const data = await response.json();


            setCharacters(data.characters || []);
        } catch(error){
            console.log("There's a problem with your fetch")
        }
        
      
    }
    useEffect(() => {
        Load(page);
    },[page]);
    

    function NextPage(){
        
        setPage((prevPage: number) => prevPage + 1 )
        
    };

    function BackPage(){
        setPage((prevPage: number) => prevPage > 1 ? prevPage -1 : 1); // this is to page number don't grab value 0 or below 
        Load(page);
    };

    return(
        <>
        <Header>
            <Logo  />
            <Navigator>
                <List>
                    <Item>Home</Item>
                    <Item>About</Item>
                    <Item>Contact</Item>
                </List>
            </Navigator>

        </Header>
        <Container>
            
            {characters.map(character =>(

                <Card key={character.id}>
                   <h3>{character.name}</h3>
                   <h2>{character.uniqueTraits}</h2>

                </Card>
            ))}
        </Container>

        <button onClick={() =>NextPage()}>next</button>
        <button onClick={() =>BackPage()}>back</button>
 
        </>
    )
}

export default Home;