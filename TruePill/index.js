var medData = [];

function addData() {
    var medName = document.getElementById("medName").value;
    var strength = document.getElementById("strength").value;
    var packSize = document.getElementById("packSize").value;
    var totalPacks = document.getElementById("totalPacks").value;

    console.log(medName);
    console.log(strength);
    console.log(packSize);
    console.log(totalPacks);

    if (medName === "") {
        alert("Please Enter Value");
        return
    }

    for (let i = 0; i < medData.length; i++) {
        //console.log(medData[i]);
        if (medData[i].medName === medName) {
            console.log("duplicate entry " + medName);
            return;//stops function running
        }
        else {
            console.log(medName);
        }
    }


    medData.push({
        medName: medName,
        strength: strength,
        packSize: packSize,
        totalPacks: totalPacks
    })


    var formularyTable = document.getElementById("stockTableData");
    var inventoryStockTable = document.getElementById("formularyTableData");

    var rowInventoryStock = formularyTable.insertRow(-1);
    var rowFormulary = inventoryStockTable.insertRow();

    rowInventoryStock.insertCell(0).innerHTML = medName;
    rowInventoryStock.insertCell(1).innerHTML = strength
    rowInventoryStock.insertCell(2).innerHTML = packSize
    rowInventoryStock.insertCell(3).innerHTML = totalPacks

    rowFormulary.insertCell(0).innerHTML = medName;

    rowInventoryStock.setAttribute("id", medName + 2);
    rowFormulary.setAttribute("id", medName);

}


function logDataInventory() {
    console.log("---------------------------------------------------------------------------------------------------------------------------------------------------------------------");
    for (let i = 0; i < medData.length; i++) {
        console.log(
            "Medicine Data: " + medData[i].medName + "|" +
            " Strength: " + medData[i].strength + "|" +
            " Pack Size: " + medData[i].packSize + "|" +
            " Total Packs: " + medData[i].totalPacks
        )
    }

    console.log("---------------------------------------------------------------------------------------------------------------------------------------------------------------------");
}

function logDataFormulary() {
    console.log("---------------------------------------------------------------------------------------------------------------------------------------------------------------------");
    for (let i = 0; i < medData.length; i++) {
        console.log("Medicine Data: " + medData[i].medName);
    }

    console.log("---------------------------------------------------------------------------------------------------------------------------------------------------------------------");
}

function removeLog() {

    var answer = window.confirm("Save data?");
    if (answer) {
        try {
            var value = document.getElementById("medName").value;
            var indexValue = medData.indexOf(value);
            var row = document.getElementById(value);
            var row2 = document.getElementById(value + 2);
            row.parentNode.removeChild(row);
            row2.parentNode.removeChild(row2);

            for (let i = 0; i < medData.length; i++) {
                if (medData[i].medName === value) {
                    medData.splice(i, 1)
                    console.log(medData);
                    return;
                }
            }
            
        } catch (error) {
            console.log(error);
            console.log("record doesnt exist")
        }
    }
}

function editLog() {
    try {

        var medName = document.getElementById("medName").value;
        var strength = document.getElementById("strength").value;
        var packSize = document.getElementById("packSize").value;
        var totalPacks = document.getElementById("totalPacks").value;


        var row = document.getElementById(medName+2);
        row.cells[0].innerHTML = medName;
        row.cells[1].innerHTML = strength;
        row.cells[2].innerHTML = packSize;
        row.cells[3].innerHTML = totalPacks;

        for (let i = 0; i < medData.length; i++) {
            if (medData[i].medName === medName) {
                medData.splice(i, 1,{
                    medName:medName,
                    strength:strength,
                    packSize:packSize,
                    totalPacks:totalPacks
                })
                console.log(medData);
                return;
            }
        }

    } catch (error) {
        console.log(error);
        console.log("record doesnt exist");

    }
}