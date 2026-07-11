const API_URL = "http://localhost:5000/api";


// GET Request
export const getData = async (url) => {

    try {

        const response = await fetch(
            `${API_URL}${url}`
        );

        const data = await response.json();

        return data;

    } catch(error){

        console.log(
            "API Error:",
            error
        );

    }

};



// POST Request
export const postData = async (url, body) => {

    try {

        const response = await fetch(
            `${API_URL}${url}`,
            {
                method:"POST",

                headers:{
                    "Content-Type":"application/json"
                },

                body:JSON.stringify(body)
            }
        );


        const data = await response.json();

        return data;


    } catch(error){

        console.log(
            "API Error:",
            error
        );

    }

};



// DELETE Request
export const deleteData = async (url)=>{

    try{

        const response = await fetch(
            `${API_URL}${url}`,
            {
                method:"DELETE"
            }
        );


        const data = await response.json();

        return data;


    }catch(error){

        console.log(
            "API Error:",
            error
        );

    }

};