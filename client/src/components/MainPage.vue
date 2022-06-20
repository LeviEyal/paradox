<script setup>
import { ref, computed } from "vue";
import buildConversation from "../api/conversationBuilder";
import ChatForm from "./ChatForm.vue";

const conversation = ref({
	chatID: "",
	questions: [],
});
const chatId = ref("");

const handleLoadChat = async () => {
	conversation.value = await buildConversation(chatId.value);
};
</script>

<!------------------------------------------------>
<template>
	<h2>Chat</h2>

	<el-form class="form">
		<el-form-item :inline="true">
			<el-input v-model="chatId" placeholder="Enter chatId" />
		</el-form-item>
		<el-form-item>
			<el-button @click="handleLoadChat" type="primary">Load Chat</el-button>
		</el-form-item>
	</el-form>
	<main :v-if="conversation !== null">
		<ChatForm :conversation="conversation" />
	</main>
</template>

<!------------------------------------------------>
<style scoped>
.form {
	margin: auto;
	margin-bottom: 20px;
	width: 100%;
}
.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
	transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
	opacity: 0;
	transform: translateX(30px);
}
</style>
