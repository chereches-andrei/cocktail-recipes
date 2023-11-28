import express from 'express';
import axios from 'axios'
import bodyParser from 'body-parser';
const app = express();
const port = 3000;

app.use(express.static('public'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))

app.get('/', (req,res)=>{
    res.render('index.ejs', { content:'', recipe:'', preparation:''})
       
})

app.post('/submit', (req,res)=>{
    
    let user = req.body.choose // takes the value of the input form  
    const index = cocktails.find(findIndex) //in the variable we store the array and we apply the find method to search in array
 // created a function to chech if what user inserts matches the array.name 
 function findIndex(cocktail){
    return cocktail.name === user
 }
 // created a if/else statament to display the user the searched item, if not, to display an message

 if(index){
    res.render("index.ejs", {content : { name: index.name, recipe: index.recipe, preparation: index.preparation}})
 } else{
    res.render("index.ejs", {content :{name:"Sorry, the cocktail was not found"}})
 }
 
})

app.get('/additems.ejs', (req,res)=>{
    res.render('additems.ejs', { addedItem: ''}) // redirect to the additems.ejs
})

app.post('/add', (req,res)=>{
    let currentIndex = cocktails.length; // setting the initial ID to be the lenght of the array
    // storing in variables all the input fields that user will fill
    let namePost = req.body.addname
    let recipePost = req.body.addrecipe
    let preparationPost = req.body.addpreparation
    let typePost = req.body.type
    // creating an object variable wich contains all needed information to be stored in the array
    let newPost = {
        id: currentIndex +1,
        name: namePost,
        recipe: recipePost,
        preparation:preparationPost,
        type:typePost
    };
    // adding the newpost object to the existing array
    cocktails.push(newPost)
    // a statment that will show the user if the post was added to the array or not
    if(cocktails.includes(newPost)){
        res.render('additems.ejs', {addedItem: "Succesfuly added!"})
    } else{
        res.status(500)
        res.render('additems.ejs', {addedItem: "Something went wrong! Try again!"})
    }
    console.log(newPost)
})




app.listen(port, ()=>{
    console.log(`The server is running on port:${port}`)
})


const cocktails = [
    {
        id:1,
        name: 'Margherita',
        recipe:"Tequila: Silver or reposado is traditionally considered to be the best tequila for margaritas, but any type of tequila (or smoky mezcal or sotol) will work. Freshly-squeezed lime juice: For the best fresh flavor, I highly recommend juicing your own limes versus using store-bought lime juice. I swear by this citrus juicer, which makes juicing a breeze and comes in especially handy if you are making a large batch. Orange liqueur: Cointreau is my go-to, but Grand Marnier is also delicious or you can use a good-quality Triple Sec.",
        preparation: '1.Prep your glasses: If you would like to salt the rim of your glass, simply run a juicy lime wedge around the rim and then dip the rim in coarse Kosher salt. Set the glass aside until ready to use. 2.Combine the ingredients in a cocktail shaker: Combine the tequila, lime juice, orange liqueur, and a few ice cubes in a cocktail shaker. (Or alternately if you do not have a cocktail shaker, you can stir the ingredients together in a measuring cup or shake them together in a mason jar.) 3.Shake shake shake: Give the mixture a good shake (or a good stir!) for about 10 seconds or until chilled. 4.Taste and add sweetener, if desired: Give the margarita mix a taste and if you think it needs extra sweetener, add in a teaspoon or two of agave (or simple syrup) at a time until the mix reaches your desired level of sweetness. 5.Strain and serve on the rocks. Place a few ice cubes (or I often use one large ice cube so that it will melt more slowly) in the serving glass, then strain the margarita mix over the ice and garnish with a slice of lime.',
        type:'alcool'
    },
    {
        id:2,
        name: 'Gin Tonic',
        recipe: '2 ounces gin, 4 to 6 ounces tonic water, to taste, Lime wedge or slices,for garnish',
        preparation: '1.Gather the ingredients. 2.In a highball glass filled with ice cubes, pour the gin, then top with tonic. 3.Gently stir to combine, but not so much so that you lose carbonation. 4.Garnish with a lime wedge or lime slices. Serve and enjoy.',
        type:'alcool'
    },
    {
        id:3,
        name: 'Marry Blood',
        recipe:"Celery salt, 1 lemon wedge, 1 lime wedge, 2 ounces vodka, 4 ounces tomato juice, 2 teaspoons prepared horseradish, 2 dashes Tabasco sauce, 2 dashes Worcestershire sauce,1 pinch ground black pepper,1 pinch smoked paprika, Garnish: parsley sprig, Garnish: 2 green olives, Garnish: lime wedge",
        preparation: '1.Pour some celery salt onto a small plate. 2.Rub the juicy side of the lemon or lime wedge along the lip of a pint glass. 3.Roll the outer edge of the glass in celery salt until fully coated, then fill the glass with ice and set aside. 4.Squeeze the lemon and lime wedges into a shaker and drop them in. 5.Add the vodka, tomato juice, horseradish, Tabasco, Worcestershire sauce, black pepper, smoked paprika, plus a pinch of celery salt along with ice and shake gently. 6.Strain into the prepared glass. 7.Garnish with parsley sprig, 2 speared green olives, a lime wedge and a celery stalk (optional).',
        type:'alcool'
    }
]