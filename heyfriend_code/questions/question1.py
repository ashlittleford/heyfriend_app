
from interface import *


# QUESTION 1
question1 = 'hey, how are you going?'
q1_a = 'good'
q2_b = 'great'
q3_c = 'not bad'


answer = input(f"{question1}\n{', '.join([f'{chr(65+i)}) {answer}' for i, answer in enumerate(answers)])}\nEnter your choice (A, B, C, or N): ").upper()
if answer in ['A', 'B', 'C', 'N']:
    print("Invalid choice. Please choose A, B, C, or N.")
        # Update therapy scores based on answer 
    if answer == 'A':
            therapy_scores["distress tolerance"] += 8 
            therapy_scores["meditation"] += 4 
    elif answer == 'B':
            therapy_scores["distress tolerance"] += 8 
            therapy_scores["meditation"] += 4  
    elif answer == 'C':
            therapy_scores["distress tolerance"] += 8 
            therapy_scores["meditation"] += 4 
    elif answer == 'N':
            therapy_scores["distress tolerance"] += 1  
            therapy_scores["meditation"] += 1
            therapy_scores["meditation"] += 1
            therapy_scores["meditation"] += 1  