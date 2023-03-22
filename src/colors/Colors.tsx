import Convert from 'color-convert';

//https://stackoverflow.com/questions/43044/algorithm-to-randomly-generate-an-aesthetically-pleasing-color-palette
const generateRandomColor = () => {
    const backgroundColor = 'F0BCD4'
    const [bgRed, bgGreen, bgBlue] = Convert.hex.rgb(backgroundColor);
    // Gen random colors
    let red = Math.random() * 256;
    let green = Math.random() * 256;
    let blue = Math.random() * 256;
    // Mix the colors with the background
    red = (red + bgRed) / 2;
    green = (green + bgGreen) / 2;
    blue = (blue + bgBlue) / 2;

    return Convert.rgb.hex(red, green, blue);
}

export interface ColorPalette {
    [index: string]: string;
}

export const getPalette = (characters: string[]): ColorPalette => {
    const uniqueChars = new Set(characters);
    
    let palette: any = {}
    uniqueChars.forEach((char) => {
        palette[char] = generateRandomColor();
    })

    return palette as ColorPalette
}
