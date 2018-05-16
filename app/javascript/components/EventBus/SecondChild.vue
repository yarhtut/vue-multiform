<template>
    <div class="component">
        <h3>Second Child</h3>
        <p>Edit me!</p>
        <p>My name is {{ myName }}</p>
        <p>I am {{ myAge }} year old.</p>
        <button @click="editAge">Edit Age</button>
    </div>
</template>

<script>
    import {eventBus} from '../../packs/app';

    export default {
        props: ['myName', 'myAge'],
        methods: {
            editAge() {
                this.myAge = 30;
                eventBus.changeAge(this.myAge);
            }
        }
    }
</script>
