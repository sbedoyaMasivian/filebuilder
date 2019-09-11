<template>
    <div class="pt-2 pb-4">
        <div>
            <label>Campaña</label>
            <div class="form-group">
            <select class="form-control" id="exampleFormControlSelect1" placeholder="escoge la columna">
                <option disabled selected>Escoge la campaña</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
        </div> 
        </div>
        <hr>
        <div>
            <b-row>
                <b-col md="10">
                    <label>Nombre aleatorio</label>
                </b-col>
                <b-col md="2"> 
                    <b-form-checkbox name="check-button" switch />
                </b-col>
            </b-row>
        </div>
        <div class="form-group">
            <select class="form-control" id="exampleFormControlSelect1" placeholder="escoge la columna">
                <option disabled selected>Escoge la columna</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
        </div> 
        <div>
            <b-row>
                <b-col md="10">
                    <label>Contraseña</label>
                    <font-awesome-icon icon="info-circle" class="ml-2 icon"/>
                </b-col>
                <b-col md="2"> 
                    <b-form-checkbox v-model="checked" name="check-button" switch />
                </b-col>
                <b-col v-if="checked">
                     <b-form-group id="input-group-2">
                        <b-form-input id="input-2" placeholder="Escribe la contraseña" />
                    </b-form-group> 
                </b-col>

            </b-row>
        </div>  
    </div> 
</template>
<script>
export default {
    name: "campanias",
    data(){
        return{
             checked:false
        }
    },
    methods:{
        changeBandera(){
            console.log("entro-ninguno: " + this.checked)
            if(this.checked){
                return this.checked = false
                 console.log("entro-if: " + this.checked)
            }else{
                return this.checked = true
                console.log("entro-else: " + this.checked)
            }          
        }
    }
}
</script>
<style lang="scss">
    .input-size{
        width: 100%;
    }
    .custom-control-input:checked~.custom-control-label::before {
        color: #fff;
        border-color: #28a745 !important;
        background-color: #28a745 !important;
    }
    .icon{
        color: #bdc4cc;
    }
    
</style>