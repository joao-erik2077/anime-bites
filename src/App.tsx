import Navbar from './components/navbar/Navbar';
import Main from './pages/main/Main';
import styles from './App.module.scss';

export default function App() {
  return <>
    <Navbar />
    <div className={styles.navbar_height}></div>
    <Main />
  </>;
}
