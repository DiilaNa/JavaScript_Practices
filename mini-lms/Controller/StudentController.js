import {studentsDB} from "../Db/Db.js";

// load student records
function loadStudents() {

    $('#student-tbody').empty();

    studentsDB.map((item, index) => {
        let fname = item.first_name;
        let lname = item.last_name;
        let address = item.address;

        let data = `<tr>
                           <td>${index + 1}</td>
                            <td>${fname}</td>
                            <td>${lname}</td>
                            <td>${address}</td>
                        </tr>`

        $('#student-tbody').append(data);
    })

}

/*--save--*/
$('#student-save').on('click',function (){

    let fname = $('#fname').val();
    let lname = $('#lname').val();
    let address = $('#address').val();
    console.log(`fname: ${fname}, lname: ${lname}, address: ${address}`);
    if (fname === '' || lname === ''  || address === ''){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
        });

    }else {

        let student_data = {
            first_name:fname,
            last_name:lname,
            address: address
        }/*key:value*/
        /*put data to the array*/
        studentsDB.push(student_data)
        loadStudents();
        clearForm();
        Swal.fire({
            title: "Data Saved Successfully!",
            icon: "success",
            draggable: true
        });
    }

})

/*Reset*/
$('#student-reset').on('click',function (){
    clearForm();
})

function clearForm() {
    $('#fname').val('');
    $('#lname').val('');
    $('#address').val('');
}