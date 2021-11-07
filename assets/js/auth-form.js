function validateForm(){
    var username = document.getElementById("username").value;
    var phone = document.getElementById("phone").value;
    var password = document.getElementById("password").value;
    var confirm = document.getElementById("confirmPassword").value;
    var authCheck = document.getElementById("authCheck").checked;

    if(!username.length){
        alert("Không được bỏ trống username");  
        return false;
    }else if(username.length<8){
        alert("Username tối thiểu 8 kí tự");
        return false;
    }

    if(!phone.length){
        alert("Không được bỏ trống số điện thoại");
        return false;
    }
    
    if(!password.length){
        alert("Không được bỏ trống password");
        return false;
    }else if(password.length < 6){
        alert("Mật khẩu tối thiểu 6 kí tự");
        return false;
    }

    if(!confirm.length){
        alert("Hãy nhập lại password");
        return false;
    }else if(confirm != password){
        alert("Mật khẩu không trùng khớp!");
        return false;
    }
    if(!authCheck){
        alert("Bạn chưa đồng ý điều khoản dịch vụ và chính sách bảo mật");
        return false;
    }
    document.getElementById("authForm").submit();
}