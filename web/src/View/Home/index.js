import React from 'react';
import * as Styled from './styles';
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'

function Home() {
  return (
    <Styled.Container>
      <Header />
      <Footer />
    </Styled.Container>
  )
}

/* REPONSÁVEL POR EXPORTAR A FUNÇÃO PARA OUTRAS ÁREA DO CÓDIGO */
export default Home;
