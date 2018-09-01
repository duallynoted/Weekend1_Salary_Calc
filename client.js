console.log('js');

$(document).ready(readyNow)
let salary = [];
let totalSalary = 1

function readyNow() {
    $('#submitButton').on('click', addEmployee);
    $('#submitButton').on('click', handleClick);
    $('#empTableBody').on('click','.removeEmp', handleDelete);
    addSalaries();
}//end readys

function handleClick() {
    let newFirstName = $('#firstNIn').val()
    let newLastName = $('#lastNIn').val()
    let newId = $('#iDIn').val()
    let newTitle = $('#titleIn').val()
    let newAnnSal = $('#annSalIn').val()

    $('#empTableBody').append(
        `<tr>
        <td> `+ newFirstName + ` </td>
        <td>` + newLastName + ` </td>
        <td>`+ newId + ` </td>
        <td>`+ newTitle + ` </td>
        <td>`+ newAnnSal + ` </td>
        <td><button class="removeEmp">Delete</button></td>
    </tr>`
    )
    salary.push(newAnnSal);
    totalSalary = addSalaries();
    $('#totalSalary').text('Total Monthly:' + '$' + totalSalary);

    $('#firstNIn').val('')
    $('#lastNIn').val('')
    $('#iDIn').val('')
    $('#titleIn').val('')
    $('#annSalIn').val('')

}

function addEmployee() {
    console.log('Adds Employee');
}//end submitButton
function addSalaries() {
    let subTotal = 0
    for (let i = 0; i < salary.length; i++) {
        subTotal = subTotal + parseInt(salary[i]) / 12;
    }//end for loop 
    if (subTotal > 20000) {
        console.log('>$20,000');
        $('#totalSalary').css('background-color', 'red')

    }//end conditional 
    return subTotal;

}//end addSalaries
function handleDelete(){
    console.log('delete was clicked');
    $(this).parent().parent().remove();
}

