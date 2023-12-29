import csv

toolsList = []

with open ("./toolsCSV.csv", "r") as file:
    csvreader = csv.reader(file, delimiter=":")
    # for row in csvreader:
    #     toolsList.append[row[0]]


class Data():
    def __init__(self):
        pass

    def name_df(self):
        for row in csvreader:
            try:
                if row[0] == self:
                    val = int(row[0])
            except:
                raise Exception("No Tool with that name")
        return row[val]

    def skill_df(self):
        for row in csvreader:
            try:
                if row[0] == self:
                    val = int(row[1])
            except:
                raise Exception("No Tool with that name")
        return row[val]

    def therapy_df(self):
        for row in csvreader:
            try:
                if row[0] == self:
                    val = int(row[2])
            except:
                raise Exception("No Tool with that name")
        return row[val]
       
    def returnRow(self):
        for row in csvreader:
            return row
       
