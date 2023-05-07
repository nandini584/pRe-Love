// first we need to understand what the query is and what is this queryStr exactly
//http://localhost:8080/store/products?keyword=Red?keyword 
//  in this the query is search=Red shirt so what we are doing is we set up query as keyword and Red as queryStr

class ApiFeatures {
    constructor(query, queryStr){
        this.query = query;
        this.queryStr = queryStr; //this.query is profuct.find over here always
    }
    search() {
        const keyword = this.queryStr.keyword ? {
            name :{
                $regex : this.queryStr.keyword,//regex is a mongo db operator which is used to create regular expressions
                $options : "i" //to make it case insensitive          
            }
        } : {}

        this.query.find({...keyword})
        return this;
    }

    filter(){
        const queryCopy = {...this.queryStr}
        //removing some fields or category
        const removeFields = ["keyword","page","limit"];
        removeFields.forEach((key) => delete queryCopy[key])

        // filters for Price and Rating

        let queryStr = JSON.stringify(queryCopy)
        queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (key) =>`$${key}`)
        this.query = this.query.find(JSON.parse(queryStr))

        return this;
    }

    pagination(resultPerPage) {
        const currentPage = Number(this.queryStr.page) || 1;
    
        const skip = resultPerPage * (currentPage - 1);
    
        this.query = this.query.limit(resultPerPage).skip(skip);
    
        return this;
      }
}

export default ApiFeatures;