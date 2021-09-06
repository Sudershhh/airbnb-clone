import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
import Smallcard from '../components/Smallcard'
import MediumCard from '../components/MediumCard'
import LargeCard from '../components/LargeCard'
import Footer from '../components/Footer'

export default function Home(props) {
  
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/logo.png" />
      </Head>

      <Header />
      <Banner />

      <main className="max-w-7xl mx-auto sm:px-6 px-2">
        <section className="pt-6">
            <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
        

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

        {props.exploreData?.map((item,index) => (<Smallcard key={index} img={item.img} location={item.location} distance={item.distance} />))}
        </div>
        </section>

        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>

          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3">

          {props.cardData?.map((item,index) => (
            <MediumCard key={item} img={item.img} title={item.title} />
          ))}
          </div>



        </section>

        <LargeCard img='https://links.papareact.com/4cj' title='The Greatest Outdoors' description='Wishlists curated by AirBnB.' buttonText='Get Inspired' />
      
      </main>

      <Footer />

    </div>
  )
}


export async function getStaticProps()
{

  const exploreData = await fetch('https://links.papareact.com/pyp').then((result) => result.json())

  const cardData = await fetch('https://links.papareact.com/zp1').then((response) => response.json())


  return {
    props:{
      exploreData,
      cardData,
    }
  }
}
