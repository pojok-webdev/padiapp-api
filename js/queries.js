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
        sql = 'update clients W '
        sql+= 'left outer join '
        sql+= '(select b.client_id,b.nofb,b.period1,status from (select client_id,max(period1) as period1 from fbs where status<>"2" group by client_id) a '
        sql+= 'inner join (select * from fbs where status<>"2") b using (client_id,period1) '
        sql+= 'order by b.client_id)X on X.client_id=W.id set W.validfb=X.nofb'
        console.log('auoupdate valid fb',sql)
        return sql
    },
    autoUpdateInvalidFb = () => {
      sql = 'update fbs a left outer join clients b on b.id=a.client_id set a.status="0" where a.nofb<>b.validfb and a.status<>"2";'
      return sql
    },
    autoUpdateValidFbs = () => {
      sql = 'update fbs a left outer join clients b on b.validfb=a.nofb '
      sql+= 'set a.status = "1" '
      sql+= 'where b.name is not null '
      sql = 'update fbs a left outer join clients b on b.validfb=a.nofb set a.status="1"  where validfb is not null'
      console.log('autoupdatefbs',sql)
      return sql
    }
    autoUpdateTicketChildren = obj => {
      sql = "update tickets a "
      sql+= "right outer join tickets b on b.id=a.parentid "
      sql+= "set a.cause_id=b.cause_id , a.solution=b.solution where b.id= "+obj.id
      console.log('update children',sql);
      return sql
    },
    getPics = () => {
      sql = 'select a.id client_id,a.name,b.name pic,b.role,b.phone,b.email from clients a '
      sql+= 'left outer join fbpics b on b.client_id=a.id order by a.name ';
      console.log('getPics',sql)
      return sql
    },
    getPicByClientID = obj => {
      sql = 'select a.id client_id,a.name,b.name pic,b.role,b.phone,b.email from clients a '
      sql+= 'left outer join fbpics b on b.client_id=a.id '
      sql+= 'where a.id='+obj.client_id+' '
      sql+= 'order by a.name '
      console.log('getPics',sql)
      return sql
    },
    getPicRoles = () => {
      sql = 'select id,name from picroles '
      console.log('PicRoles',sql)
      return sql
    },
    autocloseticketmorethan7daystroubleshoot = () => {
      sql = 'update  tickets a left outer join  troubleshoot_requests b '
      sql+= 'on b.ticket_id=a.id set a.status="1" '
      sql+= 'where b.id is not null and datediff(now(),troubleshoot_date2)is not null and datediff(now(),troubleshoot_date2)>7'
      return sql
    }
    module.exports = {
      autocloseticketmorethan7daystroubleshoot:autocloseticketmorethan7daystroubleshoot,
      getPicRoles:getPicRoles,
      getPicByClientID:getPicByClientID,
      getPics:getPics,
      autoUpdateValidFbs:autoUpdateValidFbs,
      autoUpdateInvalidFb:autoUpdateInvalidFb,
      autoUpdateValidFb:autoUpdateValidFb,
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
