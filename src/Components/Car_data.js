/// funcation components 


export default function CarData(props){
  console.log(props)
    return(
      <>
        <table 
        style={{
          margin:'10px',
          border:'1px solid black',backgroundColor: "brown"}}
        >
          <tbody>
  <tr>
    <th>Brand</th>
    <th>Type</th>
    <th>Year</th>
  </tr>
  <tr>
    <td>{props.name}</td>
    <td>{props.type}</td>
    <td>{props.year}</td>
  </tr>
  {/* <tr>
  <td>{props.name}</td>
    <td>{props.type}</td>
    <td>{props.year}</td>
  </tr> */}
  </tbody>
</table>
</>
);
    

}