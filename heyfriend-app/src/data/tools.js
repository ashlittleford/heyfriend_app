// Ideal score profiles (polynomials/vectors) for each tool
// Each tool has an 'ideal' distribution of scores across categories:
// [CBT, DBT, ACT, Mindfulness]

export const tools = [
  {
    id: 1,
    name: "Cognitive Reframing",
    description: "Identify and challenge negative thought patterns.",
    idealProfile: { CBT: 15, DBT: 5, ACT: 5, Mindfulness: 2 }
  },
  {
    id: 2,
    name: "TIPP Skills",
    description: "Temperature, Intense exercise, Paced breathing, Paired muscle relaxation. Great for high distress.",
    idealProfile: { CBT: 2, DBT: 20, ACT: 2, Mindfulness: 5 }
  },
  {
    id: 3,
    name: "Acceptance & Defusion",
    description: "Learn to accept difficult feelings and distance yourself from unhelpful thoughts.",
    idealProfile: { CBT: 5, DBT: 5, ACT: 20, Mindfulness: 5 }
  },
  {
    id: 4,
    name: "Body Scan Meditation",
    description: "Focus attention on different parts of your body to ground yourself.",
    idealProfile: { CBT: 2, DBT: 5, ACT: 5, Mindfulness: 20 }
  },
  {
    id: 5,
    name: "Behavioral Activation",
    description: "Engage in activities that give you a sense of achievement or pleasure.",
    idealProfile: { CBT: 20, DBT: 2, ACT: 5, Mindfulness: 0 }
  },
    {
    id: 6,
    name: "Radical Acceptance",
    description: "Accepting reality as it is, without judgment or attempts to fight it.",
    idealProfile: { CBT: 2, DBT: 15, ACT: 5, Mindfulness: 5 }
  },
    {
    id: 7,
    name: "Values Clarification",
    description: "Identifying what is truly important to you to guide your actions.",
    idealProfile: { CBT: 5, DBT: 2, ACT: 20, Mindfulness: 2 }
  },
    {
    id: 8,
    name: "Mindful Breathing",
    description: "Focusing on your breath to anchor yourself in the present moment.",
    idealProfile: { CBT: 2, DBT: 5, ACT: 2, Mindfulness: 20 }
  }
];
