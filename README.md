# api_finve_prue
CREAR PRODUCTO 

sobre productos se puede crear   descripcion de producto tambien si tiene promocion  

http://localhost:4000/createproduct


 {
 "name" : "new product 1 ",
 "price" : 189.25,
 "img" : "https://media.tiffany.com/is/image/Tiffany/EcomItemL2/cadena-de-oro-de-18k-33483988_1057199_ED.jpg?&op_usm=1.0,1.0,6.0&$cropN=0.1,0.1,0.8,0.8&defaultImage=NoImageAvailableInternal&&defaultImage=NoImageAvailableInternal&fmt=webp",
 "storeId" : "44be0bf6-2209-4176-a3cf-89eb2f46e307"

}


CREAR TIENDA 

 En esta ruta se puede escalar con horario de tienda y ofertas 
 

http://localhost:4000/Store

 {
    "store" : "new store2",
    "location" : "Almacenes El Sol, Av. Miguel Hidalgo Ote. 107, Centro, 50000 Toluca de Lerdo, Méx."
 }


 Create user 

 http://localhost:4000/users/Create

 {
    "name" : "new use3 ",
    "email" : "anewu1s1er2@gmail.com",
    "password" : "thenewuseris1"
}


Carrito de compras 


http://localhost:4000/neworder

{
  "userId": "30825fed-a859-4dcf-9bb2-c1d4395de348",
  "storeId": "44be0bf6-2209-4176-a3cf-89eb2f46e307",
  "items": [
    {
      "productId": "67358b56-37dd-4b2f-b8f0-1032a5d5f288",
      "quantity": 3
    },
    {
      "productId": "67358b56-37dd-4b2f-b8f0-1032a5d5f288",
      "quantity": 1
    }
  ],
  "totalQty" : 2 ,
  "totalPrice" : 1253.36
  
}