export default function Product({ titleProduct, productDescription, productVideo, productLines }) {
    return (
        <>
            <div className="grid w-full max-w-7xl place-self-center h-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-white py-8">
                <div className="flex flex-col gap-2 w-full h-fit col-span-2 ">
                    <div className="flex gap-2">
                        <span className="h-6  border-r-[3px] border-white"></span>
                        <h1 className="text-solidOrange text-clamp_md font-bold">{titleProduct}</h1>
                    </div>
                    <p>{productDescription}</p>
                </div>
                <div className="flex justify-center items-start rounded-md  w-full max-w-full h-full row-span-2 col-span-2 md:col-span-1 relative ">
                    <iframe
                        src={productVideo}
                        title="YouTube Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="w-full max-w-full min-h-64 rounded-md overflow-hidden border-white border"
                    />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 col-span-2">
                    {productLines &&
                        productLines.map((item: any) => {
                            return (
                                <div key={item.id} className="flex flex-col gap-2 p-4 border rounded-md">
                                    <h2 className="font-bold">{item?.productLineTitle}</h2>
                                    <p className="text-sm">{item?.productLineDescription}</p>
                                </div>
                            )
                        })}
                </div>
            </div>
        </>
    )
}
