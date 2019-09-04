<template>
    <div class="text-center bg-white border rounded wrapper float-right mb-2">
        <b-row>
            <b-col md="4">
                <div class="mt-3">
                    <span class="title-subsection">Tipo de archivo</span>
                </div>
            </b-col>
            <b-col md="7">
                <ol class="list-group list-group-horizontal">
                    <li class="list-group-item p-0 rounded">
                        <div class="p">
                            <font-awesome-icon icon="file-pdf" class="text-success w-file" />
                        </div>                        
                        <div class=" bg-success border text-light">PDF</div>
                    </li>
                    <li class="list-group-item p-0 rounded">
                        <div class="p">
                            <font-awesome-icon icon="file-excel" class="text-secondary w-file" />
                        </div>
                        <div >
                            <div class=" bg-secondary border  text-light">excel</div>
                        </div> 
                    </li>
                </ol>          
            </b-col>
        </b-row>
    </div>
</template>
<script>
export default {
    name: "TipoArchivo"
}
</script>
<style lang="scss" scoped>
    .title-subsection{
        font-size: 16px;
        font-weight: 500;
    }
    .w-file{
        width: 30px;
        height: 30px !important;
    }
    .wrapper{
        width: 70%; 
        padding: 15px;
    }
    .p{
        padding: 0.75rem 1.9rem;
    }
</style>