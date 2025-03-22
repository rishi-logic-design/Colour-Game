import React, { useState } from 'react'

const MatrixGame = () => {
  const [grid, setGrid] = useState(Array(9).fill("white")); //initial white color
  const [click , setClick] = useState([]);

  const handleClick = (index) => {
    if (grid[index] === "white"){
      const newGrid = [...grid];
      newGrid[index]=["green"];
      setGrid(newGrid);

      const newClick = [...click,index];
      setClick(newClick)
    
      if (newClick.length === 9) {
        changeColorToOrange(newClick)
      }
    }
  } 


  const changeColorToOrange = (order) => {
    order.forEach((idx,i)=>{
      setTimeout(()=>{
        setGrid((prevGrid)=>{
          const newGrid = [...prevGrid];
          newGrid[idx] = "orange";
          return newGrid;
        });
      },i*500)
    })
  }

  const resetGrid = () => {
    setGrid(Array(9).fill("white"));
    setClick([])
  }

  return (
    <div className='flex flex-col items-center'>
    <div className='grid grid-cols-3 gap-2 w-32'>
      {
        grid.map((color, index) => (
          <div key={index}
          onClick={()=> handleClick(index)}
           className='w-10 h-10 border flex items-center justify-center'
            style={{ backgroundColor: color }}
          ></div>
        ))}
    </div>
        <button onClick={resetGrid}  className='mt-4 px-4 py-2 bg-gray-700 text-white cursor-pointer rounded'>
        Reset
        </button>
    </div>
  )
}

export default MatrixGame

