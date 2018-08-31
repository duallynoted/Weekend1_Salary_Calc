console.log('js');

$(document).ready(readyNow)

function readyNow(){
    $('#submitButton').on('click', submitButton)    
}//end readys

function handleClick (){
    let newFirstName =$('#firstNIn').val()

    $('#empTableBody').append(
    `<tr>
        <td> `+ newFirstName +`</td>
        <td>Last Name</td>
        <td>ID</td>
        <td>Title</td>
        <td>Annual Salary</td>
    </tr>`
)
}

function submitButton() {
    console.log('working');    
}//end submitButton

