import { useRef, useState} from 'react'
import Footer from './Footer,'
import Header from './Header'
import '../styles/App.css'
import '../styles/Cuestionario.css'
import {respfotosintesis} from '../assets/fotosintesisCustionario';
import { scoreRequest } from '../api/task'

  
export default function LecFotos () {
  let [index, setIndex] = useState(0);
  let [question, setQuestion] = useState(respfotosintesis[index]);
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
      const response = await scoreRequest(score, "Leccion1Fotosintesis");
      setRespuestaServidor(response.respfotosintesis);
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
        if(index === respfotosintesis.length-1){

          setResult(true);

      enviarScoreAlServidor();
          return 0;

        }
          setIndex(++index);
          setQuestion(respfotosintesis[index]);
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
        <h1>Cuestionario 1: Fotosíntesis</h1>
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
          
          <div>{index+1} de {respfotosintesis.length} preguntas</div></>}

          {result?<>
          
          <h2>Obtuviste {score} de {respfotosintesis.length}</h2>
          <a href='/Flora'>Regresar</a>
          </>:<></>
          }
        </section>
      </main>
      <Footer />
    </div>
  )
}