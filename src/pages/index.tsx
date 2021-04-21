// SPA
// SSR
// SSG

import { useEffect } from "react"

export default function Home(props) {
  // Utilizando o método de SPA
  // useEffect(() => {
  //   fetch('http://localhost:3333/episodes')
  //   .then(response => response.json())
  //   .then(data => console.log(data))
  // }, [])

  return (
    // HTML dentro do JS ou TS.
    <h1>Index</h1>
  )
}

// Exemplo de SSR
// export async function getServerProps() {
//   const response = await fetch('http://localhost:3333/episodes')
//   const data = await response.json()

//   return {
//     props: {
//       episodes: data,
//     }
//   }
// }

// Exemplo de SSG
export async function getStatiProps() {
  const response = await fetch('http://localhost:3333/episodes')
  const data = await response.json()

  return {
    props: {
      episodes: data,
    },
    revalidate: 60 * 60 * 8,
  }
}
