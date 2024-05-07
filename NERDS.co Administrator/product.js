
function addProduct()
{
    var id = prompt("Enter ID: ");
    var name = prompt("Enter name: ");
    var number = prompt("Enter number of units sold: ");
    var sales = prompt("Enter total sales: ");
    var popular = prompt("Enter most popular size: ");



    var table = document.getElementById("productTable");
    var rowCount = table.rows.length;
    var newRow = table.insertRow();
    newRow.id = (`row${rowCount}`);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        

    var newRowId = newRow.insertCell(0);
    newRowId.innerHTML = (`${id}`);
    newRowId.id = "id";

    var newRowName = newRow.insertCell(1);
    newRowName.innerHTML = (`${name}`);
    newRowName.id = "name";

    var newRowNumber = newRow.insertCell(2);
    newRowNumber.innerHTML = (`${number}`);
    newRowNumber.id = "number";

    var newRowSales = newRow.insertCell(3);
    newRowSales.innerHTML = (`RM ${sales}`);
    newRowSales.id = "sales";

    var newRowPopular = newRow.insertCell(4);
    newRowPopular.innerHTML = (`${popular}`);
    newRowPopular.id = "popular";

    var count = Number(document.getElementById("num").innerHTML);
    document.getElementById("num").innerHTML = (`${count + 1}`);
}



// edit staff
function editProduct()
{
    var id = prompt("Enter Product ID: ");

    var ask = prompt("Which field would you like to edit \n 1)Product Name \n 2)Number of units sold \n 3)Total Sales \n 4)Most popular size");
    switch(ask)
    {
        case "1":
            var name = prompt("Enter name: ");
        break;

        case "2":
            var number = prompt("Enter number of units sold: ");
        break;
        
        case "3":
            var sales = prompt("Enter total sales: ");
        break;

        case "4":
            var popular = prompt("Enter most popular size: ")
        break;
    }

    editName(id, name, number, sales, popular, ask);
    
}


function editName(id, name, number, sales, popular, ask)
{
    var i = 1;
    var rowTest = (`row${i}`);
    var test = document.getElementById(rowTest);
    while(test.querySelector("#id").innerHTML != id)
    {
        ++i;
        rowTest = (`row${i}`);
        test = document.getElementById(rowTest);
        
    }

    switch(ask)
    {
        case "1":
        test.querySelector("#name").innerHTML = (`${name}`);
        break;

        case "2":
        test.querySelector("#number").innerHTML = (`${number}`);
        break;

        case "3":
        test.querySelector("#sales").innerHTML = (`RM ${sales}`);
        break;

        case "4":
            test.querySelector("#popular").innerHTML = (`${popular}`);
        break;
    }
    
    
    
}

function delProduct()
{
    var id = prompt("Enter ID of Product to remove: ");
    var table = document.getElementById("productTable");
    var newRowCount = table.rows.length - 1;

    var i = 1;
    var rowTest = (`row${i}`);
    var test = document.getElementById(rowTest);
    while(test.querySelector("#id").innerHTML != id)
    {
        ++i;
        rowTest = (`row${i}`);
        test = document.getElementById(rowTest);
        
    }

    document.getElementById("productTable").deleteRow(i);
    

    while(i < newRowCount)
    {
    var curRow = (`row${i + 1}`);
    var curRow1 = document.getElementById(curRow);
    curRow1.id = (`row${i}`);
    i++
    }

    var count = Number(document.getElementById("num").innerHTML);
    document.getElementById("num").innerHTML = (`${count - 1}`);
    

}

// function test100()
// {
//     var testID = prompt("Enter:");

//     var i = 1;
//     var rowTest = (`row${i}`);
//     var test = document.getElementById(rowTest);
//     while(test.querySelector("#staffId").innerHTML != testID)
//     {
//         ++i;
//         rowTest = (`row${i}`);
//         test = document.getElementById(rowTest);
        
//     }

//     document.getElementById("test10").innerHTML = test.id;
    
// }


function openNav() {
    document.getElementById("mySidenav").style.width = "450px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }