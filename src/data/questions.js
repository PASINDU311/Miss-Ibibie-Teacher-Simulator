const lessonQuestions = [
  {
    id: 1,
    subject: "Mathematics",
    emoji: "🔢",
    question: "How should Miss start today's Maths lesson?",
    options: [
      "Start teaching immediately",
      "Ask students a warm-up question",
      "Give everyone homework 😂",
      "Take a coffee break ☕",
    ],
    correctAnswer: 1,
    successMessage:
      "Great choice! A good warm-up gets everyone ready to learn. ⭐",
  },

  {
    id: 2,
    subject: "Science",
    emoji: "🔬",
    question: "What makes a good classroom activity?",
    options: [
      "Something students can participate in",
      "A 3-hour lecture 😴",
      "More homework",
      "No one is allowed to ask questions 😂",
    ],
    correctAnswer: 0,
    successMessage:
      "Exactly! Learning becomes more engaging when students participate. 🌟",
  },

  {
    id: 3,
    subject: "English",
    emoji: "📖",
    question: "A student is too shy to answer. What should Miss do?",
    options: [
      "Ignore the student",
      "Give them a supportive chance to answer",
      "Ask them to leave 😂",
      "Give them 50 homework questions",
    ],
    correctAnswer: 1,
    successMessage:
      "Perfect! Encouragement can help students build confidence. ❤️",
  },

  {
    id: 4,
    subject: "History",
    emoji: "🌎",
    question: "What is an important part of a good lesson?",
    options: [
      "Clear explanation",
      "Confusing everyone 😂",
      "Talking without stopping",
      "Skipping the lesson",
    ],
    correctAnswer: 0,
    successMessage:
      "Correct! Clear explanations help students understand the topic. ⭐",
  },
];

export default lessonQuestions;