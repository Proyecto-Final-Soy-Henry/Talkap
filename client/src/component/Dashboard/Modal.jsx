import style from "./Modal.module.css";
import { useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import Card from "./Card";
import { sendMessage } from "../../services/sockets";
import {  useTable , useGlobalFilter} from "react-table";
export default function Modal({ setModal }) {
  const { list } = useSelector((state) => state.users);

  useEffect(()=>{},[list]);
    
   const columns = useMemo(
    () => [
      {
        Header: 'Nombre',
        accessor: 'name', // accessor is the "key" in the data
      },
      {
        Header: "Tipo de Usuario",
        accessor:'type'
      },
      {
        Header: 'Email',
        accessor: 'email',
        Cell:({value})=>{
          return <button onClick={()=>{sendMessage('blacklist',value)}}>{value}</button> }
      },
     
      {
        Header:'Fecha de registro',
        accessor:'createdAt',
        Cell:({value})=>{
          return value.slice(0,10)
        },
      },
      {
        Header:'Estado',
        accessor:'connected',
        Cell:({value})=>{
          if(value){
            return'conectado'
          }else{
            return'desconectado'
          }
        },
      },
      {
        Header:'Donador',
        accessor:'donor',
        Cell:({value})=>{
          if(value){
            return 'Si'
          }else{
            return'No'
          }
        },
      },
      {
        Header:'Usuario Bloqueado',
        accessor:'blacklist',
        Cell:({value})=>{
          if(value){
            return <div className={style.baned} >SI</div>
          }else{
            return <div className={style.unbaned} >NO</div>
          }
        }
      },
  
    ],
    []
  )
  const tableInstance = useTable({ columns, data:list },useGlobalFilter)

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    preGlobalFilteredRows,
    setGlobalFilter,
    state,
  
  } = tableInstance
  return (
    <div className={style.modal}>
      <button
        className={style.buttonExit}
        onClick={() => {
          setModal(false);
        }}
      >
        Cerrar
      </button>
      <h3 className={style.title}>IMPORTANTE !  Para Bloquear un usuario haga click en su identificador único (E-MAIL)</h3>
      <div className={style.modal}>
      <div>
         
         <input 
         placeholder="Buscar Usuario"
         type='text'
         value={state.globalFilter}
         onChange={(e)=>setGlobalFilter(e.target.value)}
         />
         </div> 
        <table {...getTableProps()} >
       
        <thead>
 {// Loop over the header rows
       headerGroups.map(headerGroup => (
        // Apply the header row props
        <tr {...headerGroup.getHeaderGroupProps()}>
          {// Loop over the headers in each row
          headerGroup.headers.map(column => (
            // Apply the header cell props
            <th {...column.getHeaderProps()}>
              {// Render the header
              column.render('Header')}
            </th>
          ))}
        </tr>
      ))}
        </thead>
        <tbody {...getTableBodyProps()}>
                 {// Loop over the table rows
       rows.map(row => {
        // Prepare the row for display
        prepareRow(row)
        return (
          // Apply the row props
          <tr {...row.getRowProps()}>
            {// Loop over the rows cells
            row.cells.map(cell => {
              // Apply the cell props
              return (
                <td {...cell.getCellProps()}>
                  {// Render the cell contents
                  cell.render('Cell')}
                </td>
              )
            })}
          </tr>
        )
      })}
        </tbody>

        </table>

      </div>
    </div>
  );
}
