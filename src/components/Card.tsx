export default function Card({ img, icon, title, desc }) {
    return (
        <div className="peer group-hover:opacity-50 hover:!opacity-100 transition-opacity duration-300 flex flex-col w-full h-[425px] bg-white rounded-sm overflow-hidden shadow-md drop-shadow-sm">
            <div className="flex flex-col w-full h-[180px] bg-gray-300">
                <img
                    loading="lazy"
                    src={img}
                    alt="banner"
                    className="w-full max-w-full object-cover h-[180px] overflow-hidden"
                />
            </div>
            <div className="flex flex-col gap-2 justify-start p-3 min-h-full">
                <div className="flex items-center gap-2 min-h-12">
                    <img src={icon} alt="icon" className="size-4 object-cover max-w-full h-auto" />
                    <h1 className="font-semibold text-clamp_sm">{title}</h1>
                </div>
                <p className="line-clamp-7 text-clamp_sm">{desc}</p>
            </div>
        </div>
    )
}
