import React from 'react'
import './Section3.css'

function Section3 () {
    return (
        <div className="main">
            <div className="main-section3">
                <div className="main-section3-left">
                    <div className="main-section3-left-cointainer-top">
                        <div className="head">
                            <h2>Apply Now !</h2>
                        </div>
                        <div className="inputs">
                            <input type="text" placeholder='Enter Full Name' className="name" />
                            <input type="text" placeholder='Enter Contact Number' className="number" />
                            <input type="text" placeholder='Address' className="add" />
                        </div>
                        <select name="Class" className="class">
                              <option value="For Class1">Class1</option>
                              <option value="Class2">Class2</option>
                              <option value="Class3">Class3</option>
                              <option value="Class4">Class4</option>
                              <option value="Class5">Class5</option>
                              <option value="Class6">Class6</option>
                              <option value="Class7">Class7</option>
                              <option value="Class8">Class8</option>
                              <option value="Class9">Class9</option>
                              <option value="Class10">Class10</option>
                              <option value="Class11">Class11</option>
                              <option value="Class12">Class12</option>
                        </select>
                        <div className="inputs">
                            <input type="text" placeholder='Remarks If Any..' className="remarks" />
                        </div>
                        <div>
                            <button className="udaipur-button">Submit</button>
                        </div>
                    </div>
                </div>
                <div className="main-section3-right">
                    <div>
                        <h2>Empower Udaipur's Brightest Minds: Join GD Home Tutors Today!</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section3;