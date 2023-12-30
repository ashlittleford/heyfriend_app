from question1 import * 
answer_n = 'Note Sure'


def exampleQuiz():
    questions = [(question1, [q1_a, q2_b, q3_c, answer_n]),
                 
        ("Question 1", ["Answer A (8 points)", "Answer B (6 points)", "Answer C (4 points)", "Not sure"]),
        ("Question 2", ["Answer A (6 points)", "Answer B (8 points)", "Answer C (4 points)", "Not sure"]),
        ("Question 3", ["Answer A (8 points)", "Answer B (6 points)", "Answer C (4 points)", "Not sure"]),
        ("Question 4", ["Answer A (6 points)", "Answer B (8 points)", "Answer C (4 points)", "Not sure"]),
        ("Question 5", ["Answer A (8 points)", "Answer B (6 points)", "Answer C (4 points)", "Not sure"]),
        ("Question 6", ["Answer A (6 points)", "Answer B (8 points)", "Answer C (4 points)", "Not sure"]),
        ("Question 7", ["Answer A (8 points)", "Answer B (6 points)", "Answer C (4 points)", "Not sure"]),
        ("Question 8", ["Answer A (6 points)", "Answer B (8 points)", "Answer C (4 points)", "Not sure"]),
        ("Question 9", ["Answer A (8 points)", "Answer B (6 points)", "Answer C (4 points)", "Not sure"]),
        ("Question 10", ["Answer A (6 points)", "Answer B (8 points)", "Answer C (4 points)", "Not sure"])]



therapy_scores = {
    "distress tolerance": 0,
    "meditation": 0,
    "self-soothing": 0,
    "interpersonal effectiveness": 0 }





    # Determine recommended therapy types (replace with your criteria)
recommended_therapies = []
for therapy, score in therapy_scores.items():
        if score > 20:  # Example threshold
            recommended_therapies.append(therapy)

print("\nBased on your answers, here are some therapy types that might be helpful for you:")
for therapy in recommended_therapies:
        print(therapy)

exampleQuiz()