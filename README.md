# harry-app



Este proyecto presenta una aplicación, dónde encontraremos los personajes de la saga Harry Poter, nos permite filtrar para visualizar estudiantes o personal del staff. Ademas proporciona diferentes funcionalidades como es agregar a no más de 5 personajes en una lista de favoritos, podra agregar un nuevo personaje para visualizar su tarjeta correspondiente, en basé a la información de cada personaje podemos cambiar el color de su tarjeta por casa a la que pertenece, o cambio de color a gris en apartado de información para los personajes que han muerto.


## Comenzando 🚀  
  
### Usuario:
Se puede ingresar a la aplicación por medio de la siguiente liga, https://quizzical-perlman-50d8e3.netlify.app/ , no requiere ningún tipo de usuario o contraseña para ingresar a sus diferentes apartados, no se requiere configuración adicionales para visualizar en diferentes dispositivos. El proyecto se encuentra alojado en el siguiente  repositorio de GitHub: https://github.com/sofiagaona/harry-app, Se puede hacer un fork del proyecto para clonarlo e instalarlo localmente, se requiere realzar un npm intstall, para instalar las dependencias donde se encontraran las diferentes librarías con las que se trabajo en el desarrollo, se pueden correr los test del proyecto con el comando npm run test desde consola. La aplicación consume un api mock json.server que se encuentra desplegado en heroku en la siguiente liga https://apiharry.herokuapp.com/characteres, esta url es utilizada en la aplicación para realizar peticiones get y post para obtener los personajes y para agregar uno nuevo, la db.json se encuentra alojada en el repositorio https://github.com/sofiagaona/apiHarry .   


  
### lo que más me gustó  del proyecto  
Es un proyecto muy completo que si bien se resume en algunas funcionalidades, se llega a tocar diferentes escenarios, desde el consumo de la api, el manejo de la información para el filtrado, se realizan test y requerimientos específicos de diseño. Me gusto mucho la parte de realizar la funcionalidad  de agregar a favoritos y poder utilizar herramientas como redux, me gustó trabajar el diseño de  las tarjetas dándole dinamismo con cambio de colores, etc..


### Qué hubiera mejorado o que más hubiera hecho
Termine de desarrollar toda las funcionalidades requeridas, pero me hubiera gustado mejorar más la parte de diseño, me gustaría desarrollar otra funcionalidad de las tarjetas que pueda dar click a una tarjeta y me abra la fotfuncionalidad de las tarjetas que pueda dar click a una tarjeta y me abra la fotografía del personaje mas grande y su información más detallada, de esta forma también se pudiera trabajar con rutas.


## pain points o Debug encontrados y como lo solucione
Me di cuenta que al agrgar un nuevo personaje, la información que se requeria en el modal no era suficiente para conseguir el manejo de su información  en las tarjetas y acciones como cambio de color de las tarjetas,por lo que agregue al modal dos campos más de información, la casa a la que pertenecian y si estava vivo o muerto. Otra cosa que me percate es que los personajes que ya se encontraban en la api no contaban con un id, el id nos hubiera ayudado a manejar algunas acciones de forma mas segura, los nuevos personajes que agregue les asigne un id.

