import { Header } from './Header';
import { Content } from './Content';
import { DrawerMenu } from './DrawerMenu';
import { useState } from 'react';

export const Layout = ({ children }) => {
  const [showDrawerMenu, setShowDrawerMenu] = useState(false);

  const canShowMenu = () => {
    return showDrawerMenu && <DrawerMenu show={setShowDrawerMenu} />;
  };

  return (
    <>
      <Header active={setShowDrawerMenu} />
      {canShowMenu()}
      <Content>{children}</Content>
    </>
  );
};
