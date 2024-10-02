import React from 'react'
import './Menubar.css'
import GDLogo from '../../Images/GDLogo.png';

const Menubar = () => {
//   return (
//     <div className='menubar'>
//         <div className='menubar-container'>
//             <div className='menubar-container-left'>
//                 <button className='about'>About Us</button>
//                 <button className="intBtn">International Students</button>
//             </div>
//             <div className='menubar-container-center'>
//                 <div className='menubar-container-center-logo'>
//                     <img src={GDLogo} alt="udaipur home tutor" width="150" height="150" style={{ borderRadius: "50%" }} />
//                 </div>
//             </div>
//             <div className='menubar-container-right'>
//                 <button className="feeBtn">Fee Structure</button>
//                 <button className="tutorBtn">Tutor</button>
//             </div>
//         </div>
//     </div>
//   )

    return (
        <div className='menubar'>
            <div className='menubar-container'>
                <div className='menubar-container-logo'>
                    <img src={GDLogo} alt="udaipur home tutor" width="150" height="150" style={{ borderRadius: "50%" }} />
                </div>
                <div className='menubar-container-buttons'>
                    <button className='about'>About Us</button>
                    <button className="intBtn">International Students</button>
                    <button className="feeBtn">Fee Structure</button>   
                    <button className="tutorBtn">Tutor</button>
                </div>
            </div>
        </div>
    )
}

export default Menubar