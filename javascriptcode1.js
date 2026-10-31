const question = $input.first().json.chatInput || "";
return [
  {
    json: {
      question: question.trim(),
      message: question.trim()
        ? "Your question is: " + question.trim()
        : "Please enter a question."
    }
  }
];
