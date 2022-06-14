let colors = ['IndianRed', 'LightCoral', 'Salmon', 'DarkSalmon', 'Crimson', 'Red', 'FireBrick', 'DarkRed',
 'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'PaleVioletRed',
 'Tomato', 'LightSalmon', 'Coral', 'OrangeRed', 'DarkOrange', 'Orange',
 'Gold', 'Yellow', 'LightYellow', 'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Khaki', 
 'DarkKhaki', 'Lavender', 'Thistle', 'Plum', 'Violet', 'Orchid', 'Fuchsia', 'Magenta', 'MediumOrchid', 'MediumPurple',
 'Amethyst', 'BlueViolet', 'DarkViolet', 'DarkOrchid', 'DarkMagenta', 'Purple', 'Indigo', 'SlateBlue', 'DarkSlateBlue', 'MediumSlateBlue',
 'GreenYellow', 'Chartreuse', 'LawnGreen', 'Lime', 'LimeGreen', 'PaleGreen', 'LightGreen', 'MediumSpringGreen', 'SpringGreen', 'MediumSeaGreen',
 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'YellowGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'MediumAquamarine', 'DarkSeaGreen',
 'DarkTurquoise', 'CadetBlue', 'SteelBlue', 'LightSteelBlue', 'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue', 'DeepSkyBlue', 'DodgerBlue',
 'CornflowerBlue', 'MediumSlateBlue', 'RoyalBlue', 'Blue', 'MediumBlue', 'DarkBlue', 'Navy', 'MidnightBlue', 'Cornsilk', 'BlanchedAlmond',
 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan', 'RosyBrown', 'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
 'Chocolate', 'aSaddleBrownaa', 'Sienna', 'Brown', 'Maroon', 'White', 'Snow', 'Honeydew', 'MintCream', 'Azure', 
 'AliceBlue', 'GhostWhite', 'WhiteSmoke', 'Seashell', 'Beige', 'OldLace', 'FloralWhite', 'Ivory', 'AntiqueWhite', 'Linen',
 'LavenderBlush', 'MistyRose', 'Gainsboro', 'LightGrey', 'Silver', 'DarkGray', 'Gray', 'DimGray', 'LightSlateGray', 'SlateGray',
 'DarkSlateGray', 'Black']

let button = document.getElementById('button');

button.addEventListener('click', function(){
    //randomizer
    var randomColor = colors[Math.floor(Math.random() * colors.length)]

    let container = document.getElementById('container');

    container.style.background = randomColor;
})