import Image from "next/image";
const  img= ({img,sales}) => {
    return ( 
        <div className="relative w-72 h-64 bg-lightgrey flex items-center justify-center">
        {sales !== 0 && (
          <div className="absolute top-1 left-1 bg-red text-white p-2 rounded">
           -{sales}%
          </div>
        )}
        <Image width={172} height={152} src={img[0]} alt="" />
      </div>
    );
}
 
export default img;