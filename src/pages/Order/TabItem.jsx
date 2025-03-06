import React, { useState } from 'react';
import Foodcard from '../Shared/FoodCard/Foodcard';

const TabItem = ({ items }) => {
    const itemsPerPage = 6;
    const [currentPage, setCurrentPage] = useState(0);

    // Calculate the total number of pages
    const totalPages = Math.ceil(items.length / itemsPerPage);

    // Slice the items to show only the ones for the current page
    const startIndex = currentPage * itemsPerPage;
    const paginatedItems = items.slice(startIndex, startIndex + itemsPerPage);

    // Handle page change
    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    return (
        <div>
            {/* Grid for menu items */}
       
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {paginatedItems.map(item => (
                    <Foodcard key={item._id} item={item} />
                ))}
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center mt-4 space-x-2">
    {/* Prev Button */}
    <button 
        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 0))}
        className={`w-10 h-10 flex items-center justify-center border rounded ${
            currentPage === 0 ? 'bg-gray-300 text-gray-600 cursor-not-allowed' : 'bg-orange-500 text-white'
        }`}
        disabled={currentPage === 0}
    >
        &#9664; {/* Left Arrow Symbol */}
    </button>

    {/* Page Numbers */}
    {Array.from({ length: totalPages }, (_, index) => (
        <button 
            key={index} 
            onClick={() => handlePageChange(index)}
            className={`w-10 h-10 flex items-center justify-center border rounded ${
                currentPage === index ? 'bg-orange-500 text-white' : 'bg-gray-200'
            }`}
        >
            {index + 1}
        </button>
    ))}

    {/* Next Button */}
    <button 
        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages - 1))}
        className={`w-10 h-10 flex items-center justify-center border rounded ${
            currentPage === totalPages - 1 ? 'bg-gray-300 text-gray-600 cursor-not-allowed' : 'bg-orange-500 text-white'
        }`}
        disabled={currentPage === totalPages - 1}
    >
        &#9654; {/* Right Arrow Symbol */}
    </button>
</div>

        </div>
    );
};

export default TabItem;
