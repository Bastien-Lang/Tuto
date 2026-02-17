import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Aside from './components/animations/aside'
import Text from './components/animations/Text'

function App() {

  return (
    <>
      <Header />
      <main className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">

        {//Changez votre nom ici pour le voir apparaître dans le Hero
        }
        <Hero nom="" />  


        <section className="flex w-full justify-between mt-8">
          <Aside startOrEnd="start">Contenu de l'aside de gauche, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem exercitationem fugiat qui neque aspernatur nostrum ea quae! Officia id qui alias accusantium commodi, iusto quam similique enim dolores, facilis voluptatem!</Aside>
          <Aside startOrEnd="end">Contenu de l'aside de droite, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi porro quos debitis in voluptatibus quod temporibus, fugit voluptate facilis voluptates neque hic similique sunt, expedita natus tenetur? Sunt, doloremque totam.</Aside>
        </section>
        <section className="bg-gray-200 w-full mt-8 shadow-md min-h-[screen/2] py-8 flex flex-col items-center justify-center">
          <Text />
        </section>
        <div className='h-100'></div>
      </main>
    </>
  )
}

export default App
