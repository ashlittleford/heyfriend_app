from io import StringIO
#from csvReader import *
from tryAgain import *

#################################

class Tool(Data):
    def __init__(self, tool):
        self.__tool = tool
        self.__assoc = []
        self.__name = str
        self.__skill = str
        self.__therapy = str

    
    def getName(self):
        # Print Name
        name = self.name_df()
        return name
    name = property(fget=getName)
    

    def getSkill(self):
        # Print Skill
        skill = self.skill_df()
        return skill   
    skill = property(fget=getSkill) 
    
    
    def getTherapy(self):
        # Print Therapy
        therapy = self.therapy_df()
        return therapy
    therapy = property(fget=getTherapy)


    def getAssociations(self):
        return self.__assoc
    def setAssociations(self, assocociatedTool):
        self.__assoc.append(assocociatedTool)

    associations = property(fget=getAssociations,
                            fset=setAssociations)
    
RAIN = Tool("RAIN")
print(RAIN.name)
print(RAIN.skill)