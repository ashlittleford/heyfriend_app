##### IMPORTS #####

from kivy.app import App 
from kivy.lang import Builder
from kivy.uix.image import *
from kivy.uix.label import *
from kivy.uix.button import Button
from kivy.uix.boxlayout import BoxLayout
from kivy.uix.textinput import *
from kivy.uix.screenmanager import ScreenManager, Screen, FadeTransition


##### ASSETS #####
# IMAGES
logoImage = 'heyfriend_assests/hfLogo_1920x1080.png'

# COLOURS
white = [0, 0, 0, 2]
black = [0, 0, 0, 85]
greenLight = [2, 0, 14, 7]
greenDark = [4, 0, 26, 47]
yellowSun = [0, 21, 76, 1]

##### CODE #####

class Background(BoxLayout): 
    def __init__(self): 
        super().__init__() 
    


class SampleApp(App): 

    def build(self): 
        return Background() 
    




if __name__ == '__main__': 
    SampleApp().run() 