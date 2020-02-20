/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var inputs = readline().split(' ');
const W = parseInt(inputs[0]); // width of the building.
const H = parseInt(inputs[1]); // height of the building.
const N = parseInt(readline()); // maximum number of turns before game over.
var inputs = readline().split(' ');
let X0 = parseInt(inputs[0]);
let Y0 = parseInt(inputs[1]);

// game loop
while (true) {
    const bombDir = readline();
    // the direction of the bombs from batman's current location (U, UR, R, DR, D, DL, L or UL)

    
    if (bombDir == 'U') {
        Y0 = Y0 - 1;
    }
    else if (bombDir == 'UR') {
        Y0 = Y0 - 1;
        X0 = X0 + 1;
    }
    else if (bombDir == 'R') {
        X0 = X0 + 1;
    }
    else if (bombDir == 'DR') {
        X0 = X0 + 1;
        Y0 = Y0 - 1;
    }
    else if (bombDir == 'R') {
        X0 = X0 - 1;
    }
    else if (bombDir == 'D') {
        if (H > 70) {
            Y0 = H / 2;
        }
        else {
            Y0 = Y0 + 1;
        }
    }
    else if (bombDir == 'DL') {
        X0 = X0 - 1;
        Y0 = Y0 + 1;
    }
    else if (bombDir == 'L') {
        X0 = X0 + 1;
    }
    else {
        X0 = X0 - 1;
        Y0 = Y0 - 1;
    }
    if (X0 == -1) {
        X0 = W - 1;
    }
    if (X0 == W) {
        X0 = 0;
    }
    if (Y0 == H) {
        Y0 = 0;
    }
    if (Y0 == -1) {
        Y0 = H - 1;
    }


}