
const FilterButton = ({ selected, selectArray }) => {
    return (
        <div>
            <form className="mx-auto">
                <select
                    id="countries"
                    className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block px-1 py-1"
                >
                    <option value={selected} selected>{selected}</option>
                    {selectArray.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                    ))}
                </select>
            </form>
        </div>
    );
};

export default FilterButton;