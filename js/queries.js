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
    getBackupData = obj => {
      sql = 'select a.nofb id_fb,'
      sql+= 'a.businesstype jenis_usaha,'
      sql+= 'a.address alamat,'
      sql+= 'a.telp,a.fax,'
      sql+= 'dpp biaya_bulanan,'
      sql+= 'ppn ppn_bulanan,'
      sql+= 'clientcategory id_kategori_fb,'
      sql+= 'case clientcategory '
      sql+= 'when "1" then "FFR" '
      sql+= 'when "2" then "Platinum" '
      sql+= 'when "3" then "Gold" '
      sql+= 'when "4" then "Bronze" '
      sql+= 'when "5" then "Silver"  '
      sql+= 'end kategori_fb '
      sql+= 'from fbs a '
      sql+= 'left outer join (select nofb,dpp,ppn from fbfees where name="monthly") b on b.nofb=a.nofb '
      sql+= 'left outer join clients c on c.id=a.client_id '
      sql+= 'where a.status="1" and c.active="1"';
      console.log('getBackupData',sql)
      return sql
    },
    getDataFB = obj => {
      sql = 'select a.nofb id_fb,'
      sql+= 'a.businesstype jenis_usaha,'
      sql+= 'a.address alamat,'
      sql+= 'a.telp,a.fax,'
      sql+= 'dpp biaya_bulanan,'
      sql+= 'ppn ppn_bulanan,'
      sql+= 'clientcategory id_kategori_fb,'
      sql+= 'case clientcategory '
      sql+= 'when "1" then "FFR" '
      sql+= 'when "2" then "Platinum" '
      sql+= 'when "3" then "Gold" '
      sql+= 'when "4" then "Bronze" '
      sql+= 'when "5" then "Silver"  '
      sql+= 'end kategori_fb '
      sql+= 'from fbs a '
      sql+= 'left outer join (select nofb,dpp,ppn from fbfees where name="monthly") b on b.nofb=a.nofb '
      sql+= 'left outer join clients c on c.id=a.client_id '
      sql+= 'where a.status="1" and c.active="1"';
      console.log('getBackupData',sql)
      return sql
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
    getClientServices = () => {
      sql = 'select c.name,a.category service,humanreadable2 detail,activationdate,'
      sql+= 'c.id client_id,b.nofb,d.dpp,d.ppn,'
      sql+= 'case b.expirystatus when "0" then "Aktif" when "1" then b.period2 end expirystatus  from fbservices a  '
      sql+= 'left outer join fbs b on b.nofb=a.fb_id '
      sql+= 'left outer join clients c on c.id=b.client_id '
      sql+= 'left outer join (select client_id,dpp,ppn from fbfees where name="monthly") d on d.client_id=c.id '
      console.log('ClientServices',sql)
      return sql
    },
    getClientServicesByClient = obj => {
      sql = 'select c.name,a.category service,humanreadable2 detail,activationdate,'
      sql+= 'c.id client_id,b.nofb,d.dpp,d.ppn,'
      sql+= 'case b.expirystatus when "0" then "Aktif" when "1" then b.period2 end expirystatus '
      sql+= 'from fbservices a  '
      sql+= 'left outer join fbs b on b.nofb=a.fb_id '
      sql+= 'left outer join clients c on c.id=b.client_id '
      sql+= 'left outer join (select client_id,dpp,ppn from fbfees where name="monthly") d on d.client_id=c.id '
      sql+= 'where c.name like "%'+obj.name+'%" '
      console.log('ClientServices',sql)
      return sql
    },
    getClientSitesByClientName = obj => {
      sql = "select a.name,";
      sql += "case when nofb is null then ";
      sql += " case branch_id ";
      sql += " when '1' then concat('SBY',date_format(now(),'%Y%m%d'),lpad(a.id,4,'0')) ";
      sql += " when '2' then concat('JKT',date_format(now(),'%Y%m%d'),lpad(a.id,4,'0')) ";
      sql += " when 3 then concat('MLG',date_format(now(),'%Y%m%d'),lpad(a.id,4,'0')) ";
      sql += " when '4' then concat('BLI',date_format(now(),'%Y%m%d'),lpad(a.id,4,'0')) end ";
      sql += " else nofb ";
      sql += " end ccc ,";
      sql += "";
      sql += "b.businesstype,";
      sql += "c.username,";
      sql += "b.nofb,b.name fbname,";
      sql += "case b.businesstype when 'Pilihlah' then '' else b.businesstype end businesstype,";
      sql += "b.servicecategories,";
      sql += "b.siup,";
      sql += "b.npwp,";
      sql += "b.address,";
      sql += "b.billaddress,";
      sql += "b.description,";
      sql += "case when b.city = '' then '-' when b.city is null then '-' else b.city end city,";
      sql += "case when b.city = '' then d.name when b.city is null then d.name else concat(d.name,'/',b.city) end branchcity,";
      sql += "b.telp,";
      sql += "b.fax,";
      sql += "b.activationdate,";
      sql += "b.period1,";
      sql += "b.period2,";
      sql += "date_format(b.period2,'%M') lastmonth,";
      sql += "b.services,";
      sql += "d.name branch, ";
      sql += "case b.status ";
      sql += " when '0' then 'ignore' ";
      sql += " when '1' then 'valid' ";
      sql += " when '2' then 'canceled' ";
      sql += " when '3' then 'expired' end fbstatus,";
      sql += "group_concat(e.category,humanreadable2) srv,";
      sql += "b.completed ";
      sql += "from clients a ";
      sql += "right outer join fbs b on b.client_id=a.id ";
      sql += "left outer join users c on c.id=a.sale_id ";
      sql += "left outer join branches d on d.id=a.branch_id ";
      sql += "left outer join fbservices e on e.fb_id=b.nofb ";
      sql+= 'where b.name like "%'+obj.name+'%" '
      sql+= 'group by a.name,nofb,a.id,b.businesstype,b.servicecategories,b.siup,b.npwp,'
      sql+= 'b.address,b.billaddress,b.description,b.description,b.city,d.name,b.telp,'
      sql+= 'b.fax,b.activationdate,b.period1,b.period2,b.services'
      return sql
    }
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
    autoUpdateTicketChildrenByParentid = obj => {
      sql = "update tickets a "
      sql+= "right outer join tickets b on b.id=a.parentid "
      sql+= "set a.cause_id=b.cause_id , a.solution=b.solution where b.id= "+obj.id
      if(false){
        console.log('update children',sql);
      }
      return sql
    },
    autoUpdateTicketChildren = () => {
      sql = "update tickets a  right outer join tickets b on b.id=a.parentid "
      sql+= "set a.cause_id=b.cause_id,a.solution=b.solution  "
      sql+= "where b.requesttype<>'pelanggan' and a.id is not null and (a.solution<>b.solution or a.cause_id<>b.cause_id) "
      sql = 'update tickets a '
      sql+= ' right outer join tickets b on b.id=a.parentid '
      sql+= 'set a.cause_id=b.cause_id,a.solution=b.solution '
      sql+= ' where b.requesttype<>"pelanggan"  and a.id is not null '
      sql+= ' and (a.solution is null and b.solution is not null) '
      sql+= ' or (a.cause_id is null and b.cause_id is not null) '
      sql+= ' and (a.solution<>b.solution) '
      sql+= ' and (a.cause_id<>b.cause_id) '
      if(false){
        console.log('update children',sql);
      }
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
      sql+= 'on b.ticket_id=a.id set a.status="1",a.ticketend=b.solvedschedule '
      sql+= 'where b.id is not null and date(now())>=date(solvedschedule) and a.status="0" '
      if(false){
        console.log('AutoClose',sql)
      }
      return sql
    },
    createInstantSites = () => {
      sql = 'insert into client_sites '
      sql+= '(client_id,address) '
      sql+= 'select a.id,a.address '
      sql+= 'from clients a '
      sql+= 'left outer join client_sites b on b.client_id=a.id '
      sql+= 'where b.id is null and a.active="1"';
      console.log('Create Instant Sites for Clients with no Sites',sql)
      return sql
    },
    copyFU = obj => {
      sql = 'insert into ticket_followups '
      sql+= '('
      sql+= 'ticket_id,'
      sql+= 'followUpDate,'
      sql+= 'picname,'
      sql+= 'position,'
      sql+= 'picphone,'
      sql+= 'cause_id,'
      sql+= 'result,'
      sql+= 'confirmationresult,'
      sql+= 'base64confirmationresult,'
      sql+= 'description,'
      sql+= 'base64description,'
      sql+= 'conclusion,'
      sql+= 'base64conclusion,'
      sql+= 'username'
      sql+= ') '
      sql+= 'select a.id, '

      sql+= 'c.followUpDate,'
      sql+= 'c.picname,'
      sql+= 'c.position,'
      sql+= 'c.picphone,'
      sql+= 'c.cause_id,'
      sql+= 'c.result,'
      sql+= 'c.confirmationresult,'
      sql+= 'c.base64confirmationresult,'
      sql+= 'c.description,'
      sql+= 'c.base64description,'
      sql+= 'c.conclusion,'
      sql+= 'c.base64conclusion,'
      sql+= 'c.username '


      sql+= 'from tickets a '
      sql+= 'left outer join tickets b on b.id=a.parentid '
      sql+= 'left outer join ticket_followups c on c.ticket_id=b.id '
      sql+= 'where a.parentid = '+ obj.parentid + ''
      console.log('CopyFU SQL',sql)
      return sql
    }
    module.exports = {
      copyFu:copyFU,
      getBackupData:getBackupData,
      createInstantSites:createInstantSites,
      autocloseticketmorethan7daystroubleshoot:autocloseticketmorethan7daystroubleshoot,
      getPicRoles:getPicRoles,
      getPicByClientID:getPicByClientID,
      getPics:getPics,
      autoUpdateValidFbs:autoUpdateValidFbs,
      autoUpdateInvalidFb:autoUpdateInvalidFb,
      autoUpdateValidFb:autoUpdateValidFb,
      getFb:getFb,
      autoUpdateTicketChildren:autoUpdateTicketChildren,
      autoUpdateTicketChildrenByParentid:autoUpdateTicketChildrenByParentid,
      autoUpdateExpiredFb:autoUpdateExpiredFb,
      getClient:getClient,
      getClients:getClients,
      getClientsByName:getClientsByName,
      getClientSitesByClientId:getClientSitesByClientId,
      getAllClientSites:getAllClientSites,
      getClientServices:getClientServices,
      getClientServicesByClient:getClientServicesByClient,
      getClientSitesByClientName:getClientSitesByClientName,
      getLogs:getLogs,
      createLog:createLog,
    }
