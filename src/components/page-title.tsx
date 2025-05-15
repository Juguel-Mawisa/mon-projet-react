import { useEffect, useState } from 'react'

type Props = {}

export default function PageTitle({}: Props) {
    const [count, setCount] = useState(0)

    useEffect(() => {
    document.title = `Clics : ${count}`;
  }, [count]); // ← useEffect se déclenche quand count change
   return (
    <button onClick={() => setCount(count + 1)}>
      Tu as cliqué {count} fois
    </button>
  );
}