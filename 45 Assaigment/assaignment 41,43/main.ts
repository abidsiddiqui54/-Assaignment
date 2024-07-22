function show_magicions(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }}

    const magician: string[] = ["abid ahmed","bilal"]
    show_magicions(magician)






//task 42


function make_great(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i ++){
        magician[i] = magicians[i]   +  'the great'
    }
}

const magician2: string[] = ["abid","ahmed","bilal"];
make_great(magician2)
show_magicions(magician2)




//task 43

function make_great2(magicians: string[]): string[] {
    const greatMagicians: string[] = [];
    for (let i = 0; i < magicians.length; i ++){
        magician[i] = magicians[i]   +  'the great'
    }
    return greatMagicians;
}
const magician3: string[] = ["abid","ahmed","bilal"];


const greatMagicians2: string[] = make_great2(magician3);
show_magicions(magician3);
show_magicions(greatMagicians2)

