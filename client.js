console.log('js');

$(document).ready(readyNow)
let salary =[];

function readyNow() {
    $('#submitButton').on('click', addEmployee);
    $('#submitButton').on('click', handleClick);
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
        <td><button id="removeEmp">Delete</button></td>
    </tr>`
    )
    salary.push(newAnnSal);
    let totalSalary = 0
    for (let i = 0; i < salary.length; i++) {      
    }
    $('#monthlyTotal').;

    $('#firstNIn').val('')
    $('#lastNIn').val('')
    $('#iDIn').val('')
    $('#titleIn').val('')
    $('#annSalIn').val('')

}

function addEmployee() {
    console.log('working');
}//end submitButton

