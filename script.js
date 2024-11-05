`use strict`

document.addEventListener(`click`, (event) => {
    if (event.target.matches(`#popup`||`#popup-close`)) 
        {
        popup()
        }
})

function popup()
{
    let popup = document.getElementById(`popup`)
    if(popup.style.display == `block`)
        popup.style.display = `none`
    else
    popup.style.display = `block`
}

function insert(service)
{   
    let title = document.getElementById(`popup-title`)
    let text = document.getElementById(`popup-text`)
    let image = document.getElementById(`popup-image`)
    if(service.innerHTML==`עיסוי שוודי`)
    {
        title.innerHTML = `<b>עיסוי שוודי</b>`
        text.innerHTML = `מיועד לשחרר מתחים, להרגיע את הגוף, לשפר את זרימת הדם ולשחרר שרירים תפוסים
                      העיסוי כולל טכניקות שונות כמו ליטופים עדינים, לחיצות עמוקות, לישה ותנועות מעגליות, המסייעות להרפיית השרירים ולעידוד זרימת הדם.`
        image.src = `images/massage.jpg`
    }
    else if(service.innerHTML==`עיסוי באבנים חמות`)
    {
        title.innerHTML = `<b>עיסוי באבנים חמות</b>`
        text.innerHTML = `עיסוי באבנים חמות הוא חוויה מרגיעה ומחממת שמשלבת עיסוי שוודי עם אבנים חלקות המחוממות לטמפרטורה נעימה. האבנים מונחות בנקודות מרכזיות בגוף ומסייעות להרפיית השרירים, לשחרור מתחים ולהמרצת מחזור הדם. החום העדין חודר לעומק הרקמות, מקל על כאבים ומשאיר תחושת רוגע עמוקה ואיזון פנימי.`
        image.src = `images/stones massage.jpg`
    }
    else if(service.innerHTML==`עיסוי משולב`)
    {
        title.innerHTML = `<b>עיסוי משולב</b>`
        text.innerHTML =`עיסוי משולב הוא טיפול מותאם אישית שמשלב טכניקות מעיסויים שונים כמו שוודי ורקמות עמוקות. הטיפול מתחיל בתנועות מרגיעות לשחרור מתחים, וממשיך בלחיצות ממוקדות באזורים עם שרירים תפוסים. המטרה היא לספק חוויה שמרגיעה את הגוף, מקלה על כאבים ומשפרת את זרימת הדם, להשגת רוגע עמוק ואיזון מושלם.`
        image.src = `images/deep massage.jpg`
    }
    else if(service.innerHTML==`עיסוי רפלקסולוגיה`)
    {
        title.innerHTML = `<b>עיסוי רפלקסולוגיה</b>`
        text.innerHTML=`רפלקסולוגיה היא שיטת טיפול הוליסטית המשלבת עיסוי ממוקד בכפות הרגליים כדי להשפיע על כל חלקי הגוף. בטיפול רפלקסולוגי, כל אזור בכף הרגל מקושר לאיבר אחר בגוף, וכשמעסים את הנקודות הללו ניתן לשפר את זרימת הדם, להפיג מתח ולסייע בריפוי טבעי. הטיפול מספק תחושת רוגע עמוקה ועוזר להקל על כאבים, לשפר שינה ולהחזיר לגוף איזון והרמוניה.`
        image.src = `images/feet massage.jpg`
    }
    popup()
}
