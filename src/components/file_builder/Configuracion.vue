<template>
    <div class="">
        <div class="bg-db text-white border rounded-top p-db wrapper ">
            <carga-base-datos />
        </div>
        <div class="bg-white border rounded-bottom wrapper ">
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
        padding: 15px;
    }
    .bg-db{
        background-color: #002747;
    }
    .p-db{
        min-height: 160px;
    }
</style>