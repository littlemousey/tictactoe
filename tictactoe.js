var Tile = function(x, y) {
    this.x = x;
    this.y = y;
    this.width = 50;
};

// Create the array of tiles at appropriate positions
var tiles = [];
var NUM_COLS = 3;
var NUM_ROWS = 3;
for (var i = 0; i < NUM_COLS; i++) {
    for (var j = 0; j < NUM_ROWS; j++) {
        tiles.push(new Tile(i * 50, j * 50));
    }
}
