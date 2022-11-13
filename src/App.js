
import './App.css';
import Header from './components/Headers'
import theme from "./components/theme"
import { CssBaseline, ThemeProvider } from "@mui/material"
import About from './components/About/About';
import { BrowserRouter as Router } from 'react-router-dom'
import { Portfolio } from './components/portfolio/portfolio'
import Contact from './components/Contact/Contact'
import Projects from './components/Projects/Projects';
import Test from './components/test/test';
function App() {
  return (
    <>

      <ThemeProvider theme={theme}>
        <CssBaseline></CssBaseline>
        <Router>
          <Header />
          <About></About>
          <Portfolio />
          <Projects />
          <Contact></Contact>
          {/* <Test></Test> */}
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
