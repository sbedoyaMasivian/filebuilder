<template>
    <div class="text-center bg-white border rounded wrapper shadow-sm mb-2">
        <div>
            <b-button @click="modalShow = !modalShow">Open Modal</b-button>
            <b-modal v-model="modalShow" size="lg" header-close-label>
                <template v-slot:modal-header>
                    <span class="title-modal">Configuracion del archivo</span>
                    <b-button size="md" @click="modalShow=false" class="float-right close-btn">X</b-button>
                </template>
                <div class="container">
                    <b-row>
                        <b-col md="3">
                            <div class="">
                                <span class="text-body-modal">Selecciona el tipo de archivo que deseas crear</span>
                            </div>
                            <div class="mt-5">
                                <div class="sizeBox-archivos mr-auto ml-auto bgBox-achivos-select border rounded">
                                    <span class="font-weight-archivos ml-2">PDF</span>
                                    <font-awesome-icon icon="file-pdf" class="bgIcon-archivos-select size-icon float-right mr-2" />
                                </div>
                                <div class="sizeBox-archivos mt-3 mr-auto ml-auto bgBox-achivos border rounded ">
                                    <span class="font-weight-archivos ml-2">Excel</span>
                                    <font-awesome-icon icon="file-excel" class="bgIcon-archivos size-icon float-right mr-2" />
                                </div>
                                <div class="sizeBox-archivos mt-3 mr-auto ml-auto bgBox-achivos border rounded ">
                                    <span class="font-weight-archivos ml-2">FTP</span>
                                    <font-awesome-icon icon="file-pdf" class="bgIcon-archivos size-icon float-right mr-2" />
                                </div>
                            </div>
                        </b-col>  
                        <b-col md="9 p-0"> 
                            <div class="vl">
                                <configuracion-tipo />
                            </div>
                        </b-col>
                    </b-row>
                </div>  
                <template v-slot:modal-footer>
                    <div class="w-100 text-center">
                        <b-button  @click="modalShow=false" class="mr-2">Cancelar</b-button>
                        <b-button variant="success"  @click="modalShow=false">Aceptar</b-button>
                    </div>
                </template>
            </b-modal>
        </div>     
    </div>
</template>
<script>
import PresentacionTipoArchivo from "@/components/file_builder/PresentacionTipoArchivo.vue";
import ConfiguracionTipo from "@/components/file_builder/ConfiguracionTipo.vue";
export default {
    name: "TipoArchivo",
    data() {
      return {
        modalShow: false
      }
    },
    methods: {
        
    },
    components:{
        "presentacion": PresentacionTipoArchivo,
        "configuracion-tipo":ConfiguracionTipo
    }
}
</script>
<style lang="scss">
    .size-icon{
        width: 25px !important;
        height: 25px !important;
        color: #dfdfdf;
    }
    .wrapper{
        padding: 15px;
    }
    .modal-footer{
        border: none !important;
    }
    .title-modal{
        font-size: 16px;
        color: white
    }
    .modal-header{
        background-color: #002747;
    }
    .close-btn {
        background-color: transparent !important;
        border: 0 !important;
    }
    .sizeBox-archivos{
        height: 50px;
        width: 160px;
        padding: 10px;
        background-color: #A2A9B1;
    }
    .bgBox-achivos-select{
        background-color: #A2A9B1;
        color:white;
    }
    .bgBox-achivos{
        background-color: white;
        color: #576573;
    }
    .bgIcon-archivos-select{
        color: white;
    }
    .bgIcon-archivos{
        color: #576573;
    }

    .text-body-modal{
        font-size: 14px;       
        color: #576573;
    }
    .font-weight-archivos{
        font-weight: 500;
    }
    .vl {
        border-left: 1px solid #c2cad1;
        height: 100%;
    }
    
</style>