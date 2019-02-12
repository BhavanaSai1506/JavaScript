var utility=require('../Oops/oopsUtility')
var file=require('fs')
var content=file.readFile('clicnic.json','utf8')
var data=JSON.parse(content)
function clinic(){
    utility.clinicManagement(data,file)
    }
    clinic()
    