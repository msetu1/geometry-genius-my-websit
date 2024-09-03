// triangle 
function calculateTriangleArea(){
    const base =getInputValue('triangle-base')
    const hight=getInputValue('triangle-height')

    // validation 
    if(isNaN(base)||isNaN(hight)){
        alert('please provide me an number')
        return
    }
    // area 
    const area =0.5*base*hight;
    setElementInnerText('triangle-area',area)

    // add to calculation 
    addToCalculationEntry('Triangle',area)
}
// Rectangle
function calculateRectangleArea(){
    const width =getInputValue('rectangle-width')
    const length=getInputValue('rectangle-length')

    // validation 
    if(isNaN(width)||isNaN(length)){
        alert('please provide me an number')
        return
    }
    // area 
    const area =width*length;
    setElementInnerText('rectangle-area',area)

     // add to calculation 
     addToCalculationEntry('Rectangle',area)
}
// Parallelogram
function calculateParallelogramArea(){
    const base =getInputValue('parallelogram-base')
    const hight=getInputValue('parallelogram-height')

    // validation 
    if(isNaN(base)||isNaN(hight)){
        alert('please provide me an number')
        return
    }
    // area 
    const area =base*hight;
    setElementInnerText('parallelogram-area',area)

     // add to calculation 
     addToCalculationEntry('Parallelogram',area)
}
// Ellipse
function calculateEllipseArea(){
    const majorRadius =getInputValue('major-radius')
    const minorRadius=getInputValue('minor-radius')

    // validation 
    if(isNaN(majorRadius)||isNaN(minorRadius)){
        alert('please provide me an number')
        return
    }
    // area 
    const area =Math.PI*majorRadius*minorRadius;
    const areaTwoDecimal=area.toFixed(2);
    setElementInnerText('ellipse-area',areaTwoDecimal);

     // add to calculation 
     addToCalculationEntry('Ellipse',areaTwoDecimal)
}

