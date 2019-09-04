<template>
    <div class="bg-white border rounded wrapper">
        <div class="bg-light border rounded p-db">
            <carga-base-datos />
        </div>
        <div class="mt-3">
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
        float: right;
        padding: 15px;
    }
    .p-db{
        height: 150px;
        padding: 10px;
    }
</style>