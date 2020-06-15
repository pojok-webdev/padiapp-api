var     getClient = obj => {
        sql = 'select id,name,address,phone from clients ';
        sql+= 'where id="'+obj.id+'" '
        console.log('getClient SQL',sql)
        return sql;
    },
    getClients = () => {
        sql = 'select a.id,a.name,a.address,a.phone,  ';
        sql+= 'case a.clientcategory '
        sql+= 'when "1" then "FFR" '
        sql+= 'when "2" then "Platinum" '
        sql+= 'when "3" then "Gold" '
        sql+= 'when "4" then "Bronze" '
        sql+= 'when "5" then "Silver" '
        sql+= 'else "Other" end clientcategory, '
        sql+= 'b.username '
        sql+= 'from clients a '
        sql+= 'left outer join users b on b.id=a.user_id '
        sql+= ''
        sql+= 'where a.status="1" '
        sql+= 'order by a.name asc '
        console.log('getVendors SQL',sql)
        return sql;
    },
    createLog = obj => {
        sql = 'insert into activitylog '
        sql+= '(email ,module ,description) '
        sql+= 'values '
        sql+= '("'+obj.email+'" ,"'+obj.module+'" ,"'+obj.description+'")'
        console.log('createLog',sql)
        return sql
    },
    getLogs = () => {
        sql = 'select * from activitylog '
        console.log('getlogs',sql)
        return sql
    }
    module.exports = {
        getClient:getClient,
        getClients:getClients,
        getLogs:getLogs,
        createLog:createLog,
    }
