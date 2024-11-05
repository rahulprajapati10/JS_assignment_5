

// Q9. Unique Color Shirt

// Prepbuddy is very tasteful of clothes. He has N numbers of shirts hanging in the hanger in his wardrobe. Prepbuddy likes to 
// wear different colored clothes. So, whenever he see there are two or more shirts with the same color, he removes all the shirt 
// of that color from his wardrobe. Now, he wants to know how many M unique color shirts are left in the wardrobe. Prepbuddy 
// wants you to find M.
// Note: As there are many shades of a color so consider integers as a color name. i.e, color of shirt is 0,1,2, … , N.


function uniqueColorShirts(shirts) {
    let colorCount = {};
    let uniqueCount = 0;

    for (let color of shirts) {
        if (colorCount[color]) {
            colorCount[color]++;
        } else {
            colorCount[color] = 1;
        }
    }
    for (let color in colorCount) {
        if (colorCount[color] === 1) {
            uniqueCount++;
        }
    }

    return uniqueCount;
}

let shirts = [0, 1, 2, 2, 3, 3, 4, 5, 6, 6 ,7,7];
console.log(uniqueColorShirts(shirts)); 
