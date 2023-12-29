from io import StringIO
from csvReader import *

#################################


class Tool():
    def __init__(self, tool):
        self.__tool = tool

    @property
    def getName(self):
        # Print Skill
        df = self.__tool.name_df()
        return df




