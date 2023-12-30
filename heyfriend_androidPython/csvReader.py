############ IMPORT MODULES ############

import csv
import pandas

############ DEFINING PARAMETERS ############

tools_csv_file   =    './toolsCSV.csv'

############ READING FILE ############

toolsList = []

df = pandas.read_csv(tools_csv_file,
                     index_col="Name",
                     header=0,
                     names=["Name", "Skill", "Therapy", "Associated Feelings/Emotions", "Associated Behaviours"])


############ OUTPUTS ############

class Data():
    def __init__(self):
        pass

    def name_df(self):
       pass

    def skill_df(self):
        df.loc["Skill"]

        return df.get("Skill")

    def therapy_df(self):
        return df.get("Therapy")



