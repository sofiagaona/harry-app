# harry-app

# apiHarry

Este proyecto presenta una aplicación, donde encontraremos los personajes de la saga Harry Poter, donde podremos filtrar para visualizar estudiantes o personal del staff. Ademas proporciona difrentes funcionalidades como es agregar a no mas de 5 personajes en una lista de favoritos, podra agragar un nuevo personaje para visualizar su tarjeta correspondiente, con datos del personaje cambiando el color de su tarjeta por casa a la que pertenece, o cambio de color a gris en apartado de informacón para los personajes que han muerto.

## Comenzando 🚀  
  
### Usuario:
Se puede ingresar a la aplicación por medio de la siguiente liga, https://quizzical-perlman-50d8e3.netlify.app/ , no requiere ningún tipo de usuario o contraseña para ingesar a sus diferentes apartados, no se requiere configuración adicionles para visualizar en difrentes dispositivos. El proyecto se encuentra alojado en el siguiente  repositario de GitHub: https://github.com/sofiagaona/harry-app, Se puede hacer un fork del proyecto para clonarlo e intalarlo localmente, se reuiere realzar un npm intstall, para intalar las dependencias donde se encontraran las difrentes librerias con las que se trabajo en el desarrollo, se pueden correr los test del proyecto con el comando npm run test desde consola. La aplicacón consume un api mock json.server que se encuentra desplegado en heroku en la siguiente liga https://apiharry.herokuapp.com/characteres, esta url es utlizada en la aplicacón para realizar pesticiones get y post para obtener los personajes y para agregar uno nuevo, la db.json se encuantra alojada en el repositorio https://github.com/sofiagaona/apiHarry 
El contenido que el usuario tiene disponible es el que corresponda a su nivel (o niveles anteriores) pero, los niveles no alcanzados el contenido no se muestra disponible.n   

  
### lo que más me gustó  del proyecto  
Me parese es un proyecto muy completo que si bien se resume en algúnas funcionalidades, se llega a tocar difrentes escenarios, desde el cosumo de la api, el manejo de la informacion para el filtrado, se realizan test y requerimientos especificos de diseño. Me gusto mucho la parte de realizar la funcionalidad  de agregar a favoritos y poder utlizar herramientas como redux, me gusto trabajar el diseño de  las tarjetas dandole dinamismo con cambio de colores, etc..

### Qué hubiera mejorado o que mas hubiera hecho
Termine de desarrollar toda las funcionalidades requeridas, pero me hubiera gustado mejorar mas la parte de diseño, me gustaía desarrollar otra funcionalidad de las tarjetas que pueda dar click a una tarjeta y me abra la fotografía del personaje mas grande y su informacón mas detallada, de esta forma tambén se pudiera trabajar con rutas.


## pain points o Debug encontrados y como lo solucione
Me di cuenta que al agrgar un nuevo personaje, la informacón que se requeria en el modal no era suficiente para conseguir maejo de su información  en las tarjetas y acciones como cambio de color de las tarjetas, otra cosa que me percate es que los personajes que ya se encontrban en la api no contaban con un id, el id nos hubiera ayudado a manejar algunas acciones de forma mas segur, los nuevos personajes que agregue les asigne un id.

