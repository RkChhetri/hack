import React, { useState,useEffect } from 'react';

import './Contact.css';
import home1 from './pictures/home1.jpg';


export default function Contact() {



  useEffect(() => {
    // Apply body styles for Login page
 
    document.body.style.minHeight = "100vh";
    document.body.style.margin = "0";
    document.body.style.background = `url(${home1}) no-repeat center`;
    document.body.style.backgroundSize = "cover";


    // Cleanup on unmount
    return () => {
      document.body.style = "";
    };
  }, []);
    return (<>
        <br></br>




        <div className="container">
            <div className="row">
               
                <div className="col-md-6 mx-auto">
                    <div className="card">
                        <div className="card-body">
                           
                            <div className="row">
                                <div className="col">
                                    <center><h3><b>Contact us</b></h3></center>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <hr />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <label>Name:</label>
                                    <div className="form-group">
                                        <input type="text" placeholder='Name' className="form-control" id="txt_Fullname"  />
                                    </div>
                                </div>
                               
                            </div>
                            <div className="row">
                            <div className="col-md-12">
                                    <label>Email</label>
                                    <div className="form-group">
                                    <input type="text" placeholder='Email' className="form-control" id="txt_Email"  />
                                    </div>

                                </div>
                              

                            </div>
                            <div className="row">
                            <div className="col-md-12">
                                    <label>Description:</label>
                                    <div className="form-group">
                                    
                                    <textarea class="form-control"  placeholder='Description'  id="txt_Description" rows="3"></textarea>
                                    </div>

                                </div>
                              

                            </div>






                           

                        </div>


                        









                   

                    </div>


                </div>
            </div>
        </div>
        <div>


        </div>
















    </>

    );
}