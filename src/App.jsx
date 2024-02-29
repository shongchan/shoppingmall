import Header, { ContentsContainer, ContentsWrap, MainContainer } from './components/common/Header';
import Footer from './components/common/Footer';
import ProductList from './components/ProductList';
import './App.css';
import { useEffect } from 'react';


function App() {

  useEffect(() => {
    
    if (!localStorage.getItem('theme')) {
    localStorage.setItem('theme', 'dark');
    }
    
    if (!localStorage.getItem('cart')) {
      localStorage.setItem('cart', '[]')
    }
  }, []);

  return (
    <MainContainer>
      <Header />
      <ContentsWrap>
        <ContentsContainer>
          <ProductList/>
        </ContentsContainer>
      </ContentsWrap>
      <Footer />
    </MainContainer>
  )
}

export default App