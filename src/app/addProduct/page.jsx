'use client';

import axios from "axios";


const AddProduct = () => {


    const handleSubmit = e => {
        e.preventDefault()

        const newdata = {
            plantName: e.target.name.value,
            category: e.target.category.value,
            description: e.target.description.value,
            thumbnail: e.target.thumbnail.value,
            created_at: new Date(),
            downloads: 0,
            price: e.target.price.value,
            created_by: 'omoronfire90909@gmail.com',
            sort_des: e.target.ShortDes.value,
            availableStock: 5,
            careLevel: "Medium",
            rating: 4.7,

        }


   console.log('checking data',newdata)
        axios.post('http://localhost:3001/plants', newdata)
            .then(res => {
                
                
                if (res.data.insertedId) {
                    console.log(res.data)
                }
        })

    }
    return (
        <div className="card border border-gray-200 bg-base-100 w-full max-w-xl mx-auto shadow-2xl rounded-2xl">
            <div className="card-body p-6 relative">
                <h2 className="text-2xl font-bold text-center mb-6">Add New Model</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name Field */}
                    <div className="flex items-center gap-4">
                        <div>
                            <div>
                                <label className="label  font-medium">Title</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    className="input my-2 w-full rounded-full focus:border-0 focus:outline-gray-200"
                                    placeholder="Set Title"
                                />
                           </div>
                            <div>
                                <label className="label font-medium">Short description</label>
                                <input
                                    type="text"
                                    name="ShortDes"
                                    required
                                    className="input my-2 w-full rounded-full focus:border-0 focus:outline-gray-200"
                                    placeholder="Short Description"
                                />
                           </div>
                        </div>

                        {/* Category Dropdown */}
                        <div>
                            <div>
                                <label className="label font-medium">Category</label>
                                <select
                                    defaultValue={""}
                                    name="category"
                                    required
                                    className="select my-2 w-full rounded-full focus:border-0 focus:outline-gray-200"
                                >
                                    <option value="" disabled>
                                        Select category
                                    </option>
                                    <option value="Vehicles">Snake Plant</option>
                                    <option value="Plants"> Spider Plant</option>
                                    <option value="Foods">Foods</option>
                                    <option value="Home & Living">Peace Lily</option>
                                    <option value="Characters">Characters</option>
                                    <option value="Space">Pothos</option>
                                    <option value="Animals"> Hibiscus</option>

                                </select>
                            </div>
                            <div>
                                <label className="label font-medium">Price</label>
                                <input
                                    type="text"
                                    name="price"
                                    required
                                    className="input w-full my-2 rounded-full focus:border-0 focus:outline-gray-200"
                                    placeholder="Price "
                                />
                            </div>
                        </div> 
                  </div>

                    {/* Description Textarea */}
                    <div>
                        <label className="label font-medium">Description</label>
                        <textarea
                            name="description"
                            required
                            rows="3"
                            className="textarea w-full rounded-2xl focus:border-0 focus:outline-gray-200 h-[250px]"
                            placeholder="Full description"
                        ></textarea>
                    </div>

                    {/* Thumbnail URL */}
                    <div>
                        <label className="label font-medium">Plant Image</label>
                        <input
                            type="url"
                            name="thumbnail"
                            required
                            className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                            placeholder="https://example.com/image.jpg"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="btn w-full text-white mt-6 rounded-full bg-primary"
                    >
                        Add Plants 
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;