import React from "react"
import { Container, Header, Navigator, Logo, List, Item} from "./styles.tsx";

// import Nlogo from './assets/logo.jpeg'

import Naruto from './assets/naruto.png'

function Home(){
    let page = 1
    
    async function Load(){
        fetch(`https://narutodb.xyz/api/character?page=${page}&limit=10`)
        .then(response => {
            if(!response){
                throw new Error("Had a fail") 
            }
            return response.json();
    
        })
        .then(data => {
            console.log(data)
        })
        .catch(error => {
            console.error("There's a problem with your fetch")
        })
    }
    Load()

    function NextPage(){
        
        page++
        fetch(`https://narutodb.xyz/api/character?page=${page}&limit=10`)
        .then(response => {
            if(!response){
                throw new Error("Had a fail") 
            }
            return response.json();
    
        })
        .then(data => {
            console.log(data)
        })
        .catch(error => {
            console.error("There's a problem with your fetch")
        })
    }

    function BackPage(){
        page > 1 ? page-- : page = 1; // this is to page number don't grab value 0 or below
        
        fetch(`https://narutodb.xyz/api/character?page=${page}&limit=10`)
        .then(response => {
            if(!response){
                throw new Error("Had a fail") 
            }
            return response.json();
    
        })
        .then(data => {
            console.log(data)
        })
        .catch(error => {
            console.error("There's a problem with your fetch")
        })
    }


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
            <img src={Naruto} alt="" /> 
        </Container>

        <button onClick={() =>NextPage()}>next</button>
        <button onClick={() =>BackPage()}>back</button>
 
        </>
    )
}

export default Home;