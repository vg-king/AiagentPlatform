"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";

export default function App() {
     const { 
        data: session, 
      //  pij
    } = authClient.useSession() 

  const [email,setEmail] = useState("")
  const [name,setName] = useState("")
  const [password,setPassword] = useState("")
  const onSubmit = ()=>{
    authClient.signUp.email({
      email,
      name,
      password,
      
    },{
      onError:()=>{
        window.alert("Something went wrong!")
      },
      onSuccess:()=>{
        window.alert("Success")
      }
    })
    if (session) {
      return(
        <div className=" flex flex-col p-4 gap-y-4">
          <p>Logged in as {session.user.name}</p>
          <Button onClick={()=>authClient.signOut()}>
            signOut
          </Button>
        </div>
      )
    }
    
  }
  const onLogin = ()=>{
    authClient.signIn.email({
      email,
      password,
      
    },{
      onError:()=>{
        window.alert("Something went wrong!")
      },
      onSuccess:()=>{
        window.alert("Success")
      }
    })
    if (session) {
      return(
        <div className=" flex flex-col p-4 gap-y-4">
          <p>Logged in as {session.user.name}</p>
          <Button onClick={()=>authClient.signOut()}>
            signOut
          </Button>
        </div>
      )
    }
    
  }
  return (
    <div>

    <div className="p-4 flex flex-col gap-y-4 ">
      <Input placeholder="name" value={name} onChange={(e)=> setName(e.target.value)}></Input>
      <Input placeholder="email " value={email} onChange={(e)=> setEmail(e.target.value)}></Input>
      <Input placeholder="password"value={password} onChange={(e)=> setPassword(e.target.value)}></Input>
    <Button onClick={onSubmit}> 
      Create User
    </Button>
    </div>
    <div className="p-4 flex flex-col gap-y-4 ">
      <Input placeholder="name" value={name} onChange={(e)=> setName(e.target.value)}></Input>
      <Input placeholder="email " value={email} onChange={(e)=> setEmail(e.target.value)}></Input>
      <Input placeholder="password"value={password} onChange={(e)=> setPassword(e.target.value)}></Input>
    <Button onClick={onLogin}> 
      Login
    </Button>
    </div>
    </div>
  );
}