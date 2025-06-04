'use client'

import { useEffect, useState } from "react"
import { User } from "./[id]/page"
import Link from "next/link"

const Users = () => {
  const [users, setUsers] = useState<User[]>([])

  const fetchUsers = async () => {
    const res = await fetch('http://localhost:3000/api/users')
    const data = await res.json()
    setUsers(data.users)
    console.log(data)
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <div>
      <h1 className="text-2xl p-2">User List</h1>
      <ul>
        {users.map((user) => (
          <Link href={`/users/${user.id}`} key={user.id}>
            <li className="pl-2 text-lg mb-4">{user.firstName}</li>
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default Users