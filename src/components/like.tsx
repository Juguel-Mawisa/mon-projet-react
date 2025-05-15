import { useState } from 'react'

type Props = {}

export default function LikeButton({}: Props) {
    const [liked, setLiked ] = useState(false)
  return (
    <button
    onClick={() => setLiked(!liked)}
    className="bg-amber-500 text-white px-4 py-2 rounded mt-2 mb-2"
  >
    {liked ? "❤️ Liké" : "🤍 Like"}
  </button>
  )
}