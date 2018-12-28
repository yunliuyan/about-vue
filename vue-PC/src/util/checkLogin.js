
//验证用户
export function checkUser(user){
    user = user.toString();
    if(!user.length){
        return {status:false,msg: '请输入账号'};
    }
    if(user.match(/\D/) != null){
        return {status:true,msg: ''}
    }
    return {status:false,msg: '账户错误，必须含有英文'};
}
//验证密码
export function checkPassword(password){
    let str = password.toString();
    let isChinaese = /^[\u4e00-\u9fa5]+$/;
    if(!str.length){
        return {status: false, msg: '请输入密码'}
    }
    if(str.length<6||str.length>8||isChinaese.test(str)){
        return {status: false, msg: '密码不正确'}
    }
    return {status:true,msg: ''}
}
//验证手机号
export function checkPhone(phone){
    let myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
    if(!phone.toString().length){
        return {status: false, msg:'请输入密保手机'}
    }
    if(!myreg.test(phone)){
        return {status: false, msg:'请输入有效的手机号'}
    }
    return {status: true, msg: ''}
}
//验证手机验证码
export function checkCode(code){
    let myreg = /^[0-9]+.?[0-9]*$/;
    code = code.toString();
    if(!code.length){
        return {status: false, msg: '请输入验证码'}
    }
    if(code.length != 6){
        return {status: false, msg: '请输入正确的验证码'}
    }
    if(!myreg.test(code)){
        return {status: false, msg: '验证码错误，请重新输入'}
    }
    return {status: true, msg: ''}
}
//验证邮箱
export function checkEmail(email){
    let myreg = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
    email = email.toString();
    if(!email.length){
        return {status: false, msg: '请输入邮箱'}
    }
    if(!myreg.test(email)){
        return {status: false, msg: '邮箱错误，请重新输入'}
    }
    return {status: true, msg: ''}
}