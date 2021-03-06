import Image from "next/image"


function Banner() {
    return (
        <div className="relative h-[300px] sm:h-[400px] lg:h-[450px] xl:h-[500px] 2xl:h-[650px]">
            <Image
                src='https://links.papareact.com/0fm' 
                layout="fill"
                objectFit="cover"

            />

            <div className="absolute top-1/2 w-full text-center">
                <p className="text-sm sm:text-lg font-semibold">Not sure where to go? Perfect.</p>

                <button className="text-purple-500 shadow-md px-10 py-4 bg-white rounded-full font-bold my-3 hover:shadow-lg active:scale-90 transition duration-150">I'm Flexible</button>
            </div>            
        </div>
    )
}

export default Banner
