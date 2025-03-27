//callAPI
export function callAPI(reqmethod, url, data, reponseHandler){

  //based on the endpoints we need to define option to call the API
  var option;

  //GET and DELETE do not require body
  if(reqmethod === "GET" || reqmethod === "DELETE")

         option = {method:reqmethod, headers: {'content-type':'application/json'}};
  else
          //POST and PUT methods require body
         option = {method:reqmethod, headers: {'content-type':'application/json'}, body: data};
  
         fetch(url, option) //same as axios.get() but no installation required
              //if fetch successful
              .then(response =>{
                  //if response is not ok throw error message
                  if(!response.ok)
                      throw new Error(response.status + " " + response.statusText);
                  
                  //everything ok. return server message
                  return response.text();
              })
              //forward the data to responseHandler
              .then(data =>reponseHandler(data))
              
              //if any error catch() catches, forward to alert()
              .catch(error => alert(error));
 
}