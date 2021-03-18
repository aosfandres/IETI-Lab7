exports.handler = async (event) => {
    
    var message="";
    switch(event.httpMethod){
        case "GET":
            message = tasks;
            break;
            
        case "POST":
            message = "Tarea recibida";
            tasks.push(JSON.parse(event.body));
    }
    
    const response= {
        statusCode:200,
        body: JSON.stringify(message),
    };
    return response;
};

const tasks= 
  [ { "description": "Hacer lo hacible",
          "responsible": {
            "name": "Andres Sotelo",
            "email": "andres@gmail"
          },
          "status": "Ready",
          "dueDate": 156464645646
        }, {
          "description": "Comer lo comible ",
          "responsible": {
            "name": "Andres Sotelo",
            "email": "andres@gmail"
          },
          "status": "Ready",
          "dueDate": 156464645646
        }, {
          "description": "Dormir durmiendo",
          "responsible": {
            "name": "Andres Sotelo",
            "email": "andres@gmail"
          },
          "status": "Ready",
          "dueDate": 156464645646
        }, {
          "description": "trabajr lo trabajable ",
          "responsible": {
            "name": "Andres Sotelo",
            "email": "andres@gmail"
          },
          "status": "Done",
          "dueDate": 156464645646
        }, {
          "description": "beber lo beblible ",
          "responsible": {
            "name": "Andres Sotelo",
            "email": "andres@gmail"
          },
          "status": "Done",
          "dueDate": 156464645646
        }];