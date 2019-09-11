<template>
    <div class="m-2">
        <div class="size-p m-auto">
            <p class="text-body-modal text-center">
                Selecciona el tamaño de los archivos. Si tienes plantillas guardadas escoge
                una o empieza un archivo desde cero
            </p>
        </div>
        <div class="container m-auto text-center">
            <b-row class="justify-content-md-center mt-5">
                <b-col md="3">
                    <div class="m-carta">
                        <font-awesome-icon icon="file" class="size-carta" />
                         <div class="size-file-carta" style="top: 30px; margin-left: 30px;">
                            <span class="size-file text-secondary">21,6x27,9cm</span>
                        </div>
                    </div>
                    <div>
                        <span class="text-body-modal">Carta</span>
                    </div>                   
                </b-col>
                <b-col md="3">
                    <div>
                        <font-awesome-icon icon="file" class="size-oficio" />
                         <div class="size-file-oficio" style="top: 30px; margin-left: 30px;">
                            <span class="size-file text-secondary" >21,6x35,6cm</span>
                        </div>
                    </div>
                    <div>
                        <span class="text-body-modal">Oficio</span>
                    </div>                
                </b-col>
                <b-col md="3">
                    <div class="">
                        <font-awesome-icon icon="file" class="size-oficio" />
                        <div class="size-file-otro" style="top: 30px; margin-left: 23px;">
                            <p class="size-file m-0 text-secondary">Tamaño personalizado</p>
                        </div>
                    </div>                    
                    <div>
                        <span class="text-body-modal">Otro</span>
                    </div>                    
                </b-col>
            </b-row>
        </div>                                    
    </div>
</template>
<script>
export default {
    name:"ConfiguracionTipo"
}
</script>
<style lang="scss">
    .size-p{
        width: 445px !important;
        height: 39px !important;
    }
    .size-carta{
        width: 60px !important;
        height: 75px !important;
        color: #dfdfdf;
    }
    .size-oficio{
        width: 60px !important;
        height: 83px !important;
        color: #dfdfdf;
    }
    .size-otro{
        width: 70px !important;
        height: 63px !important;
        color: #dfdfdf;
    }
    .m-carta{
        margin-top: 0.3em;
    }
    .m-otro{
        margin-top: 1.2em;
    }
    .size-file{
        font-size: 9px;
    }
    .size-file-carta{
        position: absolute;
    }
    .size-file-oficio{
        position: absolute;
    }
    .size-file-otro{
        position: absolute;
    }
</style>