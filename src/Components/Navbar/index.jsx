import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import {navbar} from "../../Utils/Navbar"
import {Container, Link,  Logo, Section, Wrapper} from "./style"



export const Home = () => {
  const navigate=useNavigate()
  return (
    <Container>
        <Wrapper>
         <Section onClick={()=> navigate("/home")} logo>
          <Logo/><h3>Housing</h3>
          </Section>
         <Section>
          {navbar .map(({title, path},index)=>{
            return <Link className={({isActive})=> isActive && "active"}
            key={index} to={path}>
              {title}
              </Link>
          }
          )}
         </Section>
         <Section>
          <button>Sign In</button>
         </Section>
        </Wrapper>
        <Outlet/>
    </Container>
  )
}
export default Home;