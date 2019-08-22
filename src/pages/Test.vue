<template>
    <div>
        testpage
    </div>
</template>
<script>
import * as API from '@/utils/api'
export default {
    data() {
        return{
            
        }
    },
    created() {
        // this.testApi();
    },
    methods:{
     testApi() {
         API.getAllDoneNumber()
         .then()
         .catch();
     }
    }
}
</script>
<style lang="css" scoped>
    
</style>