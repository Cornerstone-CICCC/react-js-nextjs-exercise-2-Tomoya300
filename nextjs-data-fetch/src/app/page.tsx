import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home - My Website",
  description: "This is my homepage."
}

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis nihil tenetur dicta, nulla eveniet pariatur non voluptatum illo repellendus quis porro repudiandae eos maxime suscipit rem! Nemo deleniti molestiae cupiditate vero quidem repellat obcaecati esse maxime reiciendis ad commodi hic aspernatur consequatur, numquam eum molestias placeat consectetur accusamus odit saepe?</p>
    </div>
  )
}

export default Home