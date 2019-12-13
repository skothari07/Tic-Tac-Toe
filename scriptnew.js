let wincont =[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let currentplayer=1;
let player1 ='X';
let player2 ='O';
let player
let grid = [[],[],[]];
for (var i=0; i<=2; i++) {
    for (var j=0; j<=2; j++) {
     grid[i][j]=0;
    }
}   
let grid1 = [];
let grid2 = [];   
function reset(){
    for (var a=0; a<=2; a++) {
        for (var b=0; b<=2; b++) {
         grid[a][b]=0;
         document.getElementById(a + "" + b).innerHTML = "";
        }
    } 
    currentplayer=1;
    while (grid1.length) {
        grid1.pop();
    }
    while (grid2.length) {
        grid2.pop();
    }

}

function checkwin(grid1,grid2 ,currentplayer,wincont){
    let count1=0;
    let count2=0;
    for(var l=0;l<8;l++){
        for(var e=0;e<=2;e++){
            if(grid1.includes(wincont[l][e])){
                count1++;
                if(count1==3){
                    alert("Player"+currentplayer+ " wins")
                    reset();
                }
            }else if(grid2.includes(wincont[l][e])){
                count2++;
                if(count2==3){
                    alert("Player"+currentplayer+ " wins")
                    reset();
                }
            }else{
            }
        }
        count1=0;
        count2=0;
    }
}


function start(x,y,z){
    if (grid[x][y]>0) {
        alert("Grid already filled");
    } else{
        //document.getElementsByTagName("p")[0].setAttribute("style", "background-color: red;");
        if(currentplayer == 1){
            document.getElementsByTagName("p")[0].setAttribute("style", "background-color: white;");
            document.getElementsByTagName("p")[1].setAttribute("style", "background-color: red;");
            document.getElementById(x + "" + y).innerHTML = player1;
            grid[x][y]= 1;
            grid1.push(z);
            checkwin(grid1,grid2,currentplayer,wincont)
            currentplayer=2;
        }else{
            document.getElementsByTagName("p")[1].setAttribute("style", "background-color: white;");
            document.getElementsByTagName("p")[0].setAttribute("style", "background-color: red;");
            document.getElementById(x + "" + y).innerHTML = player2;
            grid[x][y]=2;
            grid2.push(z);
    
            checkwin(grid1, grid2,currentplayer,wincont);
            currentplayer =1;
        } 
    }

}