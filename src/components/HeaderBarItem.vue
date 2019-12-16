<template>
    <div class="header-bar-item">{{label}}</div>
</template>

<script>
export default {
    name: "header-bar-item",

    props: {
        label: String
    },

    data: function() {
        return {

        };
    },

    methods: {

    }
}
</script>


<style scoped>

    .header-bar-item::before {
        content: '';
        display: inline-block;
        height: 100%;
        vertical-align: middle;
        margin-right: -0.1rem; /* Adjusts for spacing */
    }

    .header-bar-item {
        display: inline-block;

        margin-left: 32px;        
        margin-right: 32px; 

        height: 100%;

        font-size: 16px;     
        vertical-align: middle;
        /* line-height: 160px;  */
    }
</style>