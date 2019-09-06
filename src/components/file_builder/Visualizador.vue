<template>
    <div class="bg-white border rounded bg-size">
        <div class="pr-2 pl-2 pt-2">
            <b-row>
                <b-col md="2">
                    <div class="mt-2">
                        <Label class="mb-1 lbl">Opciones</Label>
                        <div>
                            <span class="icon pr-1 pl-1">
                                <font-awesome-icon icon="eye"  />
                            </span>
                            <span class="icon pr-1 pl-1">
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
                                <option disabled selected>Escoge el campo</option>
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
        <div class="pt-2 pl-2 pr-2">
             <area-code />
        </div>
        <div class="wrapper-btn">
            <div class="text-center">
                <b-button v-b-modal.modal-1 class=" btn-pre" @click="formSubmit">Previsualizar</b-button>
                <b-modal id="modal-1" size="xl" title="Visualizador">
                    <div v-html="code"></div>
                </b-modal>
            </div>               
        </div>
    </div>

</template>
<script>
    import AreaCode from "@/components/file_builder/AreaCode.vue";
    import Axios from 'axios';
    import AxiosRetry from 'axios-retry';
    import { mapState } from 'vuex';
import axiosRetry from 'axios-retry';
    export default {
        name: "Visualizador",
        components:{
            "area-code": AreaCode
        },
        data(){
            return{
                
            }            
        },
        methods:{
            updateScore(newValue) {
                this.code = newValue  // 3.Updating
            },

            formSubmit() {
                //let currentObj = this;
                axiosRetry(Axios, {retries:3 });
                Axios.post('https://r9v124voa8.execute-api.us-west-1.amazonaws.com/prod/pdf', {
                    "data": {},
                    "html":this.$store.state.code,
                    "options":{"encoding":"UTF-8", "zoom": 1}
                })
                .then(function (response) {
                    console.log(response)
                    Axios({
                        url: response.data.filepath,
                        method: 'GET',
                        responseType : 'blob'
                    })
                    .then(function (response) {
                        const url = window.URL.createObjectURL(new Blob([response.data]))
                        const link = document.createElement('a');
                        link.href = url;
                        link.setAttribute('download', 'file.pdf'); //or any other extension
                        document.body.appendChild(link);
                        link.click();
                        console.log(response)
                    })
                    .catch(function (error) {
                        console.log(error)
                    });
                })
                .catch(function (error) {
                    console.log(error)
                });
            }
        
              
        },
        computed:{
            code(){
                return this.$store.state.code
            }
        }
    }
</script>
<style lang="scss" scoped>
    .icon{
        color: #bdc4cc;
    }
    .lbl{
        text-align: left;
        letter-spacing: 0;
        color: #576573;
        opacity: 1;
    }
    .form-control{
        width: 80%;
        font-size: 0.7rem;
    }
    .wrapper-btn{
        background-color: #EBEEF2;
        height: 60px;
    }
    .btn-pre{
        background-color: #002747;
        margin: 10px;
        width: 116px;
        height: 34px;
    }
   
</style>    