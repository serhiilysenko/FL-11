let mail = prompt('Input your email');
let characters = 6;
let pswdCharaters = 5;
let user = 'user@gmail.com';
let admin = 'admin@gmail.com';

if (mail === user || mail === admin) {
   
    let password = prompt('Input your password');
    if (mail === user && password === 'UserPass' || mail === admin && password === 'AdminPass') {
    
        let change = confirm('Do you want to change your password?');
        if (change === true) {
            let password = prompt('Input old password');
            if (mail === user && password === 'UserPass' || mail === admin && password === 'AdminPass') {
                let newPassword = prompt('Input new password'); 
                if (newPassword.length < pswdCharaters) {
                    alert('It/’s too short password. Sorry.');
                } else if (prompt('Enter new password again') !== newPassword) {
                alert('You wrote the wrong password.');
                } else {
                    alert('You have successfully changed your password.');
                }
            } else if (password === '' || password === null) {
                alert('Canceled.');
            } else {
                alert('Wrong password');
            } 
        } else {
            alert('You have failed the change.');
        }
        } else if (password === '' || password === null) {
            alert('Canceled.');
        } else {
            alert('Wrong password');
        } 
} else if (mail === '' || mail === null) {
    alert('Canceled.'); 
} else if (mail.length < characters) {
    alert('I don\'t know any emails having name length less than 6 symbols');
} else {   
    alert('I don’t know you')
}

