
import csv
import numpy as np
import pandas as pd


class Data():
    def __init__(self):
        self.__toolsCSV   =    'heyfriend_assests\\dataTest.csv'

    # reads all data from csv
    #@classmethod
    def readData(self):
        df = pd.read_csv(self.__toolsCSV)
        df.columns = ['name','therapy','cat1','cat2','cat3','cat4','cat5','cat6','cat7']
        df['name'] = pd.Series(df['name'], dtype="string")
        df['therapy'] = pd.Series(df['therapy'], dtype="string")
        return df
    
    # prints data in from read method
    def printData(self):
        df = self.readData()
        toolsList = df["name"]
        print(df.dtypes, df.head(), toolsList)

    # creates dataframe with only name and gradings
    def getGradings(self):
        df = self.readData()
        edited = df.drop(['therapy', 'name'], axis=1)
        return edited
    
    # prints gradings
    def printGradings(self):
        edited = self.getGradings()
        print(edited)




objectD = Data()
objectD.printData()
objectD.printGradings()