import { useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredCartList, getStoredWishList, removeAllItem } from '../Utility/addToDb';
import StoredCart from '../StoredCart/StoredCart';
import WishList from '../WishList/WishList';    
import { GrSort } from 'react-icons/gr';

import sucessImg from '../../assets/picture/Group.png'

const Dashboard = () => {

    useEffect(()=>{
        document.title = "Dash Board"
    },[])
    const [cartList, setCartList] = useState([])

    const [wishList, setWishList] = useState([])
    const [sumPrice, setSumPrice] = useState(0)
    const navigate = useNavigate()


    const allData = useLoaderData()

    useEffect(() => {
        const storedCartList = getStoredCartList()

        const cartList = allData.filter(cart => storedCartList.includes(cart.product_id))

        setCartList(cartList)

        let total= 0
        cartList.map(item=> total+= item.price)
        setSumPrice(total)

    }, [allData])

    useEffect(() => {
        const storedCartList = getStoredWishList()

        const wishList = allData.filter(cart => storedCartList.includes(cart.product_id))

        setWishList(wishList)

    }, [allData])

    const handleSort = () => {
            const sortedPrice = [...cartList].sort((a,b) => b.price - a.price)
            setCartList(sortedPrice)
    }

    const handleClose = () =>{
        navigate('/')
        removeAllItem()
    }



    return (
        <div>
            <Tabs>
            <div className='banner-container w-full bg-color-01 text-white'>
                <div className="hero items-start h-[250px]">
                    <div className="hero-content text-center">
                        <div className="w-10/12 mx-auto pt-4">
                            <h1 className="text-4xl font-bold">Dashboard</h1>
                            <p className="w-8/12 text-sm mx-auto py-6">
                                Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                            </p>
                           
                                <div className='pb-12'>
                                <TabList>
                                    <Tab><span className='btn btn-outline'>Cart</span></Tab>
                                    <Tab><span>WishList</span></Tab>
                                </TabList>
                                </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="tab-container">
                


                    <TabPanel>

                    <div className="header w-10/12 mx-auto flex justify-between py-5">
                <h1 className="font-bold">Cart</h1>
                <div className="flex gap-3 items-center">
                    <h3>Total Cost: {sumPrice}</h3>
                    <button onClick={handleSort} className="border border-color-01 w-40 pl-3 h-10 color-01 flex gap-2 items-center   rounded-4xl">
                        Sort by Price 
                        <span><GrSort /></span></button>
                    <button onClick={()=>document.getElementById('my_modal_1').showModal()} className="btn w-36 bg-color-01 text-white border-none rounded-4xl">Purchase</button>
                    <dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    <img className='mx-auto' src={sucessImg} alt="" />
    <h3 className="font-bold text-lg text-center">Payment Successfully</h3>
    <hr className='border border-gray-200 mt-3' />
    <p className="text-center pt-2 color-02">Thanks for purchasing</p>
    <p className="py-2 text-center color-02">Total: {sumPrice}</p>
    <div className="modal-action justify-center">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button onClick={handleClose} className="btn w-56">Close</button>
      </form>
    </div>
  </div>
</dialog>

                </div>
            </div>
                        <div className='w-10/12 mx-auto flex flex-col gap-5 py-5'>
                            {
                                cartList.map(list => <StoredCart key={list.product_id} list={list}></StoredCart>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                    <div className="header w-10/12 mx-auto flex justify-between py-5">
                    <h1 className="font-bold">Wish List</h1>
                    </div>
                        <div className='w-10/12 mx-auto flex flex-col gap-5 py-5'>
                            {
                                wishList.map(list => <WishList key={list.product_id} list={list}></WishList>)
                            }
                        </div>
                    </TabPanel>
               
            </div>
            </Tabs>
        </div>
    );
};

export default Dashboard;