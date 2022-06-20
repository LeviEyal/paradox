<script setup>
import { ref } from "vue";
import Qtype1 from "./Qtype1.vue";
import Qtype2 from "./Qtype2.vue";
import Qtype3 from "./Qtype3.vue";

defineProps(["conversation"]);

const qtypes = {
    1: Qtype1,
    2: Qtype2,
    3: Qtype3,
};

</script>

<!------------------------------------------------>
<template>
    <div>
        <h2>Chat id: {{conversation.chatID}}</h2>
        <div v-for="(q, i) in conversation.conversationQuestions" :key="i">
            <component :is="qtypes[q.qtype]" :question="q" />
        </div>
    </div>
</template>

<!------------------------------------------------>
<style scoped>

</style>