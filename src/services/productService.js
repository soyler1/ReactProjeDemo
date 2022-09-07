import axios from "axios";

export default class ProductService{
    getProducts(){
        return axios.get("https://localhost:8080/api/products/getAll");
    }
}