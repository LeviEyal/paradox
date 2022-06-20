import axios from "axios";

const buildConversation = async (chatID) => {
	console.log("Building conversation for", chatID);
	const answers = await axios.get("http://localhost:5000/answers");
	const chats = await axios.get("http://localhost:5000/chats");
	const questions = await axios.get("http://localhost:5000/questions");

	console.log(chats.data);
	const newConversation = {
		chatID: chatID,
		conversationQuestions: [],
	};

	const chat = chats.data.find((chat) => chat.chatID == chatID);
	console.log("chat", chat);
	chat.questions
		.sort((q1, q2) => q1.order - q2.order)
		.forEach((question) => {
			const q = questions.data.find((q) => q.qid === question.qid);
			const qtype = q.qtype;
			const qtext = q.qtext;
			let options = [];
			answers.data
				.filter((answer) => answer.qids.includes(question.qid))
				.forEach((answer) => {
					console.log("answer", answer);
					if (qtype === 2) {
						options = answer.range;
					} else if (qtype === 3) {
						options.push(answer.atext);
					}
				});
			newConversation.conversationQuestions.push({
				qtype: qtype,
				qtext: qtext,
				options: options,
			});
		});
	return new Promise((resolve, reject) => {
		resolve(newConversation);
	});
};

export default buildConversation;
