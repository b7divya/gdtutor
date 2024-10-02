import React from 'react'
import './Section2.css'

function Section2 () {
    return (
            <div className="main-section2">
                <div className="main-section2-left">
                    <div className="main-section2-left-top">
                        <h2>GD Home Tutor</h2>
                    </div>
                    <div className="main-section2-left-middle">
                        <h3>We offer </h3>
                    </div>
                    <div className="main-section2-left-bottom">
                        <ol><p>Personalize Learning</p>
                            <p>Enhanced Focus</p>
                            <p>Immediate Feedback</p>
                            <p>Tailored Learning Pace</p>
                            <p>Parental Involvement</p>
                            <p>Building Confidence</p></ol>
                    </div>
                </div>
                <div className="main-section2-right">
                    <div className="main-section2-right-cointainer-top">
                        <div className="head">
                            <h2>Book A Tutor</h2>
                        </div>
                        <div className="inputs">
                            <input type="text" placeholder='Enter Full Name' className="name" />
                            <input type="text" placeholder='Enter Mobile Number' className="number" />
                            <input type="text" placeholder='Address' className="add" />
                        </div>
                        <select name="Class" className="class">
                              <option value="Class1">Class1</option>
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
            </div>
    )
}

export default Section2;