import Link from "next/link";


const PlantCard = ({ plant }) => {
    
    const {description} = plant
    return (
        <div>

     

            <div
           
                className="border border-primary  rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition"
            >
                {/* Plant Image */}
                <div className="h-[300px] bg-gray-100 flex justify-center items-center">
                    <img
                        src={plant.image}
                        alt={plant.plantName}
                        className="h-full w-full object-cover object-contain"
                    />
                </div>

                {/* Content */}
                <div className="p-4">
                    <h4 className="font-semibold text-2xl">{plant.plantName}</h4>
                    <p className="text-secondary font-medium"> Price: $ {plant.price }</p>
                    <p className="text-secondary font-medium">Descripti {description }</p>
                    <Link href={`/Plants/${plant._id}`} className="text-green-600 w-full btn  font-medium mt-2"> View Details </Link>
                </div>
            </div>
        </div>
    );
};

export default PlantCard;