import Header from "../components/Header";
import Footer from "../components/Footer";
import {useRouter} from "next/dist/client/router"
import {format} from "date-fns"
import InfoCard from "../components/InfoCard";
import Map from "../components/Map"
import Head from 'next/head'

function Search({searchResults}) {

    const router = useRouter();
    const {location, startDate,endDate,noOfGuests} = router.query;

    const formattedStartDate = format(new Date(startDate), 'dd MMMM yy')
    const formattedEndDate = format(new Date(endDate), 'dd MMMM yy')
    const range = `${formattedStartDate}-${formattedEndDate}`;


    return (
        <div>

            <Head>
                <title>Airbnb Results - Stays in {location}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header placeholder={`${location} | ${formattedStartDate} - ${formattedEndDate} | ${noOfGuests} guests `} />

            <main className="flex mt-10 pl-5">
                <section>
                    <p className="text-xs">300+ Stays - {range} - for {noOfGuests} guests</p>
                    <h1 className="text-3xl font-semibold mb-6 mt-2">Stays in {location}</h1>
                    <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
                        <p className="button">Cancellation Flexibility</p>
                        <p className="button">Type of Place</p>
                        <p className="button">Prices</p>
                        <p className="button">Rooms and Beds</p>
                        <p className="button">More Filters</p>
                    </div>

                    <div className="flex flex-col">

                        {searchResults.map((item,index) => <div>
                            <InfoCard key={index} img={item.img} description={item.description} lat={item.lat} location={item.location} long={item.long} price={item.price} star={item.star} title={item.title} total={item.total}  />
                        </div>)}
                    </div>

                </section>
                <section className='hidden xl:inline-flex xl:min-w-[600px] mt-36 ml-1'>
                    <Map searchResults={searchResults} />
                </section>
            </main>

            <Footer />
        </div>
    )
}

export default Search


export async function getServerSideProps(context)
{

    const searchResults = await fetch('https://links.papareact.com/isz').then(response => response.json());
    

    return {
        props:{
            searchResults,
        }
    }
    

}