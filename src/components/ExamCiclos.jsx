import { useRef, useState} from 'react'
import Footer from './Footer,'
import Header from './Header'
import '../styles/App.css'
import '../styles/Cuestionario.css'
import {respCiclos} from '../assets/PreguntasCiencias';
import { scoreRequest } from '../api/task'


  
export default function LecCiclos () {
  let [index, setIndex] = useState(0);
  let [question, setQuestion] = useState(respCiclos[index]);
  let [lock, setLock] = useState(false);
  let [score, setScore] = useState(0);
  let [result, setResult] = useState(false);
  let [respuestaServidor, setRespuestaServidor] = useState('');
 
  let option1 = useRef(null);
  let option2 = useRef(null);
  let option3 = useRef(null);
  let option4 = useRef(null);

  const enviarScoreAlServidor = async () => {
    try {
      const response = await scoreRequest(score, "Leccion3Ciclos");
      setRespuestaServidor(response.respCiclos);
    } catch (error) {
      console.error('Error al enviar el score al servidor:', error);
    }
  };
 
  let optArray = [option1,option2, option3, option4]
  const checkAnswer = (li, answer) =>{
      if(lock === false){
          if(question.ans ===answer){
              li.target.classList.add("correct");
              setLock(true);
              setScore(prev=>prev+1)
          }else{
              li.target.classList.add("wrong");
              setLock(true);
              optArray[question.ans-1].current.classList.add("correct")
          }
      }
  }
 
  const nextQuestion = () =>{
      if (lock === true){
        if(index === respCiclos.length-1){

          setResult(true);

      enviarScoreAlServidor();
          return 0;

        }
          setIndex(++index);
          setQuestion(respCiclos[index]);
          setLock(false);
          optArray.map((option)=>{
              option.current.classList.remove("wrong");
              option.current.classList.remove("correct");
              return null
          })
      }
 
  }
 
  // useEffect(() => {
  //   if (result===true) {
      
  //     enviarScoreAlServidor();

  //   }
  //   console.log(score)
  // }, [score]); 

  return (
    <div className="APP">
      <Header />
      <main>
        <h1>Cuestionario 3: Ciclos de Vida de una Planta</h1>
        <section className="Cuestionario">
            {result?<></>:<>
          {<h4>{index+1}.- Pregunta {question.question}</h4>  }
          
          <ul>
            <li ref={option1} onClick={(li)=>{checkAnswer(li,1)}}>{question.option1}</li>
            <li ref={option2} onClick={(li)=>{checkAnswer(li,2)}}>{question.option2}</li>
            <li ref={option3} onClick={(li)=>{checkAnswer(li,3)}}>{question.option3} </li>
            <li ref={option4} onClick={(li)=>{checkAnswer(li,4)}}>{question.option4} </li>
          </ul>
          
          <button onClick={nextQuestion}>Next</button>
          
          <div>{index+1} de {respCiclos.length} preguntas</div></>}

          {result?<>
          
          <h2>Obtuviste {score} de {respCiclos.length}</h2>
          <a href='/Flora'>Regresar</a>
          </>:<></>
          }
        </section>
      </main>
      <Footer />
    </div>
  )
}