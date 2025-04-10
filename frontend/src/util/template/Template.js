import layouts from '../layouts';

class Template {

  setTheme(theme) {
    this.theme = theme;
  }

  setData(data) {
    this.quote = data.quote;
    this.author = data.author;
  }

  setAnimation(animation) {
    this.animation = animation;
  }

  setLayout(layout) {
    this.layout = layout;
    this.setStyle(layout.style);
    this.setStructure(layout.structure);
    this.calculateHeight(this.quote.length + 2);
  }

  setBorderColor(borderColor) {
    this.borderColor = borderColor;
  }

  setStyle(style) {
    this.css = style(this);
  }

  setStructure(structure) {
    this.structure = structure(this);
  }

  setFont(font){
    this.font = font;
  }

  setFontSize(size){
    this.size = Number(size);
  }

  calculateHeight(length) {
    let lines;
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    
    context.font = `${this.size}px ${this.font.fontFamily}`;
      const textWidth = context.measureText('"' + this.quote + '"').width;
      // console.log(length, textWidth);
      const charactersPerLine = Math.floor(590 / (textWidth / length));

      lines = Math.ceil(length / charactersPerLine);
      
    if (this.layout !== layouts["zues"] && this.layout !== layouts["socrates"]) {
      
      
      console.log(lines);
      // this.height = lines > 2 ? (lines - 2) * 22 + 173 : 173;
      this.height =  lines > 1 ? (lines - 2)  * this.size * 1.5 + this.size * 2.25 * 2 + this.size * 1.2 + 100: this.size * 2.25 + this.size * 1.5 + 90;
      //  console.log(this.height)
    } else if(this.layout === layouts["zues"]) {
      console.log(lines)
      // lines = Math.floor(length / 62);
      this.height = lines * this.size + this.size * 0.8 + 215;
      console.log(this.height, lines)
    }
    else{
      
      this.height =   lines   * this.size + this.size * 0.8 + this.size * 6 + 32 ;
      console.log("lines");
    }
  }
}

// To calculate the number of lines of text that fit within a certain width using JavaScript, you'll need to measure the width of the text rendered with a specific font size and font family. The process involves:

// 1. Measuring the width of the text in the given font.
// 2. Dividing the available width by the width of the text per line to determine the number of characters per line.
// 3. Dividing the total number of characters in the text by the number of characters that fit in one line.

// Here's how you can do that in JavaScript:

// ### JavaScript Example

// ```javascript
// function calculateNumberOfLines(text, fontSize, lineHeight, containerWidth, fontFamily) {
//   // Create a temporary canvas to measure the text width
//   const canvas = document.createElement('canvas');
//   const context = canvas.getContext('2d');

//   // Set the font size and family
//   context.font = `${fontSize}px ${fontFamily}`;

//   // Calculate the width of the text (in pixels)
//   const textWidth = context.measureText(text).width;

//   // Calculate the number of characters per line
//   const charactersPerLine = Math.floor(containerWidth / (textWidth / text.length));

//   // Calculate the number of lines
//   const numberOfLines = Math.ceil(text.length / charactersPerLine);

//   // Calculate the total height based on the line height and number of lines
//   const totalHeight = numberOfLines * lineHeight;

//   return {
//     numberOfLines: numberOfLines,
//     totalHeight: totalHeight
//   };
// }

// // Example usage
// const text = "This is an example sentence for calculating lines.";
// const fontSize = 16; // in pixels
// const lineHeight = 24; // in pixels
// const containerWidth = 300; // container width in pixels
// const fontFamily = 'Gabrielle'; // specify the font family

// const result = calculateNumberOfLines(text, fontSize, lineHeight, containerWidth, fontFamily);

// console.log(`Number of lines: ${result.numberOfLines}`);
// console.log(`Total height required: ${result.totalHeight}px`);
// ```

// ### Explanation:

// 1. **Temporary Canvas**: 
//    - A temporary `<canvas>` element is created to use its `measureText()` method to measure the width of the text in the specified font. This method gives you the width of the text in pixels.

// 2. **Characters per Line**: 
//    - By dividing the available width (`containerWidth`) by the average width of the characters (`textWidth / text.length`), we calculate how many characters can fit in one line.

// 3. **Number of Lines**:
//    - We then divide the total number of characters by the number of characters per line and use `Math.ceil()` to round up since any remaining characters will require a new line.

// 4. **Total Height**:
//    - The total height is simply the number of lines multiplied by the `lineHeight`.

// ### Example Output:

// For the text `"This is an example sentence for calculating lines."`, a **16px** font size, **24px** line height, and a container width of **300px** with the **'Gabrielle'** font:

// ```
// Number of lines: 2
// Total height required: 48px
// ```

// ### Notes:

// - The calculation assumes that the text wraps naturally, breaking at word boundaries (e.g., spaces) when it reaches the end of a line.
// - If you have **long words without spaces** (e.g., long URLs), they may overflow beyond the container, so you'd need to handle such cases if necessary (e.g., adding hyphenation or breaking words).
// - If you're working with multiple fonts, you can change the `fontFamily` parameter to match the font you're using.

export default Template;
