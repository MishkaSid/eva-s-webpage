`use strict`

addEventListener(`click`, (event) => {
    if (event.target.matches(`#service`)) 
        {
        insert(event.target)
        popup()
        }
})

addEventListener(`click`, (event) => {
    if (event.target.matches(`#popup`||`#popup-close`)) 
        {
        popup()
        }
})
function popup()
{
    let popup = document.getElementById(`popup`)
    if(popup.style.display === `block`)
        popup.style.display = `none`
    else
    popup.style.display = `block`
}

function insert(service)
{   
    let title = document.getElementById(`popup-title`)
    let text = document.getElementById(`popup-text`)
    if(service.innerHTML==`עיסוי שוודי`)
    {title.innerHTML = `<b>עיסוי שוודי</b>`
    text.innerHTML = `מיועד לשחרר מתחים, להרגיע את הגוף, לשפר את זרימת הדם ולשחרר שרירים תפוסים
                      העיסוי כולל טכניקות שונות כמו ליטופים עדינים, לחיצות עמוקות, לישה ותנועות מעגליות, המסייעות להרפיית השרירים ולעידוד זרימת הדם.`
    }
    else if(service.innerHTML==`עיסוי באבנים חמות`)
    {title.innerHTML = `<b>עיסוי באבנים חמות</b>`
    text.innerHTML = `העיסוי באבנים חמות משלב טכניקות של עיסוי שוודי לצד תנועות מעגליות ולחיצות, כשהאבנים עצמן משמשות ככלי עיסוי או מונחות בנקודות שונות בגוף כדי לשמור על חום לאורך הטיפול. החום תורם להמרצת מחזור הדם, להקלה בכאבים ולהפחתת מתחים נפשיים וגופניים, והוא מאוד פופולרי עבור אנשים המחפשים חוויה מרגיעה ומשחררת.`
    }
    else if(service.innerHTML==`עיסוי משלוב`)
    {title.innerHTML = `<b>עיסוי משלוב</b>`
    text.innerHTML = `מטרת העיסוי המשולב היא לספק טיפול מותאם אישית, המשלב הרפיה עם שחרור מתחים ונקודות כאב. לדוגמה, ניתן להתחיל עם עיסוי שוודי לרגיעה כללית, ואז לעבור לטכניקות של רקמות עמוקות באזורים בהם השרירים תפוסים או כואבים. 
יתרון העיסוי המשולב הוא בגמישות שלו – הוא מתאים למגוון רחב של צרכים, בין אם מדובר בהפגת מתחים, שיפור זרימת הדם, שחרור שרירים תפוסים, או אפילו חווית רגיעה עמוקה.`
    }
}
