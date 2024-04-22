// NAVIGATION
export const NAV_LINKS = [
  { href: "/", key: "home", label: "Home", icon: "/navbar/homeicon.png" },
  { href: "/dictionary", key: "dictionary", label: "Dictionary", icon: "/navbar/dictionaryicon.png" },
  { href: "/spelling", key: "spelling", label: "Spelling" , icon: "/navbar/spellingicon .png"},
  { href: "/matchgame", key: "matchgame", label: "Game", icon: "/navbar/home.png" },
  { href: "/resources/simulator", key: "resources", label: "Resources", icon: "/navbar/resourcesicon.png" },

];
// Resource SUB-NAVIGATIN
export const RESOURCE_LINKS = [
  {
    href: "/resources/simulator",
    key: "simulator",
    label: "Hearing Loss Simulator",
  },
  {
    href: "/resources/benefits",
    key: "benefits",
    label: "Benefits of Learning Auslan",
  },
  {
    href: "/resources/support",
    key: "support",
    label: "Supporting Your Child",
  },

  // ... more items
];

export const SPELLING_LINKS = [
  {
    href: "/resources/practice",
    key: "support",
    label: "Practice",
  },
    {
    href: "/resources/quiz",
    key: "quiz",
    label: "Quiz",
  },
  {
    href: "/spelling/matchgame",
    key: "matchgame",
    label: "Game",
  }

  // ... more items
];






// FOOTER SECTION
export const FOOTER_LINKS = [
  {
    title: "About",
    links: [
      { label: "About Auslan Star", href: "/resources/benefits" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms", href: "/terms" },
    ],
  },
  {
    title: "Service",
    links: [
      { label: "Dictionary", href: "/dictionary" },
      { label: "Simulator", href: "/resources/simulator" },
      { label: "Handbook", href: "/resources/support" },
    ],
  },
];

export const FOOTER_CONTACT_INFO = {
  title: "Contact Us",
  links: [{ label: "E:", value: "auslanstarservice@gmail.com" }],
};

// Situation Scripts
export const SITUATION_SCRIPTS: { [key: string]: string } = {
  Tutorial: `
    Teacher: Good morning, class! Today, we're going to learn about addition.
    Teacher: Addition is when we put two or more numbers together to find the total.
    Teacher: Let's start with an easy example. What is 2 + 3?
    Students: 5!
    Teacher: That's correct! 5. Well done, everyone! Keep practicing your addition, and you'll become experts in no time.
      `,
  Playground: `
    Girl: Did you hear about the soccer game this weekend?
    Boy: Yeah, I heard our team won 3-0 against Jefferson High.
    Girl: That's awesome! I missed the game. Who scored the goals?
    Boy: Jake scored two goals, and Mia scored the third one.
    Girl: Nice! I can't wait for the next game.
      `,
  Shopping: `
    Staff: Hey, kid! Slow down, you might bump into the shelves!
    Staff: It's not safe to run around like that in the store.
    Kid: (unresponsive, continues running)
    Staff: (raises voice) I said, stop running!
    Kid: (still doesn't respond, continues running)
    Staff: (realizes the child is deaf or mute) Oh, I'm sorry! I didn't realize. Are you okay?
    Kid: (nods or gestures affirmatively)
    Staff: I apologize for shouting. Please be careful and enjoy your time shopping here. If you need any help, just let me know.
      `,
  Restaurant: `
    Waiter: Good afternoon! Have you decided on your order? 
    Also, just to let you know, we have a special promotion today where kids get a free ice cream. What flavor would you like?
    Child: (doesn't respond, looks at their mom)
    Waiter: (smiling) It's okay, I'll ask your mom. What flavor of ice cream would your child like?
    Mom: (answers on behalf of the child) He'd like vanilla, please.
    Waiter: Great choice! We'll bring that out shortly. Thank you and enjoy your meal!
      `,
  Traffic: `
    Urban Traffic Noise
      `,
  Music: `
    Pure Music
     `,
};

// Hearing Loss Levels Descriptions and Recommendations
export const HEARING_LOSS_INFO: {
  [level: string]: { performance: string; recommendation: string };
} = {
  Normal: {
    performance: "No or very slight hearing problems. ",
    recommendation:
      "Maintain normal activities and ensure regular hearing checks to monitor hearing health.",
  },
  Mild: {
    performance: "Slight difficulty following conversations in noise.",
    recommendation:
      "Ensure that you communicate with your child in a quiet environment, face-to-face, and may require mild hearing aids.",
  },
  Moderate: {
    performance:
      "Even in quiet environments, people may need to repeat conversations, especially in noisy backgrounds.",
    recommendation:
      "Consider the use of hearing aids. Special educational resources and support may be needed at school.",
  },
  Severe: {
    performance:
      "Unable to hear conversations without hearing aids, often relying on sign language.",
    recommendation:
      "Use of advanced hearing aids or other amplification devices necessary. Require learning sign language as a means of communication. ",
  },
  "Profound Impairment": {
    performance: "Unable to hear and understand even a shouted voice.",
    recommendation:
      "Consider cochlear implants and the comprehensive learning and use of sign language to communicate.",
  },
};
