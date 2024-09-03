function calculateTriangleArea() {
    // get triangle base value
    const baseField =document.getElementById('triangle-base');
    const baseValueText=baseField.value;
    const base =parseFloat(baseValueText);
    baseField.value='';
    
    //get triangle hight value
    const hightField =document.getElementById('triangle-height');
    const hightValueText=hightField.value;
    const hight =parseFloat(hightValueText);
    hightField.value='';
    // console.log(base,hight);

    // area 
    const area=0.5*base*hight;
    // show triangle area
    const showArea=document.getElementById('triangle-area');
    showArea.innerText=area;
    // console.log(area);
}
// Rectangle 
function calculateRectangleArea(){
    //get rectangle hight value
    const widthField=document.getElementById('rectangle-width');
    const widthValueText=widthField.value;
    const width =parseFloat(widthValueText);
    widthField.value='';

     //get rectangle hight value
    const lengthField=document.getElementById('rectangle-length');
    const lengthValueText=lengthField.value;
    const length =parseFloat(lengthValueText);
    lengthField.value='';

    // area 
    const area=width*length
    // show rectangle area
    const showArea=document.getElementById('rectangle-area');
    showArea.innerText=area;
    console.log(area);
}
// Parallelogram
function calculateParallelogramArea(){
    // get parallelogram base value
    const baseField =document.getElementById('parallelogram-base');
    const baseValueText=baseField.value;
    const base =parseFloat(baseValueText);
    baseField.value='';
    
    //get parallelogram hight value
    const hightField =document.getElementById('parallelogram-height');
    const hightValueText=hightField.value;
    const hight =parseFloat(hightValueText);
    hightField.value='';
    // console.log(base,hight);

    // area 
    const area=base*hight;
    // show parallelogram area
    const showArea=document.getElementById('parallelogram-area');
    showArea.innerText=area;
    // console.log(area);
}
// Ellipse
function calculateEllipseArea(){
    // get Ellipse base value
    const majorField =document.getElementById('major-radius');
    const majorValueText=majorField.value;
    const major =parseFloat(majorValueText);
    majorField.value='';
    
    //get Ellipse hight value
    const minorField =document.getElementById('minor-radius');
    const minorValueText=minorField.value;
    const minor =parseFloat(minorValueText);
    minorField.value='';
    // console.log(base,hight);

    // area 
    // const area=Math.PI *major*minor;
    const area=3.1416 *major*minor;
    const areaTwoDecimal=area.toFixed(2)
    // show Ellipse area
    const showArea=document.getElementById('ellipse-area');
    showArea.innerText=areaTwoDecimal;
    // console.log(area);
}
