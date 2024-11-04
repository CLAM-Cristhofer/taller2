namespace area {
    //% block
    export function circulo(radius: number) {
        return Math.PI * radius * radius;
    }

    //% block"rectangle length $length width $width"
    export function rectangle(length: number, width: number) {
        return length * width;
    }
    //% block="square length $length"
    export function square(length: number) {
        return length * length;
    }


    //% block="triangle base $base heigth $heigth"
    export function triangle(base: number, heigth: number) {
        return 0.5 * base * heigth;
    }
}
