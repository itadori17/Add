import React from 'react'

function Inventorycontainer() {
  return (
    <div className='Inventorycontainer'>
          <div className='InventoryItems'>

               {/* <div className='Inventoryinput' >
                   <input type="text" placeholder='Search Inventory'  ></input>
               </div> */}
               
                    
                   <div className='container'>
        
                          <div className='cardrs'>
                       {
                      cards.map((card, i) => (
            <div key={i} className='cardz'>
            <h3>{card.title}</h3>
            <p>{card.price}</p>
           
            <div className='Image'>image container<img src={card.image} style={{width:"100%" ,height:"100%",margin:"auto",display:"flex",alignItems:"center",marginTop:"-18px"}}/></div>
              <div  className='inputs'>
                <div className='input'>
                  <span>-</span>
                    <   input type="text" placeholder='3'  ></input>
                 <span>+</span>
              </div>
                
                <div className='btns'>
             <button className='save'>Save</button>
              <button className='delete'>Delete</button>
              </div>
            </div>
          </div>
            ))
          }
          
        </div>
        </div>
    
          </div>
       </div>
  )
}

export default Inventorycontainer
