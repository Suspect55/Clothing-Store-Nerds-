
function addOrder()
{
    var id = prompt("Enter ID: ");
    var name = prompt("Enter name of buyer: ");
    var product = prompt("Enter products bought: ");
    var total = prompt("Enter subtotal: ");
    var address = prompt("Enter address of buyer: ");



    var table = document.getElementById("orderTable");
    var rowCount = table.rows.length;
    var newRow = table.insertRow();
    newRow.id = (`row${rowCount}`);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        

    var newRowId = newRow.insertCell(0);
    newRowId.innerHTML = (`${id}`);
    newRowId.id = "id";

    var newRowName = newRow.insertCell(1);
    newRowName.innerHTML = (`${name}`);
    newRowName.id = "name";

    var newRowProduct = newRow.insertCell(2);
    newRowProduct.innerHTML = (`${product}`);
    newRowProduct.id = "product";

    var newRowTotal = newRow.insertCell(3);
    newRowTotal.innerHTML = (`RM ${total}`);
    newRowTotal.id = "total";

    var newRowAddress = newRow.insertCell(4);
    newRowAddress.innerHTML = (`${address}`);
    newRowAddress.id = "address";

    var count = Number(document.getElementById("num").innerHTML);
    document.getElementById("num").innerHTML = (`${count + 1}`);
}



// edit staff
function editOrder()
{
    var id = prompt("Enter Product ID: ");

    var ask = prompt("Which field would you like to edit \n 1)Buyer Name \n 2)Products Bought \n 3)Subtotal \n 4)Address of buyer");
    switch(ask)
    {
        case "1":
            var name = prompt("Enter nam of buyer: ");
        break;

        case "2":
            var product = prompt("Enter products bought: ");
        break;
        
        case "3":
            var total = prompt("Enter subtotal: ");
        break;

        case "4":
            var address = prompt("Enter address of buyer: ")
        break;
    }

    editName(id, name, product, total, address, ask);
    
}


function editName(id, name, product, total, address, ask)
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
        test.querySelector("#product").innerHTML = (`${product}`);
        break;

        case "3":
        test.querySelector("#total").innerHTML = (`RM ${total}`);
        break;

        case "4":
            test.querySelector("#address").innerHTML = (`${address}`);
        break;
    }
    
    
    
}

function delOrder()
{
    var id = prompt("Enter ID of Product to remove: ");
    var table = document.getElementById("orderTable");
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

    document.getElementById("orderTable").deleteRow(i);
    

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