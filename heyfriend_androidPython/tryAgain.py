################ IMPORT MODULES ################

import csv
import pandas
from pprint import pp

############ DEFINING PARAMETERS ############

tools_csv_file   =    './toolsCSV.csv'

################ REWRITE DATA TO NEW DICTIONARY ################

toolsList = []

df = pandas.read_csv(tools_csv_file,
                     index_col="Name",
                     header=0,
                     names=["Name", "Skill", "Therapy", "Associated Feelings/Emotions", "Associated Behaviours"])


################ OBJECTS ################

class Tool():
    def __init__(self, tool):
        self.__name = tool

    def getName(self):
        return self.__name



class Skill(Tool):
    def __init__(self, skill):
        self.__skillName = skill

        # Add tools with the Skill      
        self.__assocTools = df.query(''Skill' == self.__skillName').index.tolist()

    def getskillName(self):
        return self.__skillName

    def getAssocTools(self):
        return self.__assocTools

    def addAssocTools(self):
        pass
    


class Therapy(Tool):
    def __init__(self):
        self.__therapyName = None
        self.__assocTools = []

    def getTherapyName(self):
        pass

    
    def getAssocTools(self):
        pass

    def addAssocTools(self):
        pass

Meditation = Skill('meditation')
pp(Meditation.getAssocTools())