
function addStaff()
{
    var id = prompt("Enter ID: ");
    var name = prompt("Enter name: ");
    var role = prompt("Enter role: ");
    var salary = prompt("Enter salary: ");
    var address = prompt("Enter Address: ");



    var table = document.getElementById("staffTable");
    var rowCount = table.rows.length;
    var newRow = table.insertRow();
    newRow.id = (`row${rowCount}`);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        

    var newRowId = newRow.insertCell(0);
    newRowId.innerHTML = (`${id}`);
    newRowId.id = "staffId";

    var newRowName = newRow.insertCell(1);
    newRowName.innerHTML = (`${name}`);
    newRowName.id = "staffName";

    var newRowRole = newRow.insertCell(2);
    newRowRole.innerHTML = (`${role}`);
    newRowRole.id = "role";

    var newRowSalary = newRow.insertCell(3);
    newRowSalary.innerHTML = (`RM ${salary}`);
    newRowSalary.id = "salary";

    var newRowAddress = newRow.insertCell(4);
    newRowAddress.innerHTML = (`${address}`);
    newRowAddress.id = "address";

    var count = Number(document.getElementById("num").innerHTML);
    document.getElementById("num").innerHTML = (`${count + 1}`);
}



// edit staff
function editStaff()
{
    var id = prompt("Enter staff Id: ");

    var ask = prompt("Which field would you like to edit \n 1)Staff Name \n 2)Staff Role \n 3)Staff Salary \n 4)Staff Address");
    switch(ask)
    {
        case "1":
            var name = prompt("Enter name: ");
        break;

        case "2":
            var role = prompt("Enter role: ");
        break;
        
        case "3":
            var salary = prompt("Enter salary: ");
        break;

        case "4":
            var address = prompt("Enter Address: ")
        break;
    }

    editName(id, name, role, salary, address, ask);
    
}


function editName(id, name, role, salary, address, ask)
{
    var i = 1;
    var rowTest = (`row${i}`);
    var test = document.getElementById(rowTest);
    while(test.querySelector("#staffId").innerHTML != id)
    {
        ++i;
        rowTest = (`row${i}`);
        test = document.getElementById(rowTest);
        
    }

    switch(ask)
    {
        case "1":
        test.querySelector("#staffName").innerHTML = (`${name}`);
        break;

        case "2":
        test.querySelector("#role").innerHTML = (`${role}`);
        break;

        case "3":
        test.querySelector("#salary").innerHTML = (`RM ${salary}`);
        break;

        case "4":
            test.querySelector("#address").innerHTML = (`${address}`);
        break;
    }
    
    
    
}

function delStaff()
{
    var id = prompt("Enter ID of staff to remove: ");
    var table = document.getElementById("staffTable");
    var newRowCount = table.rows.length - 1;

    var i = 1;
    var rowTest = (`row${i}`);
    var test = document.getElementById(rowTest);
    while(test.querySelector("#staffId").innerHTML != id)
    {
        ++i;
        rowTest = (`row${i}`);
        test = document.getElementById(rowTest);
        
    }

    document.getElementById("staffTable").deleteRow(i);
    

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