import { useSelector } from "react-redux"
import style from './Dashboard.module.css'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import {  Bar } from "react-chartjs-2";


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);




const options = {
  fill: true,
  responsive: true,
  scales: {
    y: {
      min: 0,
    },
  },
  plugins: {
    legend: {
      display: true,
    },
  },
};
export default function Dashboard({handle}){
  const scores2 = [1, 3, 2, 2, 4, 4, 6, 3];
  const labels = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
  const {my,list} = useSelector(state=>state.users)
  const {allMessages} = useSelector(state=>state.chat)
  //obtengo un array donde por cada usuario se coloca el mes en que se creo la cuenta
  let scores = list.map(e=>{
    return e.createdAt.slice(5,7)
  })
  //obtengo un array con la cantidad de conectados por mes
  const getScores = (scores)=>{
     let array = [0,0,0,0,0,0,0,0,0,0,0,0];
    scores.forEach((element) => {
     
      switch (element) {
        case '01':  array[0]=array[0]+1;
          break;
        case '02':  array[1]=array[1]+1;
          break;  
        case '03':  array[2]=array[2]+1;
          break;
        case '04':  array[3]=array[3]+1;
          break;
        case '05':  array[4]=array[4]+1;
          break;
        case '06':  array[5]=array[5]+1;
          break;
        case '07':  array[6]=array[6]+1;
          break;
        case '08':  array[7]=array[7]+1;
          break;
        case '09':  array[8]=array[8]+1;
          break;
        case '10':  array[9]=array[9]+1;
          break;
        case '11':  array[10]=array[10]+1;
          break;
        case '12':  array[11]=array[11]+1; 
          break;      
        default:
          break;
      }
  
    });
   
    return array;
  }

  const value = getScores(scores);
  
  console.log(scores)
    const data =  {
          datasets: [
            {
              label: "Usuarios Registrados por mes",
              data: value,
              tension: 0.3,
              borderColor: "rgb(75, 192, 192)",
              backgroundColor: "rgba(75, 192, 192, 0.644)",
            },
            {
              label: "Datos de Prueba",
              tension: 0.3,
              data: scores2,
              borderColor: "green",
              backgroundColor: "rgba(0, 255, 0, 0.3)",
              pointRadius: 6,
            },
          ],
          labels,
        };
     
  
     
    


    return(<div className={style.dashboard} >
       <button className={style.buttonExit} onClick={()=>{handle(false)}}>SALIR</button>
        <div className={style.bienvenida}>Bienvenido/a {my.name}</div>
        
       
        <div className={style.totaluser}>
          <h3>Total Usuarios Registrados : {list.length}</h3>
        </div>
        <div className={style.totalchats}>Total Mensajes Enviados : {allMessages.length} </div>

        <div className={style.line}>
        <Bar  data={data} options={options} />
        </div>
       



       



    </div>)
}