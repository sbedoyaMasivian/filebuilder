<template>
    <div class="bg-white border rounded bg-size">
        <div class="p-2">
            <b-row>
                <b-col md="2">
                    <div class="mt-2">
                        <Label class="mb-1 lbl">Opciones</Label>
                        <div>
                            <span class="border-icon pr-1 pl-1">
                                <font-awesome-icon icon="eye"  />
                            </span>
                            <span class="border-icon pr-1 pl-1">
                                <font-awesome-icon icon="trash-alt" /> 
                            </span>
                        </div>
                    </div>                                      
                </b-col>
                <b-col md="4">
                    <div class="mt-2">
                        <Label class="mb-1 ">Campos de reemplazo</Label>
                        <div class="form-group">
                            <select class="form-control" id="exampleFormControlSelect1">
                                <option disabled selected>Escoge</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div> 
                    </div>
                </b-col>
            </b-row>
        </div>
        <hr>
        <div class="p-2">
             <area-code />
        </div>
    </div>
</template>
<script>
    import AreaCode from "@/components/file_builder/AreaCode.vue";
    export default {
        name: "Visualizador",
        components:{
            "area-code": AreaCode
        }
    }
</script>
<style lang="scss" scoped>
    .border-icon{
        background: #FFFFFF 0% 0% no-repeat padding-box;
        border-radius: 4px 0px 0px 4px;
        border-color: gray;
        opacity: 1;
    }
    .lbl{
        text-align: left;
        font: Regular 14px/11px Segoe UI;
        letter-spacing: 0;
        color: #576573;
        opacity: 1;
    }
    .form-control{
        width: 80%;
        font-size: 0.7rem;
    }
   
</style>    