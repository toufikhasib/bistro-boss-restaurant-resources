import OrderFoodCard from "../../sharde/orderFoodCard/OrderFoodCard";


const OrderCategory = ({items}) => {
    // console.log('salad item',items)
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                items.map(item=> <OrderFoodCard orderCard={item} key={item._id}></OrderFoodCard>)
            }
        </div>
    );
};

export default OrderCategory;