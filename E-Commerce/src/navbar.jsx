import './navbar.css';

function navbar() {
    return (
        <>
            <div className="navigation-bar">
                <div className="right-nav"> <a> Fashion Table </a> </div>
                <nav>
                
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Women</a></li>
                    <li><a href="#">Men</a></li>
                    <li><a href="#">Jwelery</a></li>
                    <li><a href="#">Shoes</a></li>
                    <li><a href="#">Accessories</a></li>
                </nav>
            </div>

            <img src='/src/images/fashion-bg-1.jpg'className='bg-img'/>

            <div className="scroll-container">
                <div className='scroller'> Be Bold, Be unforgettable </div>
                
            </div>
            <div className="scroll-container">
            
            </div>

            <div className="products">
                <div className="product">
                    <img src='https://images.unsplash.com/photo-1561370177-29f3dc0b3536?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fGZhc2hpb24lMjB3YWxrfGVufDB8fDB8fHww'/>
                    <button className='add'> View Product </button>
                </div>
                <div className="product">
                    <img src='https://plus.unsplash.com/premium_photo-1721742733156-736e11c918bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM3fHxmYXNoaW9uJTIwd2Fsa3xlbnwwfHwwfHx8MA%3D%3D' />
                    <button className='add'> View Product </button>
                </div>
                <div className="product">
                    <img src='https://images.unsplash.com/photo-1542719018-ee28cbdc71ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjMyfHxmYXNoaW9uJTIwd2Fsa3xlbnwwfHwwfHx8MA%3D%3D'/>
                    <button className='add'> View Product </button>
                </div>

            </div>
        </>
    )
}

export default navbar;