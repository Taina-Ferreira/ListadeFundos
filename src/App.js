import Header from './components/Header';
import Legenda from './components/Legenda';
import SearchFounds from './components/SearchFounds'
import MinimumAplication from './components/MinimumAplication'
import MaximumRedemption from './components/MaximumRedemption'
import { Provider } from 'react-redux'
import  { ThemeProvider } from 'styled-components'
import './index.css' 

import theme from './Styles/globalstyles';
import store from './data';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header/>
        <Legenda/>
        <Provider store={store}>
          <SearchFounds/>
          <MinimumAplication/>
          <MaximumRedemption/>
        </Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
