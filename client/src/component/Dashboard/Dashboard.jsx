import { useSelector } from "react-redux";
import style from "./Dashboard.module.css";
import { getScoresMessages, getScoresUsers } from "./Service.js";
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
  PieController,
  ArcElement,
} from "chart.js";
import { Bar, Pie } from "react-chartjs-2";
import { useEffect, useState } from "react";
import Modal from "./Modal";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  PieController,
  ArcElement,
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
export default function Dashboard({ handle }) {
  // const scores2 = [1, 3, 2, 2, 4, 4, 6, 3];
  const labels = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  const { my, list } = useSelector((state) => state.users);
  const { allMessages } = useSelector((state) => state.chat);

  ////////////////////USUARIOS//////////////////////////
  //obtengo un array donde por cada usuario se coloca el mes en que se creo la cuenta
  let scores = list.map((e) => {
    return e.createdAt.slice(5, 7);
  });
  //obtengo un array con la cantidad de conectados por mes
  const users = getScoresUsers(scores);

  //obtener los usuarios del  array users
  const totalUser = (users) => {
    let suma = 0;
    users.forEach((e) => {
      suma = suma + e;
    });
    return suma;
  };
  /////////////////////////////////////////////////////////////////////
  ////////////////////////MENSAJES/////////////////////////////////////

  let scores2 = allMessages.map((e) => {
    return e.createdAt.slice(5, 7);
  });

  const messages = getScoresMessages(scores2);

  const totalMessages = (messages) => {
    let suma = 0;
    messages.forEach((e) => {
      suma = suma + e;
    });
    return suma;
  };

  ///////////// config DATA Bar /////////////
  const data = {
    datasets: [
      {
        label: "Usuarios Registrados",
        data: users,
        tension: 0.3,
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgb(75, 192, 192)",
      },
      {
        label: "Mensajes Enviados",
        tension: 0.3,
        data: messages,
        borderColor: "green",
        backgroundColor: "rgb(71, 180, 71)",
        pointRadius: 6,
      },
    ],
    labels,
  };

  ///////////config array pay ////////////////
  const arrayPai = () => {
    let conectados = 0;

    list.forEach((e) => {
      if (e.connected) {
        conectados = conectados + 1;
      }
    });

    let desconectados = totalUser(users) - conectados;
    return [desconectados, conectados];
  };
  ///////////config DATA Pay /////////////////

  const options2 = {
    title: {
      display: true,
      text: "Usuarios",
      fontSize: 20,
    },
    legend: {
      display: true,
      position: "right",
    },
  };

  const data2 = {
    labels: ["Desconectados " + arrayPai()[0], "Conectados " + arrayPai()[1]],
    datasets: [
      {
        label: "Usuarios",
        backgroundColor: ["rgb(255, 48, 48)", "#C9DE00"],
        hoverBackgroundColor: ["#501800", "#4B5000"],
        data: arrayPai(),
      },
    ],
  };

  // config modal
  const [modal, setModal] = useState(false);

  useEffect(() => {
    console.log("modal");
  }, [modal]);

  return (
    <div className={style.dashboard}>
      {!modal && (
        <>
          <button
            className={style.buttonExit}
            onClick={() => {
              handle(false);
            }}
          >
            SALIR
          </button>
          {/* <div className={style.bienvenida}>
          Bienvenido/a {my.name}
          </div> */}
          <div className={style.buttonBan}>
            {" "}
            <button
              onClick={() => {
                setModal(true);
              }}
            >
              Información de Usuarios
            </button>
          </div>

          <div className={style.totaluser}>
            <h3>Total Usuarios Registrados : {totalUser(users)}</h3>
          </div>
          <div className={style.totalchats}>
            Total Mensajes Enviados : {totalMessages(messages)}{" "}
          </div>

          <div className={style.cosoContainer}>
            <div className={style.line}>
              <Bar data={data} options={options} />
            </div>
            <div className={style.pie}>
              <Pie data={data2} options={options2} />
            </div>
          </div>
        </>
      )}
      {modal && <Modal setModal={setModal} />}
    </div>
  );
}
