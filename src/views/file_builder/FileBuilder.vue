<template>
    <div class="contenedor">
        <div class="bg-white wrapper-crear shadow-sm">
            <header-filebuilder />
        </div>            
         <b-container class="contenedor pb-2 mt-3">
            <b-row>
                <b-col md="4 pr-0">
                    <div class="m-2">
                        <span class="title-subsection">Información</span>                        
                    </div>
                    <div class="m-2">
                        <configuracion class="pb-5" />
                    </div>
                </b-col>
                <b-col md="8" >
                    <div class="m-2">
                        <span class="title-subsection">Configuración de página</span>                        
                    </div>
                    <div>
                        <visualizador />
                    </div>
                </b-col>
                <tipo-archivo />
            </b-row>
         </b-container>
    </div> 
</template>
<script>
    import TipoArchivo from "@/components/file_builder/TipoArchivo.vue";
    import Configuracion from "@/components/file_builder/Configuracion.vue";
    import Visualizador from "@/components/file_builder/Visualizador.vue";
     import HeaderFileBuilder from "@/components/file_builder/HeaderFileBuilder.vue";
    export default {
        name: "FileBuilder",
        components:{
            "tipo-archivo": TipoArchivo,
            "configuracion": Configuracion,
            "visualizador": Visualizador,
            "header-filebuilder": HeaderFileBuilder
        }
    }
</script>
<style lang="scss">
    .contenedor{
        background-color: #F8F8F8 !important;
    }
    .bg-campañas{
        background-color: #e3e8ee !important;
    }
     
    .wrapper-crear{
        height: 60px;
    }
    .title-subsection{
        font-size: 16px;
        font-weight: 500;
        color: #002747;
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
