import React from 'react'
import Presentation from '../components/Layout/metodo3en9/Presentation'
import ScrollToTopMount from '../components/ScrollToTopMount'
import Contador from '../components/Contador'
import Recursos from '../components/Layout/metodo3en9/Recursos'
import Metodologia from '../components/Layout/metodo3en9/Metodologia'
import Bonos from '../components/Layout/metodo3en9/Bonos'

const EnglishNow = () => {
    document.title = "Desafio Bilingüe Metodo 3 en 9"
  return (
    <div className='overflow-x-hidden'>
      <ScrollToTopMount />
      <Contador item='item' />
        <Presentation />
        <Recursos />
        <Metodologia />
        <Bonos />
    </div>
  )
}

export default EnglishNow