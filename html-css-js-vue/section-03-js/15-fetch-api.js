
// API = Aplication Programing Interface
// Es la manera con la que nos podemos comunicar con nuestra base de datos

// PRINCIPIOS CRUD
// C = Create
// R = Read
// U = Update
// D = Delete

// JSON = Java Script Object Notation
// Es un format de datos estandard basado en text que se utiliza en el desarrollo web para enviar y recibir datos.
// Es el estandard actual para aplicar APP Nativas como webApps, IOT(Internet Of Things),videojuegos.
// Ventajas:
// 1- Compatible con todos los lenguajes de programación
// 2- Se puede utilizar en qualqueir tipo de plataforma (base de datos locales, en la nove, backens as a service)
// 3- Es un estandàrd de bases de datos ligeras y la transmission de datos es rapida

// Acepta los siguientes tipos de data: strings, arrats, numbers, arrays, objects, null, booleans, es decir los mismos que JS, html.

// METODOS ASSOCIADOS
// RESPONSE.json() ===  analiza el contexto en Json y lo passa a objecto
// JSON.parse() === toma una cadena JSON y la convierte en un objecto de JS.
// JSON.stringfy () === convierte un objecto de JS en una caden de JSON. Util para enviar info por la red.

// Metode Fetch
//Es un metodo disponible globalmente que ordena los navegadores
//SYNTAX, solo le requiere que le pasemos la URL del recurs que queremos obtener

let response = fetch(url)

// Este metodo te devuelve una promoesa que podemos utilizar los metodes que then() y catch () para manejar nuestras promesas en conjunto con el metodo fetch.



