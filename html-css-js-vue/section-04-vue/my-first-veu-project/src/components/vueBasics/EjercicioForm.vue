<template>
<div>
  <h1>Ejercicio Form</h1>
<!-- Montamos un formulario para ir al primavera sound. Vamos a incluirle un input type text para vuestro nombre y un input type email para el email. Vamos incorporar un select que nos permita escoger entre cinco artistas para ver en el festival. Después hacemos inputs separados que reciban propiedades booleanicas y que respondan a estas preguntas:
Consumes alcohol o drogas? (si/no)
Vas a venir vestid@ de negro? (si/no)
Tienes más de 21 años? (si/no)
Vienes con un grupo de más de 2 personas? (si/no)
Por ultimo hacemos input textarea para sugerencias de mejora del festival.
Cuando se envíe el formulario imprimiremos la info que se ha mandado con una alerta en el browser. -->

<div id="myForn">

<form @submit.prevent="submitForm">
    <div>
    <pre>{{ JSON.stringify(formValues, null, 1) }}</pre>
    </div>

    <div>
    <label for="name">Enter Your Name</label>
    <input type="text" id="name" v-model="formValues.name">
    </div>

    <div>
    <label for="email">Enter Your Email</label>
    <input type="text" id="email" v-model="formValues.email">
    </div>

    <div>
        <label for="artists">Artists</label>
        <select name="artists" id="artists" v-model="formValues.artists">
        <option value="manel">Manel</option>
        <option value="rosalia">Rosalia</option>
        <option value="rigoberta">Rigoberta Bandini</option>
        <option value="The Clash">The Clash</option>
        </select>
    </div>

    <div>
        <label for="alcohol">Consumes alcohol o drogas? </label>
        <input type="checkbox" id="yes" value="yes" v-model="formValues.alcohol">
    </div>

    <div>
        <label for="blackDress">Vas a venir vestid@ de negro? </label>
        <input type="checkbox" id="yes" value="yes" v-model="formValues.blackDress">
    </div>

    <div>
        <label for="older21">Vas a venir vestid@ de negro? </label>
        <input type="checkbox" id="yes" value="yes" v-model="formValues.older21">
    </div>

    <div>
        <label for="group">Vienes con un grupo de más de 2 personas? </label>
        <input type="checkbox" id="yes" value="yes" v-model="formValues.group">
    </div>

    <div>
        <label for="suggestions">Tienes sugerencias de mejora del festival
            ? Escribe aquí:</label>
        <textarea name="suggestions" id="suggestions" cols="30" rows="10" v-model.trim.lazy="formValues.suggestions"></textarea>
    </div>

    <div>

        <input type="submit" value="Submit Form">
    </div>




  
</form>
</div>
</div>
</template>

<script setup>
import { reactive } from "vue";

const formValues = reactive ({
    name: "",
    email: "",
    artists: [],
    alcohol: true,
    blackDress: false,
    older21: true,
    group: true,
    suggestions: "",
})

const submitForm = () => {
    alert(` !!SUCCESS!!
        We succesfully received your job application form. We will get in contact with you in up to 7 days. Thanks for applying to...
        name: ${formValues.name}
        email: ${formValues.email}
        artists: ${formValues.artists}
        alcohol: ${formValues.alcohol ? "Si":"No"}
        blackDress: ${formValues.blackDress ? "Si":"No"}
        older21: ${formValues.older21 ? "Si":"No"}
        group: ${formValues.group ? "Si":"No"}
        suggestions: ${formValues.suggestions}
        `);
}





</script>

<style>

</style>