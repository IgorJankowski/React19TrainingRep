import Link from "next/link"

export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/my">My Notes</Link>
        </li>
        <li>
          <Link href="/write">write a note</Link>
        </li>
        <li>
          <Link href="/teacher">teacher feed</Link>
        </li>
        <li>
          <Link href="/who-am-i">Who am I</Link>
        </li>
      </ul>
    </div>
  )
}