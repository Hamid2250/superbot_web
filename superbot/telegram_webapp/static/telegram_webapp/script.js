document.getElementById("sbButton").addEventListener("click", function() {
    document.getElementById("sbButton").classList.add("active");
    document.getElementById("qButton").classList.remove("active");
    document.getElementById("contentTitle").textContent = "Purchase Order";
    document.getElementById("contentLabel2").textContent = "Invoice Note";
    document.getElementById("contentLabel3").textContent = "Warehouse Note";
    document.getElementById("input1").setAttribute("maxlength", "15");
    document.getElementById("input2").setAttribute("maxlength", "15");
    document.getElementById("input3").setAttribute("maxlength", "18");
    document.getElementById("warehouseNoteSection").style.display = "block";
    document.querySelector('input[name="choice"][value="1"]').checked = true;
    document.querySelector('input[name="choice"][value="2"]').checked = false;
    document.getElementById("choiceLabel1").textContent = "Review & Edit";
    document.getElementById("choiceLabel2").textContent = "Send";
    document.getElementById("choices").style.display = "block";
});

document.getElementById("qButton").addEventListener("click", function() {
    document.getElementById("qButton").classList.add("active");
    document.getElementById("sbButton").classList.remove("active");
    document.getElementById("contentTitle").textContent = "Quotation Number";
    document.getElementById("contentLabel2").textContent = "Warehouse Note";
    document.getElementById("contentLabel3").textContent = "";
    document.getElementById("input1").setAttribute("maxlength", "8");
    document.getElementById("input2").setAttribute("maxlength", "18");
    document.getElementById("input3").value = "";
    document.getElementById("warehouseNoteSection").style.display = "none";
    document.querySelector('input[name="choice"][value="1"]').checked = false;
    document.querySelector('input[name="choice"][value="2"]').checked = true;
    document.getElementById("choiceLabel1").textContent = "Approve Only";
    document.getElementById("choiceLabel2").textContent = "Send";
    document.getElementById("choices").style.display = "block";
});

document.getElementById("submitButton").addEventListener("click", function() {
    var input1 = document.getElementById("input1").value;
    var input2 = document.getElementById("input2").value;
    var input3 = document.getElementById("input3").value;
    var choice = document.querySelector('input[name="choice"]:checked').value;

    // Perform actions based on the inputs
    console.log("Input 1: " + input1);
    console.log("Input 2: " + input2);
    console.log("Input 3: " + input3);
    console.log("Choice: " + choice);
});