
import React,{useState} from 'react';

const Form2 = () => {


    return(
    <div>
        <form 
        id="form1"
        enctype="multipart/form-data" 
        method="post" 
        action="http://127.0.0.1:8000/imagePost/Imageapi/" 
        >
            
        <input type="text" name="title" />
        <input type="file" name="picture" id="input"/>
        <input type="submit" value="Upload2" />
        </form> 

    </div>
    )
}

export default Form2