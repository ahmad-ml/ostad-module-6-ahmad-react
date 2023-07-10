import './App.css';
import { Content } from './components/Content';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

function App() {

  return (
    <div className="app">
    <div className="app-container">
      <Header title="1st app React App" />
      <Content />
      <Footer />
    </div>
  </div>
  );

}

export default App


