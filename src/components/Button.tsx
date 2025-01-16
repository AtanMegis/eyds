export default function Button({ title, isActive, onClick }) {
    return (
        <button
            onClick={onClick}
            className={`w-full max-w-52 h-12  text-clamp_sm min-w-28 transition-all duration-300   ${
                isActive
                    ? 'bg-solidOrange text-white shadow-md shadow-black  border-gray-200 border'
                    : 'bg-white text-solidOrange hover:bg-solidOrange hover:text-white'
            } rounded-md text-center`}
        >
            {title}
        </button>
    )
}
