lista=[{ 
      username:"fernando",
      password:"fer.123",
      nivel:1  
    },
    {
      username:"raquel",
      password:"raq.123",
      nivel:2  
      }
  ]
localStorage.setItem("datos",JSON.stringify(lista));
usuarios=JSON.parse(localStorage.getItem("datos"));
console.log(typeof(usuarios));


function logo(){


}


