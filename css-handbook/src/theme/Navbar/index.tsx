import type {ReactNode} from 'react';
import {useLocation} from '@docusaurus/router';
import Navbar from '@theme-original/Navbar';

const hiddenNavbarRoutes = new Set(['/', '/index.html']);

export default function NavbarWrapper(): ReactNode {
  const {pathname} = useLocation();

  if (hiddenNavbarRoutes.has(pathname)) {
    return null;
  }

  return <Navbar />;
}
