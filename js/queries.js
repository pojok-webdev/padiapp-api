var     getClient = obj => {
        sql = 'select id,name,address,phone from clients ';
        sql+= 'where id="'+obj.id+'" '
        console.log('getClient SQL',sql)
        return sql;
    },
    getClients = () => {
        sql = 'select id,name,address,phone from clients  ';
        sql+= 'where status="1" '
        sql+= 'order by name asc '
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
