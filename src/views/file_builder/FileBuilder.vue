<template>
    <div class="contenedor">
        <div class="bg-white wrapper-crear shadow-sm">
            <b-row>
                <b-col md="2">
                    <div class="m-3 text-center">
                        <span class="title-subsection">Tipo de archivo</span>
                    </div>
                </b-col>
                <b-col></b-col>
                <b-col md="3" >
                    <div class="ml-5 mt-2 mb-2 justify-content-center">
                        <b-button class="m-1 bg-cancelar btn-size">Cancelar</b-button>
                        <b-button class="m-1 bg-crear">Crear</b-button>                         
                    </div>
                </b-col>
            </b-row>   
        </div>            
         <b-container fluid class="contenedor pb-2 mt-3">
            <b-row>
                <b-col md="5 pr-0">
                    <div class="m-2">
                        <tipo-archivo />
                    </div>
                    <div class="m-2">
                        <configuracion class="pb-5" />
                    </div>
                </b-col>
                <b-col md="6 mt-2" >
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
    .wrapper-crear{
        height: 60px;
    }
    .title-subsection{
        font-size: 16px;
        font-weight: 500;
    }
    .bg-cancelar{
        background-color: #fff;
        color: #000;
    }
    .bg-crear{
        background-color: #5CB85C;
    }
    .btn-size{
        width: 87px;
        height: 34px;

    }
</style>
