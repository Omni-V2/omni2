const Page = () => {
    return ( 
    <div className="w-full flex justify-center items-center ">
        <div className="flex flex-col items-center shadow gap-10">
            <h1 className="text-[35px]">OmniMarket Seller Panel</h1>
            <img src="" alt="" />
            <img className="w-[]" src="https://shorturl.at/luIO6" alt="" />
            <div className="flex flex-row gap-48">
            <div className="w-[234px] h-[56px]">
        <button className="bg-red text-white w-full h-full rounded-md"><a href="/SellerComp/Manage">Manage Products</a></button>
    </div>
    <div className="w-[234px] h-[56px]">
        <button className="bg-red text-white w-full h-full rounded-md"> <a href="SellerComp/sellerAdd" >Add Product</a> </button>
    </div>
            </div>
        </div>
    </div>
 );
}
 
export default Page;
