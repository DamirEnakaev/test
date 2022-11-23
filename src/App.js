import './App.css';
import { Helmet } from 'react-helmet';

function App() {

const TITLE = 'GAY TEST'

  return (
    <div className="App">
      <Helmet>
      <title>{TITLE}</title>
      </Helmet>
      This test is supposed to help you to find yourself

    </div>
  );
}



export default App;
