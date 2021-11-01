import React, {useState, useEffect} from 'react';
import * as Styled from './styles';
import api from '../../services/api';


/* IMAGENS */
import Imagem from '../../Imgs/filter.png';
import futebol from '../../Imgs/futebol.jpg';
import viagem from '../../Imgs/viagem.png';
import cinema from '../../Imgs/cinema.png';
import lanche from '../../Imgs/lanche.jpg';
import prova from '../../Imgs/prova.jpg';
import academia from '../../Imgs/academia.jpg';
import compra from '../../Imgs/compra.jpg';
import trabalho from '../../Imgs/trabalho.png';



/* COMPONENTES */
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Filter from '../../Components/Filter';
import TaskCard from '../../Components/TaskCard';



function Home() {

  //variável e função responsável por atualizar o valor do filtro
  const [filterActive, functionFilter] = useState('all');

  // a setTasks vai ser a função responsável por armazenar na variável tasks as tarefas retornadas do banco de dados
  const [tasks, setTasks] = useState([]);

  //função responsável por fazer as requisições para o backend
  async function loadTasks(){
    await api.get(`/task//filter/${filterActive}/11:11:11:11:11:12`)
    .then(response => {
      setTasks(response.data)
    })
  }

  useEffect(() => {
    loadTasks();
  }, [filterActive])

  return (
    <Styled.Container>
      <Header />
        <Styled.ContainerFilter>
          <button type='button' onClick={() => functionFilter('all')}>
          <Filter title="Todos" img={Imagem} actived={filterActive == 'all'}/>
          </button>

          <button type='button' onClick={() => functionFilter('today')}>
          <Filter title="Hoje" img={Imagem} actived={filterActive == 'today'}/>
          </button>

          <button type='button' onClick={() => functionFilter('week')}>
          <Filter title="Semana" img={Imagem} actived={filterActive == 'week'}/>
          </button>

          <button type='button' onClick={() => functionFilter('month')}>
          <Filter title="Mês" img={Imagem} actived={filterActive == 'month'}/>
          </button>
          
         </Styled.ContainerFilter>

         <Styled.ContainerCard>
           {
             tasks.map(
               t => ( 
               <TaskCard />
               ))
           }
         </Styled.ContainerCard>
      
      <Footer />
    </Styled.Container>
  )
}

/* REPONSÁVEL POR EXPORTAR A FUNÇÃO PARA OUTRAS ÁREA DO CÓDIGO */
export default Home;

