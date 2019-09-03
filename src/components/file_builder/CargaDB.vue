<template>
    <div class="m-2">
        <div>
            <span class="title-subsection">Base de datos</span>
        </div>
        <div class="mt-3">
            <b-row>
                <b-col class="p-1">
                    <b-button variant="light" class="title-subsection shadow-sm p-2 mb-5 bg-white rounded btn-carga">Carga archivos</b-button>
                </b-col>
                <b-col class="p-0">
                    <i>No hay archivos cargados</i>
                </b-col>
            </b-row>
        </div>        
    </div>
    
    
</template>
<script>
export default {
    name: "CargaDB"
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
       font-size: 14px;
    }
</style>