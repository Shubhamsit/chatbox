class ApiResponse extends Error {

    constructor(
        statusCode,
        data,
        message="Success",
      
        

    )
    {
      
        this.data=data;
        this.message=message
        this.success =statusCode <400
        this.errors=erro

    

    }


}

export {ApiResponse}