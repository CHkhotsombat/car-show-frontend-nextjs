"use client";

import { useEffect, useState } from 'react';
import { CarCard, CustomFilter, Hero, SearchBar, ShowMore } from '@/components'
import { fuels, yearsOfProduction } from '@/constants';
import { HomeProps } from '@/types';
import { fetchCars } from '@/utils'
import Image from 'next/image';

export default function Home() {
  const [allCars, setAllCars] = useState([]);
  const [loading, setLoading] = useState(false)

  // search state
  const [manufacturer, setManufacturer] = useState('')
  const [model, setModel] = useState('')
  const [fuel, setFuel] = useState('');
  const [year, setYear] = useState(2022)

  // paginate
  const [limit, setLimit] = useState(10)

  const getCar = async () => {
    setLoading(true)
    try {
      const result = await fetchCars({
        manufacturer: manufacturer,
        year: year,
        fuel: fuel,
        limit: limit,
        model: model,
      })
  
      setAllCars(result)  
    } catch (error) {
      console.log(error);      
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    getCar();
  }, [fuel, year, model, manufacturer, limit])
  

  const isEmptyCar = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (

    <main className="overflow-hidden">
      <Hero />
      <div className='mt-12 padding-x padding-y max-width' id="discover">
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>
            Car Catalogue
          </h1>
          <p>
            Explore the cars you might like
          </p>
        </div>
        <div className='home__filters'>
          <SearchBar setManufacturer={setManufacturer} setModel={setModel} />
          <div className='home__filter-container'>
            <CustomFilter title="fuel" options={fuels} setFilter={setFuel} />
            <CustomFilter title="year" options={yearsOfProduction} setFilter={setYear}/>
          </div>
        </div>
        {allCars.length > 0 ? (
          <section>
            <div className='home__cars-wrapper'>
              {allCars.map((car, index) => (
                <CarCard car={car} key={index}/>
              ))}
            </div>
            {loading && (
              <div className="mt-[2rem] flex justify-center">
                <Image alt="loader" src="/loader-spinner.gif" width={50} height={50} />
              </div>
            )}
            <ShowMore
              pageNumber={limit / 10}
              isNext={limit > allCars.length}
              setLimit={setLimit}
            />
          </section>
        ) : (
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>
              Oops, no results
            </h2>
          </div>
        )}
      </div>
    </main>
  )
}
