import React, { Suspense } from 'react'
import Header from './components/Header'
import Legenda from './components/Legenda'
import { Provider } from 'react-redux'
import styled,{ ThemeProvider } from 'styled-components'

import theme from './Styles/globalstyles'
import store from './data';

import FilterGroup from './components/Filters/FilterGroup'
import FilterStrategies from './components/Filters/FilterStrategies'

const TableFunds = React.lazy(() => import('./components/TableFunds'))

const Container = styled.div`
`;

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <div className="grid-container full">
          <Header/>
        </div>
        <div className="grid-container">
          <div className="grid-x grid-margin-x">
            <Container className="cell large-9 medium-12 small-12">
              <Legenda/>
            </Container>
          </div>
          <Provider store={store}>
            <div className="grid-x grid-margin-x">
              <Container className="cell large-9 medium-12 small-12">
                <div style={{paddingBottom: "10px"}}>
                  <FilterGroup/>
                </div>
                <Suspense fallback={<div>loading..</div>}>
                  <section>
                    <TableFunds/>
                  </section>
                </Suspense>
              </Container>
              <Container className="cell large-3 medium-12 small-12 show-for-large">
                <FilterStrategies/>
              </Container>
            </div>
          </Provider>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;