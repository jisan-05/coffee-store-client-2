const CoffeeCard = ({ coffee }) => {
    const { name, quantity, supplier, taste, category, details, photo } =
        coffee;
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure>
                <img src={photo} alt="Movie" />
            </figure>
            <div className="w-full flex justify-between p-5">
                <div >
                    <h2 className="card-title">Name: {name}</h2>
                    <p>Quantity : {quantity}</p>
                    <p>Taste : {taste}</p>
                </div>
                <div className="card-actions justify-end ">
                    <div className="join space-y-4 join-vertical">
                        <button className="btn join-item">View</button>
                        <button className="btn join-item">Edit</button>
                        <button className="btn join-item bg-red-800 text-white">X</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;
