const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Predefined questions and answers
// can be add more 
const responses = {
  "how are you?": "I'm just a chatbot, so I don't have feelings, but I'm here to help!",
  "what's your name?": "I'm just a bot, so I don't have a name. You can call me ChatBot!",
  "what is the weather like today?": "I'm sorry, I don't have access to live data. You can check a weather website for that.",
  "exit": "Goodbye! If you have more questions, feel free to come back anytime.",
};

function chat() {
  rl.question("You: ", (userInput) => {
    if (userInput.toLowerCase() in responses) {
      const response = responses[userInput.toLowerCase()];
      console.log(`ChatBot: ${response}`);
      if (userInput.toLowerCase() === 'exit' || userInput.toLowerCase() === 'quit') {
        rl.close(); // Terminate the chatbot gracefully
      }
    } else {
      console.log("ChatBot: I'm not sure how to respond to that. Ask me something else!");
    }

    chat(); // Continue the chat loop
  });
}

console.log("ChatBot: Hello! I'm ChatBot. Ask me something or type 'exit' to end the conversation.");
chat();
