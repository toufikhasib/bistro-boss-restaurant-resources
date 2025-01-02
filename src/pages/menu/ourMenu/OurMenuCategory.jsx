import MenuItem from "../../sharde/menuItem/MenuItem";


const OurMenuCategory = ({items}) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 my-10'>
        {items.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
        ))}
    </div>
    );
};

export default OurMenuCategory;