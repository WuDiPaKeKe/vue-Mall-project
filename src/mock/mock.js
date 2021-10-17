import Mock from "mockjs"
Mock.mock("/mock/users","get",{
  code:200,
  "data|100":[
    {name:"@cname",city:"@city",wife:"@last"}
  ]
})
