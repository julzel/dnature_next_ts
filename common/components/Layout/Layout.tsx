import HeaderContainer from './Header/HeaderContainer';
import FooterContainer from './Footer/FooterContainer';

// styles
import styles from './Layout.module.scss';

interface LayoutProps {
  children: React.ReactNode;
}

interface MainProps extends LayoutProps {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <HeaderContainer />
      <MainContainer>{children}</MainContainer>
      <FooterContainer />
    </div>
  );
};

const MainContainer: React.FC<MainProps> = ({ children }) => {
  return <main>{children}</main>;
};

export default Layout;
