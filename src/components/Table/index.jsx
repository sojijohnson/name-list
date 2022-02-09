import React, { useState } from "react";

import useTable from "../../hooks/useTable";
import styles from "./Table.module.css";
import TableFooter from "./TableFooter";

const Table = ({ data, rowsPerPage }) => {
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(data, page, rowsPerPage);
  const [detailshown, setDetailshown] =useState([])
  const [hide , setHide]=useState(true)

  const toggleShow=(username)=>{
    setHide(!hide)
    const showState = detailshown.slice()
    
    const index = showState.indexOf(username)
    if (index>=0){
    showState.splice(index, 1)
    setDetailshown(showState)
    setHide(hide)
    }else{
      showState.push(username)
      setDetailshown(showState)
      setHide(hide)
    }
   
    }

  return (
    <>
      <table className={styles.table}>
        <thead className={styles.tableRowHeader}>
          <tr>
            <th className={styles.tableHeader}>ID</th>
            <th className={styles.tableHeader}>FirstName</th>
            <th className={styles.tableHeader}>LastName</th>
            
            <th className={hide?styles.tableHeader1: styles.tableHeader}>EMAIL</th>
            <th className={hide?styles.tableHeader1: styles.tableHeader}>Gender</th>
            <th className={hide?styles.tableHeader1: styles.tableHeader}>IP_ADDRESS</th>
            
          </tr>
        </thead>
        <tbody>
          {slice.map((el) => (
            <tr className={styles.tableRowItems} key={el.id}>
                 <td className={styles.tableCell}>{el.id}</td>
              <td className={styles.tableCell}>{el.first_name}</td>
              <td className={styles.tableCell}>{el.last_name}</td>
             
           
          <td>   
           
     { detailshown.includes(el.first_name) &&
               (   <tr>
                  <td className={hide?styles.tableCell1:styles.tableCell} colSpan="2"> {el.email}</td>
              </tr>
             
              ) } </td>

              <td>   
            { detailshown.includes(el.first_name) &&
                     (
           <tr> <td className={hide?styles.tableCell1:styles.tableCell}> {el.gender } </td>     
                    </tr>    ) }
      
                    </td>  <td>   
           
           { detailshown.includes(el.first_name) && (
            <tr> <td className={hide?styles.tableCell1:styles.tableCell}> {el.ip_address }  </td>            
             </tr> ) }
      
                    </td>
    

              
                 <td><button className={styles.toggleButton} onClick={()=>toggleShow(el.first_name)}> 
                 Show details
                 </button></td>
           </tr>
          ))}
        </tbody>
      </table>
      <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
    </>
  );
};

export default Table;
