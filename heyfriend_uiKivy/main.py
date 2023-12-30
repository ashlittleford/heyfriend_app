##### IMPORTS #####

from kivy.app import App 
from kivy.uix.image import Image

##### ASSETS #####

logoImage = "https://github.com/ashlittleford/heyfriend_app/blob/7c96d7babc76284ac7f2bbf83c35cabf92ac265d/heyfriend_assests/hfLogo_1920x1080.svg"


##### CODE #####

class MainApp(App):
    def build(self):
        img = Image(source=logoImage,
                    size_hint=(1, .5),
                    pos_hint={'center_x':.5, 'center_y':.5})

        return img


##### IMPLEMENTS CODE #####
    
if __name__ == '__main__':
    app = MainApp()
    app.run()


