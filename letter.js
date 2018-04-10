var letter = function(ltr) {
    // Property to store the actual letter
    this.letter = ltr;
    // Property/boolean if the letter can be shown
    this.appear = false;

    this.letterRender = function() {
        if(this.letter == ' ') { // Renders a blank as it is
            // makes sure that when the function checks if a word is found doesn't read the blank as false
            this.appear = true;
            return ' '; 
        } if(this.appear === false) { // if it doesn't appear it returns a '_'

        } else { // Othewise it just appears as itself
            return this.letter;
        }
    };
};

// Export to use in word.js
module.exports = Letter;