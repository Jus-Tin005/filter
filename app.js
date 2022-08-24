var getInput = document.getElementById("search"),
    getUl = document.getElementById("members"),
    getLi = getUl.getElementsByTagName("li");

//     console.log(getLi); // HTMlCollaction

/*
! sorting A -Z Method 1
*/

// var getBtnSort = document.getElementById("sort");
var getBtnSortazm1 = document.getElementById("sortazm1");
var getBtnSortzam1 = document.getElementById("sortzam1");
var getBtnSortazm2 = document.getElementById("sortazm2");
var getBtnSortzam2 = document.getElementById("sortzam2");




getBtnSortazm1.addEventListener('click',sortazm1);
function sortazm1() {
    // console.log("hiiii");

    var liLists = [];

    for(var i =0; i < getLi.length; i++){
        // console.log(getLi[i]);
        // console.log(getLi[i].textContent);

        liLists.push(getLi[i].textContent);
    }

    // console.log(liLists);
    // console.log(liLists.sort());
    // console.log(liLists.sort().reverse());

    var aToz = liLists.sort();

    getUl.innerHTML = ''; // clear ul

    aToz.forEach(function(aToz){
        // console.log(aToz);

        const newLi = document.createElement('li');
        const newAtag = document.createElement('a');
        newAtag.href = `javascript:(0);`;
        newAtag.appendChild(document.createTextNode(aToz));
        newLi.appendChild(newAtag);
        // console.log(newLi);
        getUl.appendChild(newLi);
        // console.log(getUl);

    });
}



/*
! sorting Z -A Method 1
*/



getBtnSortzam1.addEventListener("click",sortZToAm1);

function sortZToAm1() {
    var liListsTow = [];
    for( var j = 0; j < getLi.length; j++){
        liListsTow.push(getLi[j].textContent);
    }

    var zToas = liListsTow.sort().reverse();
    getUl.innerHTML = ''; // clear ul

    zToas.forEach(function(zToa){
        const newLi = document.createElement('li');
        const newAtag = document.createElement('a');
        newAtag.href = `javascript:(0);`;
        newAtag.appendChild(document.createTextNode(zToa));
        newLi.appendChild(newAtag);
        // console.log(newLi);
        getUl.appendChild(newLi);
        // console.log(getUl);

    });

}




/*
! sorting A -Z Method 2
*/

getBtnSortazm2.addEventListener('click',sortingaToazm2);

function sortingaToazm2(){
    // console.log("kooo");


    var shouldSwitch = true;
    var switching = true;
    // console.log(getLi.length);

    do{
        switching = false;


        var i = 0;
                                    // catch error = -1
        for(i; i < getLi.length -1; i++){
            shouldSwitch = false;

            if(getLi[i].textContent.toLowerCase() > getLi[i +1].textContent.toLowerCase()){
                shouldSwitch = true;
                break;
            }
        }

        if(shouldSwitch){

            // parentElement.insertBefore(new,existing) / parentNode.insertBefore(new,existing);
            getLi[i].parentElement.insertBefore(getLi[i+1],getLi[i]);
            switching = true;
        }else{}
    }while (switching);
}


// value comparing
// console.log(getLi[0].textContent.toLowerCase());
// console.log(getLi[1].textContent.toLowerCase());
// Ko Ko  and Mg Mg
// if( getLi[0].textContent.toLowerCase() > getLi[1].textContent.toLowerCase()){
    // console.log("true");
// }else if(getLi[0].textContent.toLowerCase() === getLi[1].textContent.toLowerCase()){
    // console.log("equal");
// }else {
    // console.log("false");   // ko ko / Mg Mg / false ( a value less tnan b.b less than c ,ect.)

// }







/*
! sorting Z -A Method 2
*/

getBtnSortzam2.addEventListener('click',sortingaTozam2);

function sortingaTozam2(){
    // console.log("kooo");


    var shouldSwitch = true;
    var switching = true;
    // console.log(getLi.length);

    do{
        switching = false;


        var i = 0;

        for(i; i < getLi.length -1; i++){
            shouldSwitch = false;

            if(getLi[i].textContent.toLowerCase() < getLi[i +1].textContent.toLowerCase()){
                shouldSwitch = true;
                break;
            }
        }

        if(shouldSwitch){

            // parentElement.insertBefore(new,existing) / parentNode.insertBefore(new,existing);
            getLi[i].parentElement.insertBefore(getLi[i+1],getLi[i]);
            switching = true;
        }else{}
    }while (switching);
}
















/*
? filter
*/


  /*   const filter = () => {
        console.log("hiii")
    } */

    getInput.addEventListener('keyup',filter);

    function filter() {
        // console.log("Hi");

        var inputFilter = this.value.toLowerCase();
        // console.log(inputFilter);

        for( var x = 0; x < getLi.length; x++){
                // console.log(getLi[x]);
                // console.log(getLi[x].querySelector("a").textContent.toLowerCase());
                // console.log(getLi[x].getElementsByTagName("a")[0].innerText.toLowerCase());

            var getAtagValue = getLi[x].querySelector('a').textContent.toLowerCase();

            if(getAtagValue.indexOf(inputFilter) > -1){  // aray number 0 to 100,etc.
                getLi[x].style.display = ''; // show
            } else{
                getLi[x].style.display = "none"; // hide
            }
        }
    }

