
var hed = document.createElement('header')
hed.innerHTML = 'Welcome.<br>Here You Will See A New Picture From NASA, Everyday.</br><br> You Can Also Go Through The Archives From Jun 16, 1995.<br>Enjoy Viewing And Learning About Space.'
hed.setAttribute('style','font-size:40;text-align:center')
document.body.append(hed)


var masterContainer = document.createElement('div')
masterContainer.classList.add('container')
masterContainer.setAttribute('style','height:90%;overflow:auto')


document.body.append(masterContainer)




var topBlock = document.createElement('div')
topBlock.innerHTML='Click On The Button Below To View.<br>'
document.body.append(topBlock)
topBlock.id = 'top'
topBlock.classList.add('topBlock')

var podButton = document.createElement('button')
podButton.type = 'button'
podButton.id='pod'
podButton.innerHTML = 'Picture Of The Day'
podButton.setAttribute('onclick','picofday()')
podButton.setAttribute('style','font-size:20')
topBlock.append(podButton)


var getpic = 'https://api.nasa.gov/planetary/apod?api_key=<your-api-key-here>'


function picofday(){

    fetch(getpic)
    .then((resp)=>resp.json())
    .then((result)=>{
     console.log(result)


     

     var dispWindow = document.createElement('div')
     dispWindow.classList.add('modal')
     dispWindow.id='modal1'
     document.body.append(dispWindow)

    var dispContent = document.createElement('div')
    dispContent.classList.add('modal-content','container')
    dispWindow.append(dispContent)

    var closeIcon = document.createElement('span')
    closeIcon.classList.add('close')
    closeIcon.innerHTML='&times'
    dispContent.append(closeIcon)

    dispWindow.style.display = 'block'

    closeIcon.onclick = function() {
        dispWindow.style.display = "none"
      }

    window.onclick = function(event) {
        if (event.target == dispWindow) {
          dispWindow.style.display = "none"
        }}

    var picHolder = document.createElement('object')
    picHolder.data= result['url']
    picHolder.setAttribute('style','position:relative;top:20px;width:100%; height:100%')
    dispContent.append(picHolder)

    var linq = document.createElement('a')
    linq.href= 'https://www.nasa.gov/'
    linq.innerHTML = 'Visit NASA to know more'

    var expHolder = document.createElement('div')
    expHolder.innerHTML = 'Astronomical Photo of the Day(APOD):&nbsp' +result['title'] + '<br><br>'+result['explanation'] + '<br>Visit&nbsp'+ linq + '&nbspto know more.<br><br>'+ 'Copyright:&nbsp'+result['copyright']+ '<br><br>'+ 'Date:&nbsp'+result['date'] 
    expHolder.setAttribute('style','position:relative;top:30px;text-align:justify')
    dispContent.append(expHolder)
         
    })
    .catch((err)=>{console.log(err)})

}

var midBlock = document.createElement('div')
midBlock.innerHTML= 'Set Date And Hit Go.<br>'
document.body.append(midBlock)
midBlock.id = 'mid'
midBlock.classList.add('midBlock')

var setDate = document.createElement('input')
setDate.type='date'
setDate.id = 'anydate'
midBlock.append(setDate)


var anyDateButton = document.createElement('button')
anyDateButton.type = 'button'
anyDateButton.id='anybutton'
anyDateButton.innerHTML = 'Go!'
anyDateButton.setAttribute('onclick','anydaypic()')
anyDateButton.setAttribute('style','font-size:20;position:relative;left:50px')
midBlock.append(anyDateButton)

var error = document.createElement('div')
        midBlock.append(error)



function anydaypic(){

    var date = document.getElementById('anydate').value
    if(!date)
    {
        error.innerHTML = 'Enter Date.'
    }
    else{
    var holdDate = parseInt(date.split('-').join(''))


    var today = new Date()
    var dd = today.getDate()
    
    var mm = today.getMonth()+1 
    var yyyy = today.getFullYear()
    if(dd<10) 
    {
        dd='0'+dd
    } 
    
    if(mm<10) 
    {
        mm='0'+mm
    } 
    today = yyyy+'-'+mm+'-'+dd

    today = parseInt(today.split('-').join(''))


    console.log(date,holdDate,today)

    if(holdDate>today)
    {
        
        error.innerHTML = 'Date Should Be Between Jun 16, 1995 And Today.'
        
    }
    else{
        
        error.innerHTML = ''

    fetch(getpic+'&date='+date)
    .then((resp)=>resp.json())
    .then((result)=>{
     console.log(result)

     if(result['code']==400)
     {
         error.innerHTML = result['msg']
     }
     else{


     var dispWindow = document.createElement('div')
     dispWindow.classList.add('modal')
     dispWindow.id='modal1'
     document.body.append(dispWindow)

    var dispContent = document.createElement('div')
    dispContent.classList.add('modal-content','container')
    dispWindow.append(dispContent)

    var closeIcon = document.createElement('span')
    closeIcon.classList.add('close')
    closeIcon.innerHTML='&times'
    dispContent.append(closeIcon)

    dispWindow.style.display = 'block'

    closeIcon.onclick = function() {
        dispWindow.style.display = "none"
      }

    window.onclick = function(event) {
        if (event.target == dispWindow) {
          dispWindow.style.display = "none"
        }}



    var picHolder = document.createElement('object')
    picHolder.data= result['url']
    picHolder.setAttribute('style','position:relative;top:20px;width:100%; height:100%')
    dispContent.append(picHolder)

    var linq = document.createElement('a')
    linq.href= 'https://www.nasa.gov/'
    linq.innerHTML = 'Visit NASA to know more'

    var expHolder = document.createElement('div')
    expHolder.innerHTML = 'Picture For the Date Chosen:&nbsp' +result['title'] + '<br><br>'+result['explanation'] + '<br>Visit&nbsp'+ linq + '&nbspto know more.<br><br>'+ 'Copyright:&nbsp'+result['copyright']+ '<br><br>'+ 'Date:&nbsp'+result['date'] 
    expHolder.setAttribute('style','position:relative;top:30px;text-align:justify;width:90%;left:5%;')
    dispContent.append(expHolder)
         
    }})
    .catch((err)=>{console.log(err)})
    
}

    }
}


var bottomBlock = document.createElement('div')
bottomBlock.innerHTML= 'Set From And To Dates And Hit Go.<br>'
document.body.append(bottomBlock)
bottomBlock.id = 'bottom'
bottomBlock.classList.add('bottomBlock')

var from = document.createElement('div')
from.innerHTML="From"
bottomBlock.append(from)

var fromDate = document.createElement('input')
fromDate.type='date'
fromDate.id = 'fromdate'
bottomBlock.append(fromDate)

var to = document.createElement('div')
to.innerHTML="To"
bottomBlock.append(to)

var toDate = document.createElement('input')
toDate.type='date'
toDate.id = 'todate'
toDate.setAttribute('style','position:relative;left:3%')
bottomBlock.append(toDate)


var bottomButton = document.createElement('button')
bottomButton.type = 'button'
bottomButton.id='bottombutton'
bottomButton.innerHTML = 'Go!'
bottomButton.setAttribute('onclick','fromtopic()')
bottomButton.setAttribute('style','font-size:20;position:relative;left:50px')
bottomBlock.append(bottomButton)

var showResult = document.createElement('div')
showResult.classList.add('container')
showResult.setAttribute('style','overflow:auto;font-size:20')
bottomBlock.append(showResult)

var tempHold = document.createElement('div')
                tempHold.classList.add('container')
                tempHold.setAttribute('style','overflow:auto;font-size:30')
                
                showResult.append(tempHold)

/*var error1 = document.createElement('div')
        tempHold.append(error1)*/


var date = ''
var date1 = ''

var masterResult = ''

function display(ele)
    {

        console.log(ele.value)
   
        var dispWindow = document.createElement('div')
        dispWindow.classList.add('modal')
        dispWindow.id='modal1'
        document.body.append(dispWindow)
   
       var dispContent = document.createElement('div')
       dispContent.classList.add('modal-content','container')
       dispWindow.append(dispContent)
   
       var closeIcon = document.createElement('span')
       closeIcon.classList.add('close')
       closeIcon.innerHTML='&times'
       dispContent.append(closeIcon)
   
       dispWindow.style.display = 'block'
   
       closeIcon.onclick = function() {
           dispWindow.style.display = "none"
         }
   
       window.onclick = function(event) {
           if (event.target == dispWindow) {
             dispWindow.style.display = "none"
           }}
   
   
   
       var picHolder = document.createElement('object')
       picHolder.data= masterResult[ele.value]['url']
       picHolder.setAttribute('style','position:relative;top:20px;width:100%; height:100%')
       dispContent.append(picHolder)
   
       var linq = document.createElement('a')
       linq.href= 'https://www.nasa.gov/'
       linq.innerHTML = 'Visit NASA to know more'
   
       var expHolder = document.createElement('div')
       expHolder.innerHTML = 'Picture For the Date Chosen:&nbsp' +masterResult[ele.value]['title'] + '<br><br>'+masterResult[ele.value]['explanation'] + '<br>Visit&nbsp'+ linq + '&nbspto know more.<br><br>'+ 'Copyright:&nbsp'+masterResult[ele.value]['copyright']+ '<br><br>'+ 'Date:&nbsp'+masterResult[ele.value]['date'] 
       expHolder.setAttribute('style','position:relative;top:30px;text-align:justify;width:90%;left:5%;')
       dispContent.append(expHolder)
   
        
        }


function fromtopic(){

    tempHold.innerHTML='Loading, Please Wait.'
    
    date = document.getElementById('fromdate').value
    date1 = document.getElementById('todate').value

    console.log(date,date1)
    if(!date || !date1)
    {
        tempHold.innerHTML = 'Both Dates Required.'
    }
    else{

    var holdDate = parseInt(date.split('-').join(''))
    var holdDate1 = parseInt(date1.split('-').join(''))


    var today = new Date()
    var dd = today.getDate()
    
    var mm = today.getMonth()+1 
    var yyyy = today.getFullYear()
    if(dd<10) 
    {
        dd='0'+dd
    } 
    
    if(mm<10) 
    {
        mm='0'+mm
    } 
    today = yyyy+'-'+mm+'-'+dd

    today = parseInt(today.split('-').join(''))


    console.log(holdDate,holdDate1,today)

    if(holdDate>today || holdDate1>today)
    {
        
        tempHold.innerHTML = 'Dates Should Be Between Jun 16, 1995 And Today.'
        
    }
    else if(holdDate>holdDate1)
    {
        tempHold.innerHTML = 'Enter Correct Dates.'
    }
   else
   {
      


   fetch(getpic+'&start_date='+date+'&end_date='+date1)
   .then((resp)=>resp.json())
   .then((result)=>{



    masterResult = result
    console.log(masterResult)

    if(result['code']==400)
     {
         tempHold.innerHTML = result['msg']
     }
     else{
            if(date==date1)
            { 
                var dispWindow = document.createElement('div')
                dispWindow.classList.add('modal')
                dispWindow.id='modal1'
                document.body.append(dispWindow)
           
               var dispContent = document.createElement('div')
               dispContent.classList.add('modal-content','container')
               dispWindow.append(dispContent)
           
               var closeIcon = document.createElement('span')
               closeIcon.classList.add('close')
               closeIcon.innerHTML='&times'
               dispContent.append(closeIcon)
           
               dispWindow.style.display = 'block'
           
               closeIcon.onclick = function() {
                   dispWindow.style.display = "none"
                 }
           
               window.onclick = function(event) {
                   if (event.target == dispWindow) {
                     dispWindow.style.display = "none"
                   }}
           
           
           
               var picHolder = document.createElement('object')
               picHolder.data= result[0]['url']
               picHolder.setAttribute('style','position:relative;top:20px;width:100%; height:100%')
               dispContent.append(picHolder)
           
               var linq = document.createElement('a')
               linq.href= 'https://www.nasa.gov/'
               linq.innerHTML = 'Visit NASA to know more'
           
               var expHolder = document.createElement('div')
               expHolder.innerHTML = 'Picture For the Date Chosen:&nbsp' +result[0]['title'] + '<br><br>'+result[0]['explanation'] + '<br>Visit&nbsp'+ linq + '&nbspto know more.<br><br>'+ 'Copyright:&nbsp'+result[0]['copyright']+ '<br><br>'+ 'Date:&nbsp'+result[0]['date'] 
               expHolder.setAttribute('style','position:relative;top:30px;text-align:justify;width:90%;left:5%;')
               dispContent.append(expHolder)


            }
            else{

                tempHold.innerHTML='Click on image/white borders to enlarge and read. For videos, click to play inset or click on the white borders to enlarge, play and read.<br>'


                for(i=0;i<result.length;i++)
                {
                    var obj = document.createElement('object')
                    obj.data = result[i]['url']
                    obj.id= i
                    obj.value = i
                    obj.setAttribute('style','width:500px;height:300px;border: 25px solid white;margin:10px')
                    obj.setAttribute('onmousedown','display(this)')
                    tempHold.append(obj)
                }

                

            }
}
   })
   }
}}


masterContainer.append(topBlock,midBlock,bottomBlock)

var foo = document.createElement('footer')
foo.innerHTML = 'Powered By NASA APOD'
foo.setAttribute('style','font-size:15;font-style:italic;text-align:right')
document.body.append(foo)
