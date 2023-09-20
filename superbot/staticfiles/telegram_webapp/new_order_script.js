Telegram.WebApp.ready();

// Define Choices Function
document.getElementById("choice1").addEventListener("click", function() {
    document.getElementById("option1_btn").classList.add("active");
    document.getElementById("choice1").setAttribute("checked", "true");
    document.getElementById("option2_btn").classList.remove("active");
    document.getElementById("choice2").setAttribute("checked", "false");
});
document.getElementById("choice2").addEventListener("click", function() {
    document.getElementById("option2_btn").classList.add("active");
    document.getElementById("choice2").setAttribute("checked", "true");
    document.getElementById("option1_btn").classList.remove("active");
    document.getElementById("choice1").setAttribute("checked", "false");
});

// Select Order Type (SalesBuzz, Quotation)

// Selected SalesBuzz
document.getElementById("sbButton").addEventListener("click", function() {
    document.getElementById("sbButton").classList.add("active");
    document.getElementById("qButton").classList.remove("active");
    document.getElementById("contentLabel1").textContent = "رقم الطلبية";
    document.getElementById("contentLabel2").textContent = "ملاحظة الفاتورة";
    document.getElementById("contentLabel3").textContent = "ملاحظة المستودع";
    document.getElementById("input1").setAttribute("maxlength", "15");
    document.getElementById("input1").setAttribute("placeholder", "رقم الطلبية: 233*20*1234");
    document.getElementById("input2").setAttribute("maxlength", "15");
    document.getElementById("input3").setAttribute("maxlength", "18");
    document.getElementById("invoiceSection").style.display = "block";
    document.querySelector('input[name="choice"][value="1"]').checked = true;
    document.querySelector('input[name="choice"][value="2"]').checked = false;
    document.getElementById("choiceLabel1").textContent = "استعراض و تعديل";
    document.getElementById("choiceLabel2").textContent = "إرسال فوري";
    document.getElementById("choices").style.display = "block";
    document.getElementById("option1_btn").classList.add("active");
    document.getElementById("option2_btn").classList.remove("active");

});

// Selected Quotation
document.getElementById("qButton").addEventListener("click", function() {
    document.getElementById("qButton").classList.add("active");
    document.getElementById("sbButton").classList.remove("active");
    document.getElementById("contentLabel1").textContent = "رقم عرض السعر";
    document.getElementById("contentLabel2").textContent = "ملاحظة المستودع";
    document.getElementById("input1").setAttribute("maxlength", "8");
    document.getElementById("input1").setAttribute("placeholder", "أدخل رقم عرض السعر");
    document.getElementById("input2").setAttribute("maxlength", "18");
    document.getElementById("invoiceSection").style.display = "none";
    document.querySelector('input[name="choice"][value="1"]').checked = false;
    document.querySelector('input[name="choice"][value="2"]').checked = true;
    document.getElementById("choiceLabel1").textContent = "تعميد فقط";
    document.getElementById("choiceLabel2").textContent = "إرسال فوري";
    document.getElementById("choices").style.display = "block";
    document.getElementById("option2_btn").classList.add("active");
    document.getElementById("option1_btn").classList.remove("active");

});

Telegram.WebApp.MainButton.setText('Send').show().onClick(function () {
    let input1 = document.getElementById("input1");
    let input2 = document.getElementById("input2");
    let input3 = document.getElementById("input3");
    let choice = document.querySelector('input[name="choice"]:checked').nextElementSibling.textContent;

    
    const sbButton = document.querySelector('#sbButton');
    const qButton = document.querySelector('#qButton');
    
    if (sbButton.classList.contains('active')) {
        const activeButton = 'SalesBuzz';
        const data = JSON.stringify({
            type: activeButton,
            po: input1.value,
            invoice: input2.value,
            warehouse: input3.value,
            choice: choice
        });
    } else if (qButton.classList.contains('active')) {
        if (input1.value == "") {
            input1.style.border = "1px solid red";
            document.getElementById("message1").textContent ="Please enter";
        };
        if (input3.value == "") {
            input3.style.border = "1px solid red";
            document.getElementById("message3").textContent ="Please enter";
        };
        if (input1.value == "" || input3.value == "") {
            return;
        };
        const activeButton = 'Quotation';
        const data = JSON.stringify({
            type: activeButton,
            quotation: input1.value,
            warehouse: input3.value,
            choice: choice
        });
    }
    


    Telegram.WebApp.sendData(data);
    Telegram.WebApp.close();
});