const rows = $input.all().map(item => item.json);
const question = $("Code in JavaScript").first().json.question || "";
const q = question.toLowerCase().trim();
const match = rows.find(row =>
  (row.question || "").toLowerCase().trim() === q
);
return [{
  json: {
    question,
    answer: match
      ? match.answer
      : "Sorry, I could not find an exact match in the dataset."
  }
}];
