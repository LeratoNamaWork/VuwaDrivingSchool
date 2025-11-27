import React from 'react';
import Header from '../src/MainPages/Header';
import HomePage from '../src/MainPages/HomePage';
import Footer from '../src/MainPages/Footer';

function App() {
  return (
    <div style={styles.app}>
      <Header />
      <HomePage/>
      <Footer />
    </div>
  );
}

const styles = {
  app: {
    fontFamily: "'Arial', sans-serif",
    margin: 0,
    padding: 0,
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column'
  }
};

export default App;