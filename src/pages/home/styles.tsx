import styled from "styled-components";
import backgroundImage from './assets/back.jpg';
import logo from './assets/logo.jpeg';


export const Container = styled.div`
    background-image: url(${backgroundImage});
    background-size: cover;
    background-position: 50% 50%;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    color: #fff;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    box-sizing: border-box;
    margin: 0px -20px;

`

export const Header = styled.div`
    width: 75%;
    margin: 10px 0;
    height: 80px;
    background-color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-around;
    min-width: 220px;
  

`
export const Logo = styled.div`
    width: 140px;
    height: 100px;
    background-image: url(${logo});
    background-size: cover  ;
 
`

export const Navigator = styled.nav`
    min-width: 200px;
    width: 50%;
    height: 65px;
  

`

export const List = styled.ul`
    width: 80%;
    min-width: 250px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

export const Item = styled.li`
    width: 25%;
    min-width: 40px;
    list-style: none;
    color: #fff;



`


export const Card = styled.div`
  box-sizing: border-box;
  width: 50%;
  margin-bottom: 20px;
  padding: 0px 20px;
  
  `

export const Content = styled.div`
    color: #242424;
  background-color: #1bbefe;
  font-weight: 600;
  text-align: center;
  box-sizing: border-box;
  height: 100%;
  padding: 10px;

`