<template>
    <div class="m-2">
        <div>
            <span class="title-subsection">Base de datos</span>
        </div>
        <div v-if="!bandera">    
            <div class="mt-3">
                <b-row>
                    <b-col class="p-1">
                        <b-button variant="light" class="title-subsection shadow-sm p-2 mb-5 bg-white rounded btn-carga" @click="changeBandera">Carga archivos</b-button>
                    </b-col>
                    <b-col class="p-0">
                        <div class="mt-2">
                            <i>No hay archivos cargados</i>
                        </div>   
                    </b-col>
                </b-row>
            </div>  
        </div>        
        <div v-show="bandera" class="mt-3">
            <div class="">
                <b-row>
                    <b-col md="3">
                        <div class="bg-secondary rounded-circle p-excel">
                            <span class="tipo-excel">XLS</span>
                        </div>
                    </b-col>
                    <b-col>
                        <div>
                            <span class="title-archivo">Nombre.xlsx</span>
                        </div>
                        <div>
                            <i>2,456 registros</i>
                        </div>
                    </b-col>
                </b-row>
                <b-row class="mt-2">
                    <b-col md="5">
                        <div>
                            <i>Hoja seleccionada</i>
                        </div>
                        <div>
                            <i>Hoja 1</i>
                        </div>
                    </b-col>
                    <b-col>
                        <div>
                            <i>Campo de agrupamiento</i>
                        </div>
                        <div>
                            <i>campo_escogido</i>
                        </div>                      
                    </b-col>
                </b-row>
            </div>
        </div>      
    </div> 
</template>
<script>
export default {
    name: "CargaDB",
    data(){
        return{
            bandera: false
        }
    },
    methods:{
        changeBandera(){
            if(this.bandera){
                this.bandera=false;
                console.log(this.bandera)
            }else{
                this.bandera=true;
                console.log(this.bandera)
            }            
        }
    }
}
</script>
<style lang="scss" scoped>
    .title-subsection{
        font-size: 16px;
        font-weight: 500;
        font-family: "Segoe UI","Helvetica Neue","Microsoft Sans Serif",Helvetica,Arial,sans-serif;
    }
    .btn-carga{
        font-size: 14px;
        width: 150px;
    }

    i{
       font-size: 12px;
       font-style: italic; 
    }
    .tipo-excel{
        font-size: 14px;
        font-weight: 500;
    }
    .p-excel{
        padding: 0.8rem;
    }
    .title-archivo{
        font-size: 18px;
    }
</style>      
    