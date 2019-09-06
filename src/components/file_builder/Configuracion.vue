<template>
    <div class="">
        <div class="bg-light border rounded-top p-db wrapper float-right">
            <carga-base-datos />
        </div>
        <div class="bg-white border rounded-bottom wrapper float-right">
            <campanias />
        </div>
    </div>
</template>
<script>
    import CargaDB from "@/components/file_builder/CargaDB.vue";
    import Campañas from "@/components/file_builder/Campañas.vue";
    export default {
        name: "Configuracion", 
        components:{
            "carga-base-datos": CargaDB, 
            "campanias": Campañas
        }
    }
</script>
<style lang="scss" scoped>
    .wrapper{
        width: 70%;
        padding: 15px;
    }
    .p-db{
        height: 160px;
        //padding: 10px;
    }
</style>