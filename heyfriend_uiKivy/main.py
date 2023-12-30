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

class MainApp(App):
    def build(self):
        img = Image(source=logoImage,
                    size_hint=(1, .5),
                    pos_hint={'center_x':.5, 'center_y':.5})

        layout = BoxLayout(orientation = "vertical")
        colors = [white, black, greenDark, yellowSun, greenLight]

        str1 = ''
        str2 = ''
        str3 = ''

        buttons = [img, str1, str2, str3]

        return img

    def on_press_button(self):
        pass
######################################

##### SCREEN MANAGER SET-UP #####

Builder.load_string("""
<LogoScreen>:
    BoxLayout:
        Button:
            text: 'logo'
            on_press:
                root.manager.transition.direction = 'left'
                root.manager.current = 'text1Screen'
        Button:
            text: 'Quit'

<text1Screen>:
    BoxLayout:
        Button:
            text: "Hey friend, We are glad you're here."
            on_press: 
                root.manager.transition.direction = 'left'
                root.manager.current = 'text2Screen'
        Button:
            text: 'Back'
            on_press:
                root.manager.transition.direction = 'right'
                root.manager.current = 'LogoScreen'
                    
<text2Screen>:
    BoxLayout:
        Button:
            text: 'We hope we can help you today.'
            on_press: 
                root.manager.transition.direction = 'left'
                root.manager.current = 'text3Screen'
        Button:
            text: 'Back'
            on_press:
                root.manager.transition.direction = 'right'
                root.manager.current = 'text1Screen'
                    
<text3Screen>:
    BoxLayout:
        Button:
            text: 'So lets get started...'

        Button:
            text: 'Back'
            on_press:
                root.manager.transition.direction = 'right'
                root.manager.current = 'text2Screen'
""")

##### DECLARES SCREENS #####

class LogoScreen(Screen):
    pass

class text1Screen(Screen):
    pass

class text2Screen(Screen):
    pass

class text3Screen(Screen):
    pass

##### CREATES SCREEN MANAGER #####
    
class WelcomeApp(App):
    def build(self):
        sm = ScreenManager(transition=FadeTransition())
        sm.add_widget(LogoScreen(name="logo"))
        sm.add_widget(text1Screen(name="text1"))
        sm.add_widget(text2Screen(name="text2"))
        sm.add_widget(text3Screen(name="text3"))

        return sm


##### IMPLEMENTS CODE #####
    
if __name__ == '__main__':
    app = WelcomeApp()
    app.run()


