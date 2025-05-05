

// type Props = {}

export default function CurrentTime() {
    const now = new Date().toLocaleDateString()
  return (
    <div>
        <p className="text-blue-500">Heure actuel : {now} </p>
    </div>
  )
}