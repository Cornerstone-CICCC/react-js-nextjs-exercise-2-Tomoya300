import { User } from "@/app/users/[id]/page";
import Link from "next/link";

type Props = {
  params: { id: string }
}

const page = async({ params }: Props) => {
  const { id } = await params
  const res = await fetch(`https://dummyjson.com/users/${id}`)
  const data: User = await res.json()

  return (
    <div className="w-screen h-screen bg-black/70 fixed top-0 left-0 flex items-center justify-center">
      <div className="bg-white p-4 w-1/3 rounded-md text-black">
        <h2>User</h2>
        <p>ID: {data.id}</p>
        <p>First Name: {data.firstName}</p>
        <p>Last Name: {data.lastName}</p>
        <div>
          <Link href='/users' className="border rounded-lg px-2 py-1">Close</Link>
          <a href={`/users/${id}`} className="border rounded-lg px-2 py-1">View Detail</a>
        </div>
      </div>
    </div>
  )
}

export default page