# Tool Analysis and Vector Formation

This document outlines the collection of mental health tools available in the `heyfriend-app` and explains how user responses to the PHQ-9 questionnaire form a vector (or "polynomial") used to recommend the most suitable tool.

## 1. Tool Collection

The application features 8 distinct tools, categorized by their primary therapeutic modality: **CBT** (Cognitive Behavioral Therapy), **DBT** (Dialectical Behavior Therapy), **ACT** (Acceptance and Commitment Therapy), and **Mindfulness**.

Each tool is defined by an "Ideal Profile," which is a vector representing the ideal distribution of scores across these four categories.

| ID | Tool Name | Description | Ideal Profile (Vector) | Primary Modality |
|----|-----------|-------------|------------------------|------------------|
| 1 | **Cognitive Reframing** | Identify and challenge negative thought patterns. | `{ CBT: 15, DBT: 5, ACT: 5, Mindfulness: 2 }` | CBT |
| 2 | **TIPP Skills** | Temperature, Intense exercise, Paced breathing, Paired muscle relaxation. Great for high distress. | `{ CBT: 2, DBT: 20, ACT: 2, Mindfulness: 5 }` | DBT |
| 3 | **Acceptance & Defusion** | Learn to accept difficult feelings and distance yourself from unhelpful thoughts. | `{ CBT: 5, DBT: 5, ACT: 20, Mindfulness: 5 }` | ACT |
| 4 | **Body Scan Meditation** | Focus attention on different parts of your body to ground yourself. | `{ CBT: 2, DBT: 5, ACT: 5, Mindfulness: 20 }` | Mindfulness |
| 5 | **Behavioral Activation** | Engage in activities that give you a sense of achievement or pleasure. | `{ CBT: 20, DBT: 2, ACT: 5, Mindfulness: 0 }` | CBT |
| 6 | **Radical Acceptance** | Accepting reality as it is, without judgment or attempts to fight it. | `{ CBT: 2, DBT: 15, ACT: 5, Mindfulness: 5 }` | DBT |
| 7 | **Values Clarification** | Identifying what is truly important to you to guide your actions. | `{ CBT: 5, DBT: 2, ACT: 20, Mindfulness: 2 }` | ACT |
| 8 | **Mindful Breathing** | Focusing on your breath to anchor yourself in the present moment. | `{ CBT: 2, DBT: 5, ACT: 2, Mindfulness: 20 }` | Mindfulness |

## 2. Polynomial/Vector Formation

The user's "polynomial" is a 4-dimensional vector:
`V_user = [Score_CBT, Score_DBT, Score_ACT, Score_Mindfulness]`

This vector is formed by summing the "impacts" of the user's answers to the 9 PHQ-9 questions.

### Scoring Mechanism
Each question option (0: Not at all, 1: Several days, 2: More than half the days, 3: Nearly every day, Not Sure) carries a specific weight for each category.

**Example: Question 9 (Self-harm/Suicide Ideation)**
*   "Thoughts that you would be better off dead, or of hurting yourself in some way?"
*   **"Several days" (Value 1)**: Adds `{ CBT: 1, DBT: 4, ACT: 1, Mindfulness: 0 }`
*   **"Nearly every day" (Value 3)**: Adds `{ CBT: 3, DBT: 4, ACT: 3, Mindfulness: 0 }`
    *   *Note: High distress answers heavily weight DBT, steering the recommendation towards crisis management tools like TIPP Skills.*

**Example: Question 1 (Anhedonia)**
*   "Little interest or pleasure in doing things?"
*   **"Nearly every day" (Value 3)**: Adds `{ CBT: 4, DBT: 2, ACT: 2, Mindfulness: 1 }`
    *   *Note: High anhedonia heavily weights CBT, steering the recommendation towards Behavioral Activation.*

### Calculation
As the user answers each question, the impacts are accumulated.
`Final Score = Σ (Impact of Selected Option for Question i)` for i = 1 to 9.

## 3. Recommendation Logic

The system recommends a tool by calculating the **Euclidean Distance** between the user's accumulated score vector and each tool's ideal profile vector.

`Distance = √[ (User_CBT - Tool_CBT)² + (User_DBT - Tool_DBT)² + (User_ACT - Tool_ACT)² + (User_Mindfulness - Tool_Mindfulness)² ]`

The tool with the smallest distance (closest match) is presented as the primary recommendation.

## 4. Deployment Note

This repository is configured for local development and build testing. Automated deployment pipelines for feature branches are currently not active. This ensures that changes can be reviewed and tested in a controlled environment before manual deployment or release.
