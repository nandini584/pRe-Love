const Tiles=({Photo,Name,Description,Pricing,Discount,Review})=>{
    let cost=Pricing*(100-Discount)/100;
    return(
        <>
            <div className="flex flex-col text-center w-[200px] m-2 font-Ubuntu border-2 rounded-[10px] drop-shadow-2xl pb-[20px] shadow-lg">
            <img src={require("../ProductImages/Product1.jpg")} alt="Product" width={100} height={100} className="self-center"/>
                <div className="text-lg font-bold">
                    {Name}
                </div>
                <div className='text-base'>
                    {Description}
                </div>
                <div>
                    <p>
                    <del className="font-light">&#8377;{Pricing}</del> 	&#8377;{cost}
                    <p className="text-orange-700">
                        {Discount}% off
                    </p>
                    </p>
                </div>
                <div className="Review">
                    <span className="rev_in fas fa-star"></span>
                    <span className="rev_in fas fa-star"></span>
                    <span className="rev_in fas fa-star"></span>
                    <span className="rev_in fas fa-star"></span>
                    <span className="rev_in fas fa-star"></span>
                </div>
            </div>
        </>
    )
}
export {Tiles};