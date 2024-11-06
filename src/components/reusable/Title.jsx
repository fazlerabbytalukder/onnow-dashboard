import FilterButton from "./FilterButton";

const Title = ({ titleMain, titleSub, filter }) => {
    return (
        <div className="flex flex-col 2xl:flex-row justify-between items-start 2xl:items-center gap-2">
            <h3 className="text-xl font-bold text-[#222]"><span className="border-b-2 border-b-primary">{titleMain}</span> {titleSub}</h3>
            {filter ? (
                <div className="flex items-center gap-2">
                    <FilterButton
                        selected="January"
                        selectArray={["February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]}
                    />
                    <FilterButton
                        selected="Select on Outlet"
                        selectArray={["outlet one", "outlet two"]}
                    />
                </div>
            ) : ""}
        </div>
    );
};

export default Title;