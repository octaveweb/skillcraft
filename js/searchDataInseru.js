const items = [
    "Grammar", "Parts of Speech", "Nouns", "Pronouns", "Adjectives",
    "Verbs", "Adverbs", "Prepositions", "Conjunctions", "Interjections",
    "Tenses", "Present Tenses", "Past Tenses", "Future Tenses", "Sentence Structure",
    "Simple Sentences", "Compound Sentences", "Complex Sentences", "Compound-Complex Sentences",
    "Phrases", "Noun Phrases", "Verb Phrases", "Adjective Phrases", "Adverb Phrases",
    "Prepositional Phrases", "Punctuation", "Period", "Colon", "Apostrophe", "Quotation Marks",
    "Hyphen and Dash", "Parentheses", "Speaking & Listening", "Presentation Skills",
    "Listening Skills", "Conversation Skills", "Pronunciation", "Vocabulary", "Types of Words",
    "Word Formation", "Specialized Vocabulary", "Word Relationships", "Language Variety",
    "Word Usage", "Cultural Context", "Sociolinguistics", "Historical Linguistics",
    "Language and Power", "Writing", "Essay Writing", "Creative Writing", "Research Writing",
    "Technical Writing", "Business Writing", "HTML", "CSS", "JavaScript", "C Programming",
    "Python", "Introduction to AI", "AI Nature", "AI Data", "AI Environment",
    "JavaScript Essentials", "Python Essentials", "C Programming Essentials"
];

const itemsList = document.getElementById("items-list");

items.forEach(item => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = "#";
    a.textContent = item;
    li.appendChild(a);
    itemsList.appendChild(li);
});
