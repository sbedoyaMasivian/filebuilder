<template>
    <div>
         <b-container fluid class="contenedor pb-2">
            <b-row>
                <b-col md="5">
                    <div class="m-2">
                        <tipo-archivo />
                    </div>
                    <div class="m-2">
                        <configuracion class="pb-5" />
                    </div>
                </b-col>
                <b-col md="6 mt-2 mb-2">
                    <div class="bg-size">
                        <visualizador />
                    </div>
                </b-col>
            </b-row>
         </b-container>
    </div> 
</template>
<script>
    import TipoArchivo from "@/components/file_builder/TipoArchivo.vue";
    import Configuracion from "@/components/file_builder/Configuracion.vue";
    import Visualizador from "@/components/file_builder/Visualizador.vue";
    export default {
        name: "FileBuilder",
        components:{
            "tipo-archivo": TipoArchivo,
            "configuracion": Configuracion,
            "visualizador": Visualizador
        }
    }
</script>
<style lang="scss" scoped>
    .contenedor{
        background-color: #F8F8F8 !important;
    }
    .bg-campañas{
        background-color: #e3e8ee !important;
    }
     .bg-size{
        height: 100%;
    }
</style>
