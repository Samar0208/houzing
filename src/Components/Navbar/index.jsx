

import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import {navbar} from "../../Utils/Navbar"
import {Container, Link,  Logo, Main, Section, Wrapper} from "./style"
import Button from '../Generic/Button'


export const Home = () => {
  const navigate=useNavigate()
  return (
    <Container>
      <Main>


        <Wrapper>
         <Section onClick={()=> navigate("/home")} logo>
          <Logo/><h3>Housing</h3>
          </Section>
         <Section>
          {navbar .map(({title, path, hidden},index)=>{
            return (
            !hidden && (
            <Link className={({isActive})=> isActive && "active"}
            key={index} to={path}>
              {title}
              </Link>
              )
          );
          }
          )}
         </Section>
         <Section>
        <Button onClick={()=> navigate("/signin")} type={"dark"}>Sign In</Button>
         </Section>
        </Wrapper>
        </Main>
        <Outlet/>
    </Container>
  )
}
export default Home;