from io import StringIO
from csvReader import Data
from csvReader import *
import numpy

#################################

class toolByName():
    def __init__(self, name):
        self.__name = name
        self.__therapy = None
        self.__grading = None
        self.__data = Data().readData()

    def getIndex(self):
        df = self.__data
        # get index
        rowIndexList = df.index[df['name'] == self.__name].tolist()
        rowIndex = sum(e * 10**i for i, e in enumerate(rowIndexList[::-1]))
        return rowIndex   

    def getTherapy(self):
        df = self.__data
        ind = self.getIndex()
        result = df['therapy'][ind]
        self.__therapy = result
        return result

    def printRow(self):
        df = self.__data
        ind = self.getIndex()
        result = df.loc[df.index == ind]

    def getGrading(self):
        # convert grading into a string
        df = self.__data
        ind = self.getIndex()
        gradingList = []
        for int in df.iloc[ind, 2:]:
            gradingList.append(int)
        return gradingList

#################################

class toolByTherapy():
    pass

class toolByGrading():
    pass



objectT = toolByName('toolD')
print(objectT.getIndex())
print(objectT.getTherapy())
print(objectT.getGrading())

# iterate to get lists
