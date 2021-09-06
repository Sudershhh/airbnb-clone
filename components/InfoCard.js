import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";


function InfoCard(props) {

    const {img, description,lat,location,long,price,star,title,total } = props;

    return (
        <div className="flex flex-col px-2 py-7 pr-4 cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t sm:flex-row">
            <div className="relative h-36 sm:h-36 md:w-80 md:h-52 flex-shrink-0">
                <Image src={img} layout="fill" objectFit="cover" className="rounded-2xl" />
            </div>
            <div className="flex flex-col flex-grow pl-0 sm:pl-5">
                <div className="flex justify-between">
                    <p>{location}</p>
                    <HeartIcon className="h-7 cursor-pointer" />
                </div>
                <h4 className="text-xl">{title}</h4>
            
                <div className="border-b w-10 h-2" />

                <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>

                <div className="flex items-center justify-between">
                    <p className="flex items-center">
                        <StarIcon className="h-5 text-red-400" />
                        {star}
                    </p>

                    <div>
                        <p className="text-lg font-semibold lg:text-2xl">{price}</p>
                        <p className="text-right font-extralight">{total}</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default InfoCard
