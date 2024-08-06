const { app } = require('@azure/functions');

app.serviceBusTopic("gettopic", {
	connection: "Endpoint=sb://servicebus435.servicebus.windows.net/;SharedAccessKeyName=RootManageSharedAccessKey;SharedAccessKey=iZzcUZ2oCEdOk5fLX3h4TSRdKtTWfqeN9+ASbGztsmE=",
	topicName: "topic1",
	subscriptionName: "sub1",
	handler: (message, context) => {
		context.log("------------------------------------------- GET TOPIC ---------------------------------------------------");
		context.log("Service bus topic function processed message:", message);
		context.log("------------------------------------------- GET TOPIC ---------------------------------------------------");
	},
});