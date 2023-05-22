import { Button, Navbar } from 'flowbite-react';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const links = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Portfolio',
    href: '/portfolio',
  },
  {
    name: 'Templates',
    href: '/templates',
  },
  {
    name: 'Events',
    href: '/events',
  },
  {
    name: 'Analytics',
    href: '/analytics',
  },
];

const Header = () => {
  const router = useRouter();
  // const [mode, , toggleMode] = useThemeMode();
  const { status } = useSession();

  return (
    <header>
      <Navbar>
        <Navbar.Brand href="/">
          <span className="self-center whitespace-nowrap text-xl font-semibold">
            BudgetConnect
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          {/* <DarkThemeToggle
            onClick={() => {
              toggleMode();
              if (mode === 'dark') {
                localStorage.setItem('theme', 'light');
              } else {
                localStorage.setItem('theme', 'dark');
              }
            }}
          /> */}
          <Button
            className="ml-2"
            color="dark"
            onClick={() => {
              if (status === 'authenticated') {
                signOut();
              } else {
                signIn();
              }
            }}
          >
            {status === 'authenticated' ? 'Logout' : 'Login'}
          </Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          {links.map((link) => (
            <Navbar.Link
              key={link.name}
              href={link.href}
              active={router.pathname === link.href}
            >
              {link.name}
            </Navbar.Link>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
