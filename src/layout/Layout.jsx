import { Header } from './Header';
import { Content } from './Content';

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Content>{children}</Content>
    </>
  );
};
