<template>
    <b-row>
        <b-col md="2">
            <div class="m-3 text-center">
                <span class="title-subsection">Nuevo PDF</span>
            </div>
        </b-col>
        <b-col></b-col>
        <b-col md="3" >
            <div class="ml-5 mt-2 mb-2 justify-content-center">
                <b-button class="m-1 bg-cancelar btn-size btn-secondary">Regresar</b-button>
                <b-button class="m-1 bg-crear btn-success">Generar</b-button>                         
            </div>
        </b-col>
    </b-row>       
</template>
<script>
export default {
    name: "Header"
}
</script>
<style lang="scss">

</style>