

export const fnfavorito = (name, image) => {


    console.log('si entra');
                   
        
    const newFavorite={
        img:name,
        name:image
    };
  

    const action ={
        type:'ADD',
        payload:newFavorite
    };

    //dispatche(action);
    
}

