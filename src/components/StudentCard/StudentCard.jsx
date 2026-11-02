import React from 'react'

const StudentCard = ({ students }) => {
   
  return (
    <div className="flex flex-wrap gap-4">
      {students.map(student => {
         let color = "";
    if (student.bal >= 51) {
        color = "bg-[green]";
    } else {
     color= "bg-[red]";
    } return (
        <div  className="bg-white shadow-md rounded-lg p-4">
          <img src={student.img} alt={`${student.name} ${student.surname}`} className="w-full h-auto rounded-lg" />
          <h3 className="text-lg font-bold mt-2">{student.name} {student.surname}</h3>
          <p className={`${color}`}>Bal: {student.bal}</p>
        </div>
    )
})}
    </div>
  )
}



export default StudentCard