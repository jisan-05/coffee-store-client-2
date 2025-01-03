import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard';
import { useState } from 'react';

function App() {

  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees)

  return (
    <div className='m-20'>
     
      <h1 className='text-4xl text-center text-purple-600'>Hot Hot Cold Coffees : {coffees.length}</h1>
      <div className='grid md:grid-cols-2 gap-6'>
      {
        coffees.map(coffee => <CoffeeCard 
          key={coffee._id}
           coffee={coffee}
           coffees={coffees}
           setCoffees={setCoffees}
           ></CoffeeCard>)
      }
      </div>
     
    </div>
  )
}

export default App
