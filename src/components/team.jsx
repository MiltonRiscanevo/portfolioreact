import React, { Fragment, useState } from 'react';

const Team = () => {
    const [data, setData] = useState(
        {
            name:"",
            lastname:"",
            typedata:"",
            number:""

        }
    )

    const handleInputChange= (e)=> {
        // console.log(e.target.value);

        setData({
            ...data,
            [e.target.name]:e.target.value
        })
    }

    const signData= (e)=>{
        e.preventDefault()
        console.log(data.name+ " "+data.lastname);
    }
    
    return (
            <Fragment>
                <h1>AQUI ENCONTRARAS INFORMACION MUY RELEVANTE`</h1>
                <form action="" onSubmit={signData}>
                    <div> 
                        <input 
                        type="text" 
                        placeholder="name" 
                        name="name"
                        onChange={handleInputChange}
                        />
                     </div>
                    <div>
                        <input 
                        type="text" 
                        placeholder="last name" 
                        name="lastname"
                        onChange={handleInputChange}
                        />
                    </div>
                    <div>
                    <input type="password" />
                    <input 
                    type="number"
                    name="number"
                    onChange={handleInputChange} />
                    </div>

                    <div>
                        <button type="submit" > signup</button>
                    </div>

                    <p>{data.number}</p>
                </form>
            </Fragment>     
            
            
  
      );
}
 
export default Team;