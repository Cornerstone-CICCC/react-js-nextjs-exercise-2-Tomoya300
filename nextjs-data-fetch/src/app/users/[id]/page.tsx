'use client'

import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

export interface User {
  id: number,
  firstName: string,
  lastName: string,
  age: number,
  gender: string,
  email: string
}

const UserDetail = () => {
  console.log('navigated')

  const [user, setUser] = useState<User>({
    id: 0,
    firstName: '',
    lastName: '',
    age: 0,
    gender: '',
    email: ''
  })
  const { id } = useParams()
  


  useEffect(() => {
    if (!id) return

    const fetchUser = async () => {
      const res = await fetch(`http://localhost:3000/api/users/${id}`)
      const data = await res.json()
      setUser(data)
      console.log(data)
    }

    console.log(id)
    
    fetchUser()
  }, [id])
  
  return (
    <div>
      <h1>User Detail - {user.firstName}</h1>
      <p>First Name: {user.firstName}</p>
      <p>Last Name: {user.lastName}</p>
      <p>Age: {user.age}</p>
      <p>Gender: {user.gender}</p>
      <p>Email: {user.email}</p>
    </div>
  )
}

export default UserDetail