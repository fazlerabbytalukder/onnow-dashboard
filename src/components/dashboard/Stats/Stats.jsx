const Stats = () => {
    return (
        <div className="bg-white p-[20px] mx-2 md:mx-10 mt-4 rounded-[15px]">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-1 xl:gap-5">
                <div className="stats-card flex justify-start">
                    <div>
                        <span>Total orders</span>
                        <h3>136</h3>
                    </div>
                </div>
                <div className="stats-card flex justify-start lg:justify-center">
                    <div>
                        <span>Total sales</span>
                        <h3>32652৳</h3>
                    </div>
                </div>
                <div className="stats-card flex justify-start lg:justify-center">
                    <div>
                        <span>Dispatched Order</span>
                        <h3>32652৳</h3>
                    </div>
                </div>
                <div className="stats-card flex justify-start lg:justify-center">
                    <div>
                        <span>Avg. basket value</span>
                        <h3>370৳</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stats;