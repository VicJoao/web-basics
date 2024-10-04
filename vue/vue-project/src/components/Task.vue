<template>
<div @dblclick="$emit('toggle', id)" :class="[reminder ? 'reminder' : '', 'task']">
    <h3>{{ text }}
        <font-awesome-icon @click="$emit('delete', id)" class="fas" :icon="['fas', 'xmark']" />
    </h3>
    <p>{{ day }}</p>
   
</div>    
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

    export default {
        name: 'Task',
        props: {
            text: {
                type: String,
                required: true,
            },
            day: {
                type: String,
                required: true,
            },
            reminder: {
                type: Boolean,
                required: true,
            },
            id: {
                type: Number,
                required: true,
            },
        },
    };
</script>

<style scope>
.fas {
    color: red;
}

.task {
    background: var(--theme-background);
    margin: 5px;
    padding: 10px 20px;
    cursor: pointer;
}

.task.reminder {
    border-left: 5px solid green;
}

.task h3 {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

@media (prefers-color-scheme: dark) {
    :root {
        --theme-background: #333;
    }
}

@media (prefers-color-scheme: light) {
    :root {
        --theme-background: #f4f4f4;
    }
}

</style>