async function get(){
    const response = await fetch(` https://forkify-api.herokuapp.com/api/search?q=pizza
     ` );
    const data = await response.json();
    const recipes=data.recipes; 
 
    const result =recipes.map(function(user){
 
     return `
     <div>
     <h2>${user.title}</h2>
     <img src="${user.image_url}"/> 
     </div>
     
     `;
 
 
    }) .join('');
 
 document.querySelector(".Home").innerHTML=result;
 
 
 }
 
 get();