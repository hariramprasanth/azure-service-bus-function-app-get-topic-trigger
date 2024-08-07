const { app } = require('@azure/functions');

app.serviceBusTopic("gettopic", {
	connection: "servicebus435_SERVICEBUS", // set environment value servicebus435_SERVICEBUS=<connectionstring>
	topicName: "topic1", // this can also set as env variables
	subscriptionName: "sub1",
	handler: (message, context) => {
		context.log("------------------------------------------- GET TOPIC ---------------------------------------------------");
		context.log("Service bus topic function processed message:", message);
		context.log("------------------------------------------- GET TOPIC ---------------------------------------------------");
	},
});