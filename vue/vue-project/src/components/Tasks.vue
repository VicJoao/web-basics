<template>
<div>
  <div v-for="task in tasks" :key="task.id">
    <Task @toggle="$emit('toggle', task.id)" @delete="$emit('delete', task.id)" :day="task.day" :id="task.id" :text="task.text" :reminder="task.reminder"/>
  </div>
</div>
</template>

<script>
import Task from './Task.vue';

export default {
  name: 'Tasks',
    props: {
        tasks: {
            type: Array,
            required: true,
        },
    },
    components: {
        Task,
    },
    emits: ['delete','toggle'],
};
</script>