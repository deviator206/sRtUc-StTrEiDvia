copy /b Documents\css\normalize.css+Documents\css\main.css+Documents\css\allinone_carousel.css style_flashcard_stc.css

copy /b Documents\js\lib\jquery-ui-custom-min.js+Documents\js\lib\jquery-ui-touch-punch-min.js+Documents\js\lib\allinone_carousel.js+Documents\js\lib\PxLoader.js+Documents\js\lib\PxLoaderImage.js+Documents\js\model.js+Documents\js\screens\passwordScreen.js+Documents\js\screens\loadingScreen.js+Documents\js\screens\splashScreen.js+Documents\js\screens\menuScreen.js+Documents\js\screens\howtoplayScreen.js+Documents\js\screens\carouselScreen.js+Documents\js\screens\gameplayScreen.js+Documents\js\screens\correctanswerScreen.js+Documents\js\screens\wronganswerScreen.js+Documents\js\screens\winnerScreen.js+Documents\js\application.js  game-debug.js

java -jar yuicompressor-2.4.7.jar --charset utf-8 -o app-flashcard.js game-debug.js
