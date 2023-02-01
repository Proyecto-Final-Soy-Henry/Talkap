import { useSelector } from "react-redux"
import style from './Dashboard.module.css'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

// const scores2 = [1, 3, 2, 2, 4, 4, 5, 3, 2];


const options = {
  fill: true,
  responsive: false,
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
  const labels = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
  const {my,list} = useSelector(state=>state.users)
  //obtengo un array donde por cada usuario se coloca el mes en que se creo la cuenta
  let scores = list.map(e=>{
    return e.createdAt.slice(5,7)
  })
  //obtengo un array con la cantidad de conectados por mes
  
  
  console.log(scores)
    const data =  {
          datasets: [
            {
              label: "Usuarios Registrados",
              data: scores,
              tension: 0.3,
              borderColor: "rgb(75, 192, 192)",
              pointRadius: 6,
              pointBackgroundColor: "rgb(75, 192, 192)",
              backgroundColor: "rgba(75, 192, 192, 0.3)",
            },
            // {
            //   label: "Conexiones",
            //   tension: 0.3,
            //   data: scores2,
            //   borderColor: "green",
            //   backgroundColor: "rgba(0, 255, 0, 0.3)",
            //   pointRadius: 6,
            // },
          ],
          labels,
        };
     
    


    return(<div className={style.dashboard} >
        <div className="nav">Bienvenido/a {my.name}</div>

        <Line  data={data} options={options} />






        <button onClick={()=>{handle(false)}}>SALIR</button>



    </div>)
}