<template>
    <div class="container">
        <div class="row">
            <div class="columns">
                <parent-component></parent-component>
            </div>
        </div>
    </div>
</template>

<script>
    import ParentComponent from './ParentComponent.vue';

    export default {
        components: {
           ParentComponent 
        }
    }
</script>
