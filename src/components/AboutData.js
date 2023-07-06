<div className="container my-5 mx-auto" style={myproject}> 
<form className="form my-3 p-5  ">
        <fieldset>

             <div id="user" style={h2}>
             <h2><u>Welding Process</u></h2>
             </div>
         
         <div className="user my-4 ">
              <label>Welding Process</label>
             <select id="WELDINGPROCESS">
                 <option value="Shield Gas">MIG</option>
                 <option  value="Purging Gas">TIG</option>
                 <option  value="Plasma Gas ">Plasma</option>
             </select>

              <div className="user my-4">
                 <label>Voltage</label>
                 <input type="number" id="voltage " required/>

              </div>
         </div>

             <div className="user my-4 ">
                 <label className="Current">Current</label>
                 <input type="number" id="Current" className="input l-3"  required/>
                 
                 <label  className="input x-3" >Gas Flow</label>
                 <input type="number" id="GasFlow" className="input " required/>
                 
             </div>

                 <div className="user my-4">
                     <label>Preheat Temp</label>
                     <input type="number" id="Preheat"  required/>
                     
                     <label className="WIREFEEDSPEED">Wire Feed Speed</label>
                     <input type="number" id="WIREFEEDSPEED"  required/>

                 </div>

                 <label className="Wire">Wire Diameter</label>
                 <input type="number"  id="Diameter" placeholder="Wire Diameter"  required/>

               
               
             <div id="basematerial-1" className="user my-4" >

             <p><b><u>Base Material 1</u></b></p>
             
             <label className="user my-4">Composition</label>
             <input type="text" id="Composition1" placeholder="Composition"  required/>

             <label>Thickness</label>
             <input type="number" id="Thickness1" placeholder="Thickness"  required/>

             <div id="basematerial-2">

             <p><b><u>Base Material 2</u></b></p>
             <label className="user my-4">Composition</label>
             <input type="text" id="Composition2" placeholder="Composition"  required/>

             <label>Thickness</label>
             <input type="number" id="Thickness2" placeholder="Thickness"  required/>


           
         </div>

         <div id="fillermaterial" className="user my-4">
             <label className="material-1">Filler Material Composition</label>
             <input type="text" id="Composition1" placeholder="Composition"  required/>

         </div>

        <div id="gasmaterial" >

             <label>Gas Material Composition</label>
             <input type="text" id="composition2" placeholder="Compositiuon"  required/>

          </div> 
        </div>
    {/* </div>
    </div> */}
    


                
          <div className="document" style={upload}>
            <h4  className="document my-5 mx-center"><u>Upload document</u></h4>
          </div>  
        

         <div className="user">
           

         <form action="#">
            <p style={p}>CSV File</p>
            <input type="file" className="file-input" required/>
          </form>
        
        
         <form action="#"  className="document my-3"> 
             <p style={p}>WPS File</p>
             <input type="file" className="file-input" required/>
            
         </form>
        </div>  
 
            
            <div className="user">
            <form action="#" className="document my-3">
                <p style={p}>Before Process</p>
                <input type="file" className="file-input" required/>
               
            </form>
            
    
            <form action="#" className="document my-3">
                <p style={p}>After Process</p>
                <input type="file" className="file-input" required/>
                
            </form>
           
             </div>
          

            <form action="#" className="user-name-1">
                <p style={p}>Other</p>
                <input type="file" className="file-input" id="Other" required/>
                
            </form>


           
            
            {/* <h4>Rating</h4>
            <div className="Rating my-3">
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
            </div> */}




         <div className="container my-5" >
            
         <button className="btn btn-primary my-5">Submit</button>

         </div>
         
        </fieldset>
        </form>
        </div>