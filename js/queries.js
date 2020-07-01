var getClient = obj => {
        sql = 'select a.id,a.name,a.alias,a.address,a.phone,  ';
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
        sql+= 'where a.id="'+obj.id+'" '
        console.log('getClient SQL',sql)
        return sql;
    },
    getClientsByName = obj => {
        sql = 'select a.id,a.name,a.alias,a.address,a.phone,  ';
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
        sql+= 'and a.name like "%'+obj.name+'%" '
        sql+= 'order by a.name asc '
        console.log('getClientsByName SQL',sql)
        return sql;
    },
    getClients = () => {
        sql = 'select a.id,a.name,a.alias,a.address,a.phone,  ';
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
        console.log('getClients SQL',sql)
        return sql;
    },
    getClientSitesByClientId = obj => {
        sql = 'select a.id client_id,a.name,a.alias,a.address,a.phone,  ';
        sql+= 'case a.clientcategory '
        sql+= 'when "1" then "FFR" '
        sql+= 'when "2" then "Platinum" '
        sql+= 'when "3" then "Gold" '
        sql+= 'when "4" then "Bronze" '
        sql+= 'when "5" then "Silver" '
        sql+= 'else "Other" end clientcategory, '
        sql+= 'b.id site_id,b.address site_address, '
        sql+= 'c.username '
        sql+= 'from clients a '
        sql+= 'left outer join client_sites b on b.client_id=a.id '
        sql+= 'left outer join users c on c.id=a.user_id '
        sql+= ''
        sql+= 'where a.status="1" '
        sql+= 'and a.id='+obj.id+' '
        sql+= 'order by a.name asc '
        console.log('getClients SQL',sql)
        return sql;
    },
    getAllClientSites = () => {
        sql = 'select a.id client_id,a.name,a.alias,a.address,a.phone,  ';
        sql+= 'case a.clientcategory '
        sql+= 'when "1" then "FFR" '
        sql+= 'when "2" then "Platinum" '
        sql+= 'when "3" then "Gold" '
        sql+= 'when "4" then "Bronze" '
        sql+= 'when "5" then "Silver" '
        sql+= 'else "Other" end clientcategory, '
        sql+= 'b.id site_id,b.address site_address, '
        sql+= 'c.username '
        sql+= 'from clients a '
        sql+= 'left outer join client_sites b on b.client_id=a.id '
        sql+= 'left outer join users c on c.id=a.user_id '
        sql+= ''
        sql+= 'where a.status="1" '
        sql+= 'order by a.name asc '
        console.log('getClients SQL',sql)
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
    },
/*
    | client_id           | int(11)      | NO   |     | 0                 |       |
| name                | varchar(50)  | YES  |     | NULL              |       |
| nofb                | varchar(20)  | NO   | PRI |                   |       |
| fbcategory          | varchar(9)   | YES  |     | NULL              |       |
| businesstype        | varchar(200) | YES  |     | NULL              |       |
| otherbusinesstype   | varchar(200) | YES  |     | NULL              |       |
| siup                | varchar(50)  | YES  |     | NULL              |       |
| siupaddress         | varchar(200) | YES  |     | NULL              |       |
| npwp                | varchar(50)  | YES  |     | NULL              |       |
| npwpaddress         | varchar(200) | YES  |     | NULL              |       |
| sppkp               | varchar(50)  | YES  |     | NULL              |       |
| sppkpaddress        | varchar(200) | YES  |     | NULL              |       |
| address             | varchar(200) | YES  |     | NULL              |       |
| billaddress         | text         | YES  |     | NULL              |       |
| city                | varchar(50)  | YES  |     | NULL              |       |
| telp                | varchar(100) | YES  |     | NULL              |       |
| fax                 | varchar(50)  | YES  |     | NULL              |       |
| activationdate      | date         | YES  |     | NULL              |       |
| period1             | date         | YES  |     | NULL              |       |
| period2             | date         | YES  |     | NULL              |       |
| servicecategories   | int(11)      | YES  |     | NULL              |       |
| services            | text         | YES  |     | NULL              |       |
| accounttype         | varchar(1)   | YES  |     | 1                 |       |
| description         | text         | YES  |     | NULL              |       |
| internaldescription | text         | YES  |     | NULL              |       |
| completed           | varchar(1)   | YES  |     | NULL              |       |
| status              | varchar(1)   | YES  |     | 0                 |       |
| expirystatus        | varchar(1)   | YES  |     | 0                 |       |
| createuser          | varchar(30)  | YES  |     | NULL              |       |
| createdate          | timestamp    | NO   |     | CURRENT_TIMESTAMP |       |
| tempstatus          | varchar(1)   | YES  |     | NULL              |       |
*/
    getFb = () => {
        sql = 'select a.nofb,a.name,a.fbcategory,a.address,a.telp,  ';
        sql+= 'a.siup,a.npwp,a.sppkp  '
        sql+= 'from fbs a '
        sql+= 'where a.status="1" '
        sql+= 'order by a.name asc '
        console.log('getClients SQL',sql)
        return sql;
    },
    autoUpdateExpiredFb = () =>{
        sql = 'update fbs set expirystatus="1"  where date(now())>= date(period2) '
        return sql
    },
    autoUpdateValidFb = ()=>{
        sql = 'select client_id,name,nofb,min(period1),period2,status from fbs '
        sql+= 'where status!="2" group by client_id order by client_id,period1 asc;'
    },
    autoUpdateTicketChildren = obj => {
      sql = 'update tickets set cause_id='+obj.cause_id+',solution="'+obj.solution+'" where parentid='+obj.parentid+' '
      console.log('update children',sql);
      return sql
    }
    module.exports = {
      getFb:getFb,
      autoUpdateTicketChildren:autoUpdateTicketChildren,
        autoUpdateExpiredFb:autoUpdateExpiredFb,
        getClient:getClient,
        getClients:getClients,
        getClientsByName:getClientsByName,
        getClientSitesByClientId:getClientSitesByClientId,
        getAllClientSites:getAllClientSites,
        getLogs:getLogs,
        createLog:createLog,
    }
