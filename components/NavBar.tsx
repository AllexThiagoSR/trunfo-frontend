import Link from "next/link";

export default function NavBar({ route }: { route: string }) {

  const pages = [
    {
      link: '/profile/self',
      label: 'Profile'
    },
    {
      link: '/',
      label: 'Cards'
    },
    {
      link: '/',
      label: 'Decks'
    },
    {
      link: '/',
      label: 'Profiles',
    },
  ]

  return (
    <nav>
      <ul>
        {
          pages
            .filter((page) => (route !== page.link))
            .map((page, index) => (
              <li key={`${index + 1}-nav-item`}>
                <Link href={page.link}>{page.label}</Link>
              </li>
            ))
        }
      </ul>
    </nav>
  );
}