import img from './assets/juiz.jpg'
import img1 from './assets/cara.jpg'
import img3 from './assets/mesa.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header">
        <h3>Profissão: Advogado</h3>
          <nav class="App-nav">
            
              <a href="#imagem"><h1>Introdução</h1></a>
              <a href="#habili"><h1>Habilidades</h1></a>
              <a href="#oportuna"><h1>Oportunidades</h1></a>
          </nav>

          
</div>
        <main>
          
          
          <section id="imagem" className="textos">
          <img src={img} className="imagem"/>
          <div className="texto1">
            <h1>Introdução sobre a Profissão de Advogado</h1>
          <p>O objetivo profissional do advogado é cuidar e zelar pela integridade de bens e direitos, preservando interesses individuais e coletivos, em conformidade com os princípios éticos da profissão. Ele representa e fala em nome de seus clientes em várias situações, seja para empresas, pessoas ou entidades.</p>
          <p>Dessa forma, o advogado pode trabalhar em escritórios de advocacia, empresas comerciais ou industriais e também na administração pública, seja como estatutário, contratado ou de forma autônoma.</p>
          <p>A profissão é regulamentada, exigindo um diploma de bacharel em Direito de uma faculdade reconhecida pelo Ministério da Educação (MEC), além da aprovação na prova da Ordem dos Advogados do Brasil (OAB) para exercer atividades ligadas ao Direito, como advogado, promotor ou juiz.</p>
          </div>
          </section>
          


          <section id="habili"className="textos">
          <div className="texto1">
            <h1>Habilidades</h1>
          <li>Propor ou contestar ações;</li>
          <li>Solicitar providências junto ao magistrado ou Ministério Público;</li>
          <li>Avaliar provas documentais e orais;</li>
          <li>Realizar audiências trabalhistas, penais comuns e cíveis;</li>
          <li>Instruir clientes e atuar no tribunal do júri, entre outras;</li>
      
          
          <p>Além disso, o advogado pode atuar judicialmente em tribunais, juizados especiais e órgãos superiores, através do ajuizamento de ações, defesa, recursos e acordos perante o Poder Judiciário.</p>
          <p>Extrajudicialmente, pode mediar questões, contribuir na elaboração de projetos de lei, assessorar negociações internacionais e nacionais, bem como analisar, atualizar e implementar diferentes tipos de legislação.</p>
          </div>
          <img src={img1} className="imagem"/>
          </section>


          <section id="oportuna" className="textos">
          <img src={img3} className="imagem"/>
          <div className="texto1">
            <h1>Oportunidades</h1>
            <h3>Arbitragem:</h3>
          <p>Atua para que as partes cheguem a um acordo, de modo que o processo não vá a instâncias judiciais superiores. A intenção é evitar o desgaste de tempo e dinheiro para a empresa.
          No setor privado há também boas chances para advogados nos ramos empresarial, consultivo e imobiliário. O cargo de diretor jurídico também está em evidência, principalmente, nas grandes organizações.</p>
          <h3>Escritório jurídico:</h3>
          <p>Os escritórios jurídicos são uma boa alternativa para os advogados consolidarem uma posição de destaque no mercado de trabalho. Neles, um profissional atua representando os clientes em processos judiciais e administrativos, fazendo consultas sobre modificações na legislação e auxiliando os clientes na tomada de decisões.</p>
          
          </div>
          </section>
        </main>
</div>
  );
}

export default App;
