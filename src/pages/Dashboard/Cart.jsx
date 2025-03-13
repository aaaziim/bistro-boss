import React from 'react'
import useCart from '../../hooks/useMenu/useCart'
import Swal from 'sweetalert2'
import useAxiosSecure from '../../hooks/useMenu/useAxiosSecure'

const Cart = () => {

    const [cart, refetch] = useCart()
    const axiosSecure = useAxiosSecure()

    const totalPrice = cart.reduce((total, item)=> total+=item.price, 0)

    const handleDelete = (id)=>{

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${id}`)
                 .then(response => {
                    console.log(response)
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                    refetch();
                  })
                 .catch(error => {
                    console.log(error)
                  });
          
            }
          });

    }

  return (
    <div>
        <h1 className="text-6xl font-bold text-center bg-amber-400 p-4 text-white">
            My Carts
        </h1>
      <div className='flex gap-4 justify-evenly p-4 bg-cyan-400 text-white'>
        <h1 className="text-4xl">Items : {cart.length}</h1>
        <h1 className="text-4xl">Total Price : {totalPrice}</h1>
        <button className="text-2xl bg-blue-500 hover:bg-blue-400 px-4 py-2 rounded-md">Checkout</button>
      </div>

      <div className="overflow-x-auto">
  <table className="table text-center w-full">
 
    <thead>
      <tr>
        <th>Sl</th>
        <th>Image</th>
        <th>Name</th>
        <th>Price</th>
        <th>Action</th> 
      </tr>
    </thead>
    <tbody>
    
     {
        cart.map((item, index) => (
            <tr key={index}>
                <td>{index + 1}</td>
                <td><img className='w-16 rounded-xl' src={item.image} alt="" /></td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td><button onClick={()=>handleDelete(item._id)} className="text-sm bg-red-500 hover:bg-red-400 px-4 py-2 rounded-md">Remove</button></td>
            </tr>
        ))
     }
    </tbody>
  </table>
</div>








    </div>
  )
}

export default Cart
