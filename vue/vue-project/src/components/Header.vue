<template>
    <header>
        <h1>{{ title }}</h1>
        <Button @click="$emit('toggle-form')" :text="showAddTask ? 'close': 'add Task'"
         :color="showAddTask ? 'darkred': 'darkgreen'" />
    </header>
</template>

<script>
    import Button from './Button.vue';


    export default {
        name: 'Header',
        props: {
            title: {
                type: String,
                required: true,
            },
            showAddTask: {
                type: Boolean,
                required: true,
            },
        },
        components: {
            Button,
        },
    };
</script>

<style>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }
</style>