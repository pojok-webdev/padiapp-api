getUsers = () => {
    sql = 'select a.*,c.name role from users a '
    sql+= 'left outer join roles_users b on b.user_id=a.id '
    sql+= 'left outer join roles c on c.id=b.role_id '
    sql+= 'order by username asc '
    return sql
},
getUser = obj => {
    sql = 'select a.*,c.name role from users a '
    sql+= 'left outer join roles_users b on b.user_id=a.id '
    sql+= 'left outer join roles c on c.id=b.role_id '
    sql+= 'where id = ' + obj.id + ' '
    return sql
},
getUserByName = obj => {
    sql = 'select * from users '
    sql+= 'where username="' + obj.username + '" '
    return sql
},
getUserImage = obj => {
    sql = 'select image from users '
    sql+= 'where id = ' + obj.id + ' '
    console.log('SQL',sql)
    return sql
}
saveUser = obj => {
    sql = 'insert into users '
    sql+= '(username,email,salt,password,level,createuser) '
    sql+= 'values '
    sql+= '("'+obj.username+'","'+obj.email+'","'+obj.salt+'","'+obj.password+'","'+obj.level+'","'+obj.createuser+'")'
    return sql;
},
updateUser = obj => {
    sql = 'update users '
    sql+= 'set username="' + obj.username + '",'
    sql+= 'email="' + obj.email + '",'
    sql+= 'image="' + obj.image + '",'
    sql+= 'level="' + obj.level + '",'
    sql+= 'active="' + obj.active + '" '
    sql+= 'where id=' + obj.id
    console.log('update user',sql)
    return sql
},
getUserByEmail = email => {
    sql = 'select * from users '
    sql+= 'where email="'+email+'"'
    return sql
},
changePassword = (email,password) => {
    sql = 'update users set password="'+password+'" '
    sql+= 'where email="'+email+'"'
    return sql
},
login = obj => {
    sql = 'select id,salt,password,defaultRoute,email,username,level from users '
    sql+= 'where email="'+obj.email+'" '
    return sql
},
updatePassword = (obj,password) => {
    sql = 'update users set password="'+password+'" '
    sql+= 'where email = "' + obj.email + '" '
    return sql
},
activateUser = (obj,active) => {
    sql = 'update users set active="'+active+'" '
    sql+= 'where email = "' + obj.email + '" '
    return sql
},
createUser = obj => {
    sql = 'insert into users '
    sql+= '(username,email,password,salt) '
    sql+= 'values '
    sql+= '("'+obj.username+'","'+obj.email+'","'+obj.password+'","'+obj.salt+'")'
    return sql
}