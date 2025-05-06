

type EmojiMessageProps = {
    emoji: string;
  message: string;
}

export default function EmojiMessage({emoji,message}: EmojiMessageProps) {
  return (
    <p>
        {emoji} {message}
    </p>
  )
}