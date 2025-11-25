import PlantCard from '@/Components/PlantCard/PlantCard';

const page = async () => {

    const plants = await fetch('https://nextjs-server-six.vercel.app/allplants');

    const posts = await plants.json();

    return (
        <div>
           
             
            <h2 className="text-5xl text-center mt-12 mb-8 font-bold">All Plants</h2>
            <div className='grid grid-cols-1 max-w-9/12 mx-auto gap-8 md:grid-cols-2 lg:grid-cols-3'>
                {posts.map(plant => (
                    <PlantCard key={plant._id} plant={plant} />
                ))}
            </div>
        </div>
    );
};

export default page;
