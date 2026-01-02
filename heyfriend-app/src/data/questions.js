export const questions = [
  {
    id: 1,
    text: "Little interest or pleasure in doing things?",
    options: [
      { text: "Not at all", value: 0, impacts: { CBT: 1, DBT: 0, ACT: 0, Mindfulness: 0 } },
      { text: "Several days", value: 1, impacts: { CBT: 2, DBT: 0, ACT: 1, Mindfulness: 0 } },
      { text: "More than half the days", value: 2, impacts: { CBT: 3, DBT: 1, ACT: 1, Mindfulness: 0 } },
      { text: "Nearly every day", value: 3, impacts: { CBT: 4, DBT: 2, ACT: 2, Mindfulness: 1 } },
      { text: "Not sure", value: 0, impacts: { CBT: 2, DBT: 2, ACT: 2, Mindfulness: 2 } }
    ]
  },
  {
    id: 2,
    text: "Feeling down, depressed, or hopeless?",
    options: [
      { text: "Not at all", value: 0, impacts: { CBT: 1, DBT: 0, ACT: 0, Mindfulness: 0 } },
      { text: "Several days", value: 1, impacts: { CBT: 2, DBT: 0, ACT: 1, Mindfulness: 1 } },
      { text: "More than half the days", value: 2, impacts: { CBT: 3, DBT: 1, ACT: 2, Mindfulness: 1 } },
      { text: "Nearly every day", value: 3, impacts: { CBT: 4, DBT: 2, ACT: 3, Mindfulness: 2 } },
      { text: "Not sure", value: 0, impacts: { CBT: 2, DBT: 2, ACT: 2, Mindfulness: 2 } }
    ]
  },
  {
    id: 3,
    text: "Trouble falling or staying asleep, or sleeping too much?",
    options: [
      { text: "Not at all", value: 0, impacts: { CBT: 0, DBT: 0, ACT: 0, Mindfulness: 0 } },
      { text: "Several days", value: 1, impacts: { CBT: 1, DBT: 1, ACT: 0, Mindfulness: 2 } },
      { text: "More than half the days", value: 2, impacts: { CBT: 2, DBT: 2, ACT: 0, Mindfulness: 3 } },
      { text: "Nearly every day", value: 3, impacts: { CBT: 3, DBT: 3, ACT: 1, Mindfulness: 4 } },
      { text: "Not sure", value: 0, impacts: { CBT: 2, DBT: 2, ACT: 2, Mindfulness: 2 } }
    ]
  },
  {
    id: 4,
    text: "Feeling tired or having little energy?",
    options: [
      { text: "Not at all", value: 0, impacts: { CBT: 0, DBT: 0, ACT: 0, Mindfulness: 0 } },
      { text: "Several days", value: 1, impacts: { CBT: 2, DBT: 0, ACT: 1, Mindfulness: 0 } },
      { text: "More than half the days", value: 2, impacts: { CBT: 3, DBT: 1, ACT: 2, Mindfulness: 1 } },
      { text: "Nearly every day", value: 3, impacts: { CBT: 4, DBT: 2, ACT: 3, Mindfulness: 1 } },
      { text: "Not sure", value: 0, impacts: { CBT: 2, DBT: 2, ACT: 2, Mindfulness: 2 } }
    ]
  },
  {
    id: 5,
    text: "Poor appetite or overeating?",
    options: [
      { text: "Not at all", value: 0, impacts: { CBT: 0, DBT: 0, ACT: 0, Mindfulness: 0 } },
      { text: "Several days", value: 1, impacts: { CBT: 1, DBT: 2, ACT: 0, Mindfulness: 1 } },
      { text: "More than half the days", value: 2, impacts: { CBT: 2, DBT: 3, ACT: 1, Mindfulness: 2 } },
      { text: "Nearly every day", value: 3, impacts: { CBT: 2, DBT: 4, ACT: 2, Mindfulness: 3 } },
      { text: "Not sure", value: 0, impacts: { CBT: 2, DBT: 2, ACT: 2, Mindfulness: 2 } }
    ]
  },
  {
    id: 6,
    text: "Feeling bad about yourself - or that you are a failure or have let yourself or your family down?",
    options: [
      { text: "Not at all", value: 0, impacts: { CBT: 0, DBT: 0, ACT: 0, Mindfulness: 0 } },
      { text: "Several days", value: 1, impacts: { CBT: 2, DBT: 1, ACT: 2, Mindfulness: 0 } },
      { text: "More than half the days", value: 2, impacts: { CBT: 3, DBT: 2, ACT: 3, Mindfulness: 1 } },
      { text: "Nearly every day", value: 3, impacts: { CBT: 4, DBT: 3, ACT: 4, Mindfulness: 2 } },
      { text: "Not sure", value: 0, impacts: { CBT: 2, DBT: 2, ACT: 2, Mindfulness: 2 } }
    ]
  },
  {
    id: 7,
    text: "Trouble concentrating on things, such as reading the newspaper or watching television?",
    options: [
      { text: "Not at all", value: 0, impacts: { CBT: 0, DBT: 0, ACT: 0, Mindfulness: 0 } },
      { text: "Several days", value: 1, impacts: { CBT: 1, DBT: 0, ACT: 0, Mindfulness: 2 } },
      { text: "More than half the days", value: 2, impacts: { CBT: 2, DBT: 0, ACT: 0, Mindfulness: 3 } },
      { text: "Nearly every day", value: 3, impacts: { CBT: 3, DBT: 0, ACT: 0, Mindfulness: 4 } },
      { text: "Not sure", value: 0, impacts: { CBT: 2, DBT: 2, ACT: 2, Mindfulness: 2 } }
    ]
  },
  {
    id: 8,
    text: "Moving or speaking so slowly that other people could have noticed? Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual?",
    options: [
      { text: "Not at all", value: 0, impacts: { CBT: 0, DBT: 0, ACT: 0, Mindfulness: 0 } },
      { text: "Several days", value: 1, impacts: { CBT: 1, DBT: 2, ACT: 0, Mindfulness: 1 } },
      { text: "More than half the days", value: 2, impacts: { CBT: 2, DBT: 3, ACT: 0, Mindfulness: 2 } },
      { text: "Nearly every day", value: 3, impacts: { CBT: 2, DBT: 4, ACT: 1, Mindfulness: 3 } },
      { text: "Not sure", value: 0, impacts: { CBT: 2, DBT: 2, ACT: 2, Mindfulness: 2 } }
    ]
  },
  {
    id: 9,
    text: "Thoughts that you would be better off dead, or of hurting yourself in some way?",
    options: [
      { text: "Not at all", value: 0, impacts: { CBT: 0, DBT: 0, ACT: 0, Mindfulness: 0 } },
      { text: "Several days", value: 1, impacts: { CBT: 1, DBT: 4, ACT: 1, Mindfulness: 0 } },
      { text: "More than half the days", value: 2, impacts: { CBT: 2, DBT: 4, ACT: 2, Mindfulness: 0 } },
      { text: "Nearly every day", value: 3, impacts: { CBT: 3, DBT: 4, ACT: 3, Mindfulness: 0 } },
      { text: "Not sure", value: 0, impacts: { CBT: 2, DBT: 2, ACT: 2, Mindfulness: 2 } }
    ]
  }
];

export const CATEGORIES = ["CBT", "DBT", "ACT", "Mindfulness"];
