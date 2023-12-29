############ IMPORT MODULES ############

import csv
import pandas

############ DEFINING PARAMETERS ############

tools_csv_file   =    './toolsCSV.csv'

############ READING FILE ############

df = pandas.read_csv(tools_csv_file,
                     index_col='Name',
                     header=0,
                     names=["Name", "Skill", "Therapy", "Associated Feelings/Emotions", "Associated Behaviours"],
                     dtype={'Associated Feelings/Emotions': tuple,
                            'Associated Behaviours': tuple})

############ OUTPUTS ############

class Data():
    def __init__(self):
        pass

    def name_df(self):
        pass

    def skill_df(self):
        pass

    def therapy_skill(self):
        pass



print(df)

