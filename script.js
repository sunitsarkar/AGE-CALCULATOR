

const inputs = document.getElementsByClassName('input');


function calculate() {
    console.log(inputs[0].value);

    let year = 2023-inputs[2].value;
    let month = 4-inputs[1].value;
    let day =24- inputs[0].value;

    if ( inputs[1].value> 4) {
        month = 12 - inputs[1].value +4;
        year-=1;
    }
    else{
        month=4- inputs[1].value;
    }
    if(inputs[0].value>24){
        day= 30- inputs[0].value +24;
    }
    else{
        day=24- inputs[0].value;
    }


    const show = document.getElementsByClassName('show');

    const node = document.createElement('h2');
    if (!year || !month || !day) {
        const para = document.createTextNode(` Please Enter valid data for Month Field And Year Field`)
        node.appendChild(para)

    }
    else {
        const para = document.createTextNode(` Your Age is ${year} Years ${month} Months ${day} Days. `)
        node.appendChild(para);

    }


    show[0].appendChild(node)
}