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
                    <div class="custom-control custom-switch align-end">
                        <input type="checkbox" class="custom-control-input" id="customSwitch">
                        <label class="custom-control-label" for="customSwitch"></label>
                    </div>
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
                    <div class="custom-control custom-switch align-end">
                        <input type="checkbox" class="custom-control-input" id="customSwitch1">
                        <label class="custom-control-label" for="customSwitch1"></label>
                    </div>
                </b-col>
            </b-row>
        </div>  
    </div> 
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .input-size{
        width: 100%;
    }
    .custom-control-input:checked ~ .custom-control-label::before{
        border-color:#28a745;  
        background-color: #28a745;
    }
    .icon{
        color: #bdc4cc;
    }
    
</style>