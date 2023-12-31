const Page = () => {
    return ( 
    <div className="w-full flex justify-center items-center ">
        <div className="flex flex-col items-center shadow gap-10">
            <h1 className="text-[35px]">OmniMarket Seller Panel</h1>
            <img className="w-[]" src="https://th.bing.com/th/id/R.ccda6a16190b14631685a53e8d551262?rik=I4CDx746JEtoIA&riu=http%3a%2f%2ftherationalkitchen.com%2fwp-content%2fuploads%2f2018%2f05%2fBuyingOnlineGraphic.jpg&ehk=a77fnGPuznETKzzbYn94Kxunp9EZ9OMLJyqXJYkIBWw%3d&risl=&pid=ImgRaw&r=0" alt="" />
            <div className="flex flex-row gap-48">
            <div className="w-[234px] h-[56px]">
        <button className="bg-red text-white w-full h-full rounded-md"><a href="/SellerComp/Manage">Manage Products</a></button>
    </div>
    <div className="w-[234px] h-[56px]">
        <button className="bg-red text-white w-full h-full rounded-md"></button>
    </div>
            </div>
        </div>
    </div>
 );
}
 
export default Page;
