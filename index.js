// Code your solution in this file!
function distanceFromHqInBlocks(end) {
    
    const hqEnd = 42;

    return Math.abs(end - hqEnd);
}

function distanceFromHqInFeet(end) {
    
    const hqreject = distanceFromHqInBlocks(end);

    const rist = 264;

    return hqreject * rist;
}

function distanceTravelledInFeet(start, destination) {
    
    const hqruto = Math.abs(start - destination);

    const rist = 264;
    return hqruto * rist;


}

function calculatesFarePrice(start, destination){
     const feet = distanceTravelledInFeet(start, destination)
     if(feet <= 400 ){
        return 0;

     }
     else if (feet > 400 && feet <= 2000)
        return (feet - 400) * 0.02;
    else if (feet > 2000 && feet <=2500){
        return 25;
    }
    else {
        return 'cannot travel that far';
    }

}