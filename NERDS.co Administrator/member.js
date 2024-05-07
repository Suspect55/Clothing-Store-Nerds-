
function addMember()
{
    var id = prompt("Enter ID: ");
    var name = prompt("Enter name: ");
    var phoneNo = prompt("Enter phone number: ");
    var spent = prompt("Enter total spent: ");
    var address = prompt("Enter Address: ");



    var table = document.getElementById("memberTable");
    var rowCount = table.rows.length;
    var newRow = table.insertRow();
    newRow.id = (`row${rowCount}`);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        

    var newRowId = newRow.insertCell(0);
    newRowId.innerHTML = (`${id}`);
    newRowId.id = "id";

    var newRowName = newRow.insertCell(1);
    newRowName.innerHTML = (`${name}`);
    newRowName.id = "name";

    var newRowPhone = newRow.insertCell(2);
    newRowPhone.innerHTML = (`${phoneNo}`);
    newRowPhone.id = "phoneNum";

    var newRowSpent = newRow.insertCell(3);
    newRowSpent.innerHTML = (`RM ${spent}`);
    newRowSpent.id = "spent";

    var newRowAddress = newRow.insertCell(4);
    newRowAddress.innerHTML = (`${address}`);
    newRowAddress.id = "address";

    var count = Number(document.getElementById("num").innerHTML);
    document.getElementById("num").innerHTML = (`${count + 1}`);
}



// edit staff
function editMember()
{
    var id = prompt("Enter Member ID: ");

    var ask = prompt("Which field would you like to edit \n 1)Member Name \n 2)Phone Number \n 3)Total Spent \n 4)Member Address");
    switch(ask)
    {
        case "1":
            var name = prompt("Enter name: ");
        break;

        case "2":
            var phone = prompt("Enter phone number: ");
        break;
        
        case "3":
            var spent = prompt("Enter total spent: ");
        break;

        case "4":
            var address = prompt("Enter Address: ")
        break;
    }

    editName(id, name, phone, spent, address, ask);
    
}


function editName(id, name, phone, spent, address, ask)
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
        test.querySelector("#phoneNo").innerHTML = (`${phone}`);
        break;

        case "3":
        test.querySelector("#spent").innerHTML = (`RM ${spent}`);
        break;

        case "4":
            test.querySelector("#address").innerHTML = (`${address}`);
        break;
    }
    
    
    
}

function delMember()
{
    var id = prompt("Enter ID of member to remove: ");
    var table = document.getElementById("memberTable");
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

    document.getElementById("memberTable").deleteRow(i);
    

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