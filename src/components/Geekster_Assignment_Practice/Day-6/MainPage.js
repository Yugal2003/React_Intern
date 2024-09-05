// import React, { useState } from 'react';

// const MainPage = ({ quantity, setQuantity, products, setProducts }) => {
//   const [total, setTotal] = useState(0);

//   const clickIncrease = (id) => {
//     let totalPro = [...products];
//     totalPro.map((pro) => {
//       if (pro.id === id) {
//         pro.quantity++;
//         let temp = parseInt(total) + parseInt(pro.price);
//         setTotal(temp);
//         setQuantity(quantity + 1);
//       }
//       return pro;
//     });
//     setProducts(totalPro);
//   };

//   const clickDecrease = (id) => {
//     let totalPro = [...products];
//     totalPro.map((pro) => {
//       if (pro.id === id && pro.quantity >= 1) {
//         pro.quantity--;
//         let temp2 = parseInt(total) - parseInt(pro.price);
//         setTotal(temp2);
//         setQuantity(quantity - 1);
//       }
//       return pro;
//     });
//     setProducts(totalPro);
//   };

//   const clickRemove = (id) => {
//     let totalPro = [...products];
//     let temp3 = totalPro.filter((pro) => {
//       if (pro.id === id) {
//         setTotal(parseInt(total) - parseInt(pro.price * pro.quantity));
//         setQuantity(quantity - pro.quantity);
//       }
//       return pro.id !== id;
//     });
//     setProducts(temp3);
//   };

//   const clickRemoveAll = () => {
//     setProducts([]);
//     setQuantity(0);
//     setTotal(0);
//   };

//   return (
//     <div>
//       <div
//         style={{
//           display: 'flex',
//           flexDirection: 'column',
//           justifyContent: 'center',
//           alignItems: 'center',
//           width: '100vw',
//           marginInline: 'auto',
//         }}
//       >
//         <h1>Your Bag</h1>
//         {products.length <= 0 ? (
//           <h2>Your Cart Is Empty</h2>
//         ) : (
//           products.map((ele, index) => {
//             return (
//               <div key={index} style={{ display: 'flex', gap: '4rem', marginTop: '1rem' }}>
//                 <img width={120} src={ele.img} alt='' />
//                 <div>
//                   <h2>{ele.title}</h2>
//                   <h2>{ele.price}</h2>
//                   <button onClick={() => clickRemove(ele.id)}>Remove</button>
//                 </div>
//                 <div>
//                   <button onClick={() => clickIncrease(ele.id)} style={{ padding: '0.3rem' }}>
//                     +
//                   </button>
//                   <h2>{ele.quantity}</h2>
//                   <button onClick={() => clickDecrease(ele.id)} style={{ padding: '0.3rem' }}>
//                     -
//                   </button>
//                 </div>
//               </div>
//             );
//           })
//         )}
//         <div
//           style={{
//             display: 'flex',
//             justifyContent: products.length >= 1 ? 'space-between' : 'center',
//             width: '60vw',
//             marginTop: '2rem',
//           }}
//         >
//           <div style={{ display: 'flex' }}>
//             <h1>Total :</h1>
//             <h1>{total}</h1>
//           </div>
//           {products.length >= 1 && (
//             <div>
//               <button onClick={clickRemoveAll}>Remove All</button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MainPage;
