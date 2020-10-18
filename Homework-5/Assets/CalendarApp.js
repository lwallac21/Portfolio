let currentTime = moment().format("H")
let todayDate = moment().format('[Today is ]dddd[,] MMMM DD[,] YYYY')
function testFunction() { $("#today-date").text(todayDate) }
testFunction()
compareTimes()
getList()

$("#btn9").on("click", function () {
    $("#9").text($("#input9").val());
    $("#input9").val('')
    saveList()
})
$("#btn10").on("click", function () {
    $("#10").text($("#input10").val());    
    $("#input10").val('')
    saveList()
})
$("#btn11").on("click", function () {
    $("#11").text($("#input11").val());    
    $("#input11").val('')
    saveList()
})
$("#btn12").on("click", function () {
    $("#12").text($("#input12").val());    
    $("#input12").val('')
    saveList()
})
$("#btn13").on("click", function () {
    $("#13").text($("#input13").val());    
    $("#input13").val('')
    saveList()
})
$("#btn14").on("click", function () {
    $("#14").text($("#input14").val());    
    $("#input14").val('')
    saveList()
})
$("#btn15").on("click", function () {
    $("#15").text($("#input15").val());
    $("#input15").val('')
    saveList()
})
$("#btn16").on("click", function () {
    $("#16").text($("#input16").val());
    $("#input16").val('')
    saveList()
})
// comparing times with datasets
function compareTimes() {
    $(".time").each(function () {
        let div = $(this);
        let data = parseInt(div.attr("dataset"))
        let moment = parseInt(currentTime);
        if (data === moment) {
        div.addClass("bg-success")
        }
        if (data > moment) {
            div.addClass("bg-warning")
        }
        if (data < moment) {
            div.addClass("bg-secondary")
        }
    }
    )
};


function saveList() {
    localStorage.setItem("9", $("#9").text())
    localStorage.setItem("10", $("#10").text())
    localStorage.setItem("11", $("#11").text())
    localStorage.setItem("12", $("#12").text())
    localStorage.setItem("13", $("#13").text())
    localStorage.setItem("14", $("#14").text())
    localStorage.setItem("15", $("#15").text())
    localStorage.setItem("16", $("#16").text())

}

function getList () {
    $("#9").text(localStorage.getItem("9"))
    $("#10").text(localStorage.getItem("10"))
    $("#11").text(localStorage.getItem("11"))
    $("#12").text(localStorage.getItem("12"))
    $("#13").text(localStorage.getItem("13"))
    $("#14").text(localStorage.getItem("14"))
    $("#15").text(localStorage.getItem("15"))
    $("#16").text(localStorage.getItem("16"))
}