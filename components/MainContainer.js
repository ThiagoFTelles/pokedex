import NavBar from './NavBar';
import Footer from './Footer';

export default function MainContainer({ children }) {
  return (
    <>
      <NavBar />
      <div>{children}</div>
      <Footer />
    </>
  );
}
