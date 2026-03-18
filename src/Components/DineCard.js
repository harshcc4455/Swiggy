export default function DineCard({ RestData }) {
  return (
    <div className="max-w-sm flex-none">
     <a target="_blank"  href={RestData?.cta?.link}>

       <div className="relative">
        <img
          className="w-80 h-[200px] object-cover rounded-lg"
          src={RestData?.info?.mediaFiles[0]?.url}
        />

      
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black to-transparent z-10 rounded-b-lg"></div>

      
        <p className="absolute bottom-4 left-4 text-2xl text-white z-20">
          {RestData?.info?.name}
        </p>

        <p className="absolute bottom-4 right-4 text-2xl text-white z-20">
          {RestData?.info?.rating?.value}
        </p>
      </div>
      </a>
    </div>
  );
}