'use client'
import { Component } from 'react';
import { StoreItem } from './StoreItem';

class Menu extends Component {

    constructor(props) {
        super(props);
        this.state =
        {
            data: [
                {
                    id: 1,
                    imageURL: "https://thetockablog.com/wp-content/uploads/2023/12/img_9763.jpg?w=1280",
                    name: "Long Island Iced Tea",
                    steps: [
                        "Ice a tall glass",
                        "0.2oz Vodka",
                        "0.2oz Triple Sec",
                        "0.2oz Gin",
                        "0.2oz Tequila",
                        "0.2oz White Rum",
                        "1oz Simple Syrup",
                        "1oz Lemon juice",
                        "Top with coke",
                        "Garnish: Lemon"
                    ],
                    tags: ["Vodka", "Gin", "Liquer", "Tequila", "Rum"]
                },
                {
                    id: 2,
                    imageURL: "https://hips.hearstapps.com/hmg-prod/images/martini-recipe-1657532229.jpg?crop=1.00xw:0.501xh;0,0.159xh&resize=1200:*",
                    name: "Martini",
                    steps: [
                        "Chill martini glass",
                        "Ice a shaker",
                        "1.75oz Vodka",
                        "0.25oz dry vermooth",
                        "shake",
                        "double strain",
                        "Garnish: Olive"
                    ],
                    tags: ["Vodka"]
                },
                {
                    id: 3,
                    imageURL: "https://store.berchicci.ca/image/cache/catalog/product/Verona-pera-800x800.webp",
                    name: "Pear Nectar",
                    steps: [
                        "3x Lime Zest + juice",
                        "250ml Honey",
                        "750ml Pear juice",
                        "1/2 cup Lime Juice"
                    ],
                    tags: ["extra"]
                },
                {
                    id: 4,
                    imageURL: "https://images.squarespace-cdn.com/content/v1/5fdaf58200d35c18cdbbf0e0/1630038171385-JUJ2E5V7F1U2KU8DU0K0/Nonsmoked_Orange.jpg",
                    name: "Josper Smoked Orange Wheels",
                    steps: [
                        "Orange Sliced vie slicer on setting 2 (As thin as you can while still being whole wheels)",
                        "spray roasting rack with canola oil",
                        "Brush with simple syrup, and place on wire roasting rack",
                        "Smoke in Josper fat lowest temp possible for 1 hour",
                        "finish dehydrating in standard deck overnight. About 12hrs, no temp just heat from pilot light.",
                        "Store in dry storage, (30 day shelf life)"
                    ],
                    tags: ["extra"]
                },
                {
                    id: 5,
                    imageURL: "https://www.simplyrecipes.com/thmb/TkVS-EzXsVmtEOgX2p5Iz8h-35I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__simple-syrup-lead-3-06728463a16d42ad997125e8834ebbe1.jpg",
                    name: "Simple Syrup",
                    steps: [
                        "1690.7 Grams white sugar",
                        "2L Water",
                        "1:1 sugar to water",
                        "Bring to a boil",
                        "Cool"
                    ],
                    tags: ["extra"]
                },
                {
                    id: 6,
                    imageURL: "https://d14iv1hjmfkv57.cloudfront.net/assets/recipes/sparkling-grapefruit-granita/_600x600_crop_center-center_61_line/Page-216-copy.jpg?v=1708578430",
                    name: "Grapefruit Granita",
                    steps: [
                        "2L Pink Grapefruit Juice",
                        "2L Granita simple Syrup",
                        "In a pot heat 2L of water and 4 cups of sugar until sugar is dissolved",
                        "remove from heat and add the cold grapefruit juice",
                        "Stir well",
                        "pur out contents into a full sized shallow metal hotel pan and place in the freezer",
                        "after the mizture has been in the frezer for 1 hour go in and using 2 forks scrape the mixture from the outside ot the center",
                        "repeat this process every 30 minutes for 3 hours",
                        "when the ice is flaked, using a small ice cream scoop, form balls of granita slush and lay on a frozen baking tray in the freezer for service",
                        "You may need to press the balls into the scoop to form the balls tighter.",
                        "Store in freezer (7 day shelf life)"
                    ],
                    tags: ["extra"]
                },
                {
                    id: 7,
                    imageURL: "https://troyersspices.ca/app/uploads/2018/11/Caesar-Salt.jpg",
                    name: "Josper Smoked Caesar Spice",
                    steps: [
                        "Mix 250 grams of celery salt with 250 grams of Montreal Steak Spice",
                        "Blend mix tohether and place ion baking sheet w/ parchemnt papter",
                        "Smoke in josper at low heat for 2 hours, stirring every 30 minutes",
                        "let mix cool",
                        "Store dry in airtight container"
                    ],
                    tags: ["extra"]
                },
                {
                    id: 8,
                    imageURL: "https://www.cakenknife.com/wp-content/uploads/2019/09/Chai-Infused-Bourbon_7948-660x992.jpg",
                    name: "Chai infused Bulleit Bourbon",
                    steps: [
                        "6ea Tazo Chai Tea Bags",
                        "750ml Bulleit Bourbon",
                        "Place six Tazo chai tea bags in a cambro with 750ml bottle of Bulleit Bourbon",
                        "Let steep for 2 hours",
                        "After 2 hours remove tea bags and strain any tea leaves or solids out of the bourbon. ",
                        "Note - ratio of tea to bourbon is 1 tea per 4oz of bourbon"
                    ],
                    tags: ["Whiskey"]
                },
                {
                    id: 9,
                    imageURL: "https://willamettetransplant.com/wp-content/uploads/2020/05/Ginger-simple-syrup-icon.jpg",
                    name: "Ginger Syrup",
                    steps: [
                        "500g Water",
                        "500g Sugar",
                        "150g Ginger Grated",
                        "Bring water, sugar, and ginger to a boil",
                        "Strain and let cool",
                        "Store in Fridge"
                    ],
                    tags: ["extra"]
                },
                {
                    id: 10,
                    imageURL: "https://www.acouplecooks.com/wp-content/uploads/2021/02/Spanish-Coffee-051.jpg",
                    name: "Spanish Coffee",
                    steps: [
                        "0.5oz St.Remy VSOP brandy",
                        "0.5oz Kahlua",
                        "5oz filled Americano",
                        "10g Whipped Cream",
                        "Glass Mug/Hot drink setup",
                        "Make Americano - short",
                        "Add alcohol",
                        "Top with whipped cream"

                    ],
                    tags: ["Liquer"]
                },
                {
                    id: 11,
                    imageURL: "https://glutenfreeandmore.com/wp-content/uploads/2018/06/Millionaires-Coffee.jpg",
                    name: "Millionaires Coffee",
                    steps: [
                        ".33oz Bailey's",
                        ".33oz Kahlua",
                        ".33oz Frangelico",
                        "4oz Coffee",
                        "Whipped Cream",
                        "dusting of Cinnamon",
                        "Glass Mug/Hot drink setup",
                        "Make coffee",
                        "Add alcohol",
                        "Top with whipped cream",
                        "Dust with cinnamon"
                    ],
                    tags: ["Liquer"]
                },
                {
                    id: 12,
                    imageURL: "https://i.pinimg.com/originals/a7/f2/a9/a7f2a912bf6f31d2953b7251ebec03c7.jpg",
                    name: "Monte Cristo",
                    steps: [
                        "1 Sugar Rim",
                        "0.5oz Grand Marnier",
                        "0.5oz Kahlua",
                        "5oz filled Americano",
                        "Whipped Cream",
                        "Garnish: Cherry",
                        "Glass Mug/Hot drink setup",
                        "Rim glass with sugar",
                        "make Americano - short",
                        "Add alcohol",
                        "Top with whipped cream",
                        "Garnish with cherry on a pick"
                    ],
                    tags: ["Liquer"]

                },
                {
                    id: 13,
                    imageURL: "https://www.acouplecooks.com/wp-content/uploads/2021/08/French-Press-Coffee-008.jpg",
                    name: "French Press Coffee",
                    steps: [
                        "1 portion Ground Coffee",
                        "4 portions Hot Water",
                        "30ml side of dairy upon request",
                        "1 piece sugar stick",
                        "1-1 1/2 inches of coffee in the bottom of the press",
                        "Add hot water",
                        "Glass Mug/Hot drink setup",
                        "Serve and instruct guest to press after 3 minutes"
                    ],
                    tags: ["0%"]

                },
                {
                    ID: 14,
                    imageURL: "https://www.gimmesomeoven.com/wp-content/uploads/2015/10/Irish-Coffee-Recipe-3.jpg",
                    name: "Irish Coffee",
                    steps: [
                        "1 cube Brown Sugar Cube",
                        "1 serving Americano",
                        "1oz Jameson irish Whiskey",
                        "Whipped Cream",
                        "Glass Mug/Hot drink setup",
                        "Place sugar cube in glass",
                        "make Americano - short",
                        "Add whiskey",
                        "Top with whipped cream",
                        "Plate and serve"
                    ],
                    tags: ["Whiskey"]
                },
                {
                    id: 15,
                    imageURL: "https://cdn.cdkitchen.com/recipes/images/2019/10/128482-8911-mx.jpg",
                    name: "B52 Coffee",
                    steps: [
                        "0.33oz Khalua",
                        "0.33oz Grand Marnier",
                        "0.33oz Baileys",
                        "5oz Americano",
                        "Whipped Cream",
                        "1 Half Wheel Orange",
                        "Glass Mug/Hot drink setup",
                        "Make Americano - short",
                        "Add alcohol",
                        "Top with whipped cream",
                        "Garnish with orange half wheel"
                    ],
                    tags: ["Liquer"]
                },
                {
                    id: 16,
                    imageURL: "https://www.cbc.ca/stevenandchris/content/images/bluberry-tea-cocktail.jpg",
                    name: "Blueberry tea",
                    steps: [
                        "0.50z Grand Marnier",
                        "0.50z Amaretto",
                        "5oz Tea",
                        "Glass Mug and snifter glass/ Plate with beverage napkin",
                        "Fill glass mug with 2/3 Orange Pekoe Tea",
                        "In a snifter glass, pirt in alcohol",
                        "Place snifter resting on the glass mug",
                        "Plate and serve"
                    ],
                    tags: ["Liquer"]
                },
                {
                    id: 17,
                    imageURL: "https://www.bargpt.app/_next/image?url=https%3A%2F%2Fheybairtender.s3.amazonaws.com%2Frecipes%2Fgolden-velvet-delight_D3.png&w=3840&q=75",
                    name: "Ritz Flamme",
                    steps: [
                        "0.75oz Courvosier VS",
                        "0.25oz Cointreau",
                        "0.5oz Orange Juice",
                        "4oz Steller Jays Brut",
                        "1 wheel Josper Smoked Orange",
                        "1 Dashes Angostura Bitters",
                        "Shake/Chilled Champagne Glass",
                        "Pour all ingredients except brut into shaker with ice",
                        "Shake and strain into a chilled flute glass",
                        "add Stellers Jay Brut",
                        "Garnish placed inside cocktail - Orange wheel smoked in Josper"
                    ],
                    tags: ["Liquer"]
                },
                {
                    id: 18,
                    imageURL: "https://heybairtender.s3.amazonaws.com/recipes/crisp-zen-elixir.png",
                    name: "Zen Cucumber",
                    steps: [
                        "2oz Sake",
                        "0.5oz Lemon Juice",
                        "0.5oz Simple Syrup",
                        "3 slice Cucumber",
                        "1 filled Soda Water",
                        "Cucumber Garnish",
                        "Shake",
                        "Add all ingredients except soda water to shaker with ice",
                        "Shake and strain into a rocks glass with new ice",
                        "Top with soda water",
                        "Garnish with cucumber on rim"
                    ],
                    tags: ["Liquer"]
                },
                {
                    id: 19,
                    imageURL: "https://emilylaurae.com/wp-content/uploads/2022/04/aperol-negroni-sour-9.jpg",
                    name: "Kamloops Negroni",
                    steps: [
                        "0.75oz Gordons Gin",
                        "0.75oz Campari",
                        "0.75oz Martini Rosso",
                        "1oz Orange Juice",
                        "0.5oz Simple Syrup",
                        "1 egg white",
                        "Dry shake",
                        "add all ingredients to shaker",
                        "Shake without Ice",
                        "Add ice and shake till chilled",
                        "Strain into rocks glass"
                    ],
                    tags: ["Gin"]
                },
                {
                    id: 20,
                    imageURL: "https://scrappygeek.com/wp-content/uploads/2015/12/Rudolphs-Red-Nose-Whiskey-Drink.jpg",
                    name: "Red Nosed Spritz",
                    steps: [
                        "0.75oz Grey Goose Vodka",
                        "0.25 st. Germain Elderflower",
                        "1.5oz Cranberry Juice",
                        "3oz Steller Jays Brut",
                        "1 piece Rosemary Sprig (~3 inches)",
                        "2 pieces Cranberries",
                        "Shake/Chilled Champagne Coupe Glass",
                        "Take a rosemarry sprig and remove needles to create room for 2 cranberries",
                        "make a small hole in the cranberries and slide them onto the rosemary sprig",
                        "add all ingredients except brut to shaker with ice",
                        "Shake and strain into chilled coupe glass",
                        "add Steller Jays Brut",
                        "Garnish placed inside cocktail - Rosemary sprig with cranberries"
                    ],
                    tags: ["Vodka"]
                },
                {
                    id: 21,
                    imageURL: "https://www.momontimeout.com/wp-content/uploads/2021/11/christmas-punch-recipe-square.jpeg",
                    name: "Holiday Punch",
                    steps: [
                        "0.75oz Captain Morgan dark rum",
                        "0.25oz Grand Marnier",
                        "1oz Orange Juice",
                        "1 oz Cranberry Juice",
                        "2 dashes Chinese 5 spice",
                        "1 dashes Nutmeg",
                        "2oz ginger ale",
                        "8 Frozen Cranberries",
                        "2 Josper Smoked Orange Wheels",
                        "Shake/Chilled Rocks Glass",
                        "add 1 josper smoked ornage wheel to shaker",
                        "add dark rum, grand marnier, orange juice, cranberry juice, chinese 5 spice, and nutmeg to shaker with ice",
                        "Shake and strain into rocks glass with new ice",
                        "Top with ginger ale",
                        "Garnish with Josper orange resting on the rim with 8 cranberries in the glass",
                        "if cocktail is a double times Dark Rum and Grand Marnier by 2"

                    ],
                    tags: ["Rum", "Liquer"]
                },
                {
                    id: 22,
                    imageURL: "https://www.liquor.com/thmb/vHVskMTzB7aBkw0v13En10q75Y8=/440x440/filters:no_upscale():max_bytes(150000):strip_icc()/pear-tree-martini-720x720-primary-2ab5d969ec6046e2afea302dee21eec4.jpg",
                    name: "Imperal Pear",
                    steps: [
                        "0.5oz Sake",
                        "0.5oz Smirnoff Vodka",
                        "1oz Pear Nectar",
                        "0.5oz Lime juice",
                        "0.25oz Simple Syrup",
                        "0.25oz Ginger Syrup",
                        "2 piece Mint Leaves",
                        "4 slice Apple fan to garnish",
                        "1 filled Soda",
                        "Shake/Chilled Rocks Glass",
                        "Combine all ingredients except soda into shaker with ice",
                        "Shake and strain into rocks glass with new ice",
                        "Top with soda",
                        "Garnish with apple fan"
                    ],
                    tags: ["Vodka", "Liquer"]
                },
                {
                    id: 23,
                    imageURL: "https://punchdrink.com/wp-content/uploads/2024/02/Thumb-2-June-Bug-TGI-Fridays-Cocktail-Recipe.jpg",
                    name: "Bonsai Sour",
                    steps: [
                        "1oz Don Julio Blanco",
                        "1oz Mezcal",
                        "0.5oz Lime Juice",
                        "0.5oz Lemon Juice",
                        "1 Dehydrated Lime wheel",
                        "Pinch of Wasabi",
                        "1oz Lemon Grass Syrup",
                        "1oz Egg White",
                        "Shake/Chilled Champagne Coupe",
                        "Dry Shake Egg White",
                        "Add rest of ingredients to shaker with ice",
                        "Shake and strain into coupe glass",
                    ],
                    tags: ["Tequila"]
                },
                {
                    id: 24,
                    imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzgYrg5Rtd8MpJ53usx1XXnIR9pqmzo4dbzg&s",
                    name: "Atlas Old Fashioned",
                    steps: [
                        "2oz Johnnie Walker Black",
                        "0.25oz Charred rosemary maple syrup",
                        "2 dashes Bittered Sling Plum and Rootbeer Bitters",
                        "1 curled Orange Peel",
                        "1 Rosemary Sprig",
                        "Add all ingredients to a mixing glass and top wioth ice",
                        "Stir untill well chilled and properly distilled (~15 seconds)",
                        "Strain on a 2x2 Kodama ice cube",
                        "Garnish with rosemary sprig and orange peel",
                        "Place in smoke box and smoke with house made Josper Smoke chips",
                        "Bring box with coctail to table and open in front of guest"
                    ],
                    tags: ["Whiskey"]
                },
                {
                    id: 25,
                    imageURL: "https://oliviaskitchen.com/wp-content/uploads/2021/09/Classic-Moscow-Mule-with-Mint-2.jpg",
                    name: "Atlas Mule",
                    steps: [
                        "1.5oz Ketel One Vodka",
                        "0.5oz fino sherry",
                        "0.5oz Ginger Syrup",
                        "0.5oz Lime Juice",
                        "3 slices of fresh cucumber",
                        "6 Mint Leaves",
                        "3oz Ginger Beer",
                        "Add cucubmer to shaker tin and muddle",
                        "Add remaining ingredients except ginger beer to shaker with ice",
                        "Shake shortly",
                        "Fine strain into a rocks glass with ice",
                        "Top with ginger beer",
                        "Give the cocktail a quick agitaiton with a bar spoon to mix the ginger beer",
                        "Garnish with a cucumber slice and a mint sprig"
                    ],
                    tags: ["Vodka"]
                },
                {
                    id: 26,
                    imageURL: "https://www.binnys.com/globalassets/blog/el-diablo-blog-hero-10-13-2021.jpg",
                    name: "El Diablo",
                    steps: [
                        "0.75oz Sauza Silver Tequila",
                        "0.25oz Creme de Cassis",
                        "1/2 Lime",
                        "4oz Ginger Ale",
                        "0.25oz Sauza Silver Tequila",
                        "1 dash Cinnamon",
                        "Build in rocks glass",
                        "Add tequila, and creme de cassis to rocks glass with ice",
                        "Squeeze in juice of half a lime",
                        "Fill with ginger ale, Floating the lime rind in the glass",
                        "Pour second 0.25oz of tequila in lime rind",
                        "ignight the cinamon falling over the drink in front of guest"
                    ],
                    tags: ["Tequila", "Liquer"]
                },
                {
                    id: 27,
                    imageURL: "https://www.compelledtocook.com/wp-content/uploads/2021/05/small-7.jpg",
                    name: "Frozen Hound",
                    steps: [
                        "3 serving Pink Grapefruit Granita Balls (melon baller)",
                        "1.5oz Smirnoff Vodka",
                        "0.5oz Cointreau",
                        "0.5oz Agave Syrup",
                        "1oz Grapefruit Juice",
                        "Shake/Chilled Martini Glass",
                        "Pour all ingredients into shaker with ice",
                        "Shake and strain into chilled martini glass",
                        "Garnish with 3 pink grapefruit granita balls"
                    ],
                    tags: ["Vodka", "Liquer"]
                },
                {
                    id: 28,
                    imageURL: "https://dartmouthfoodfestival.com/wp-content/uploads/2020/12/ciao-bella-cocktail-Salcombe-Gin_fullevent.jpg",
                    name: "Ciao Bella",
                    steps: [
                        "1oz Gordons gin",
                        "1oz Campari",
                        "1oz Sweet Vermouth",
                        "1oz Grapefruit Juice",
                        "1 piece Orange twist",
                        "Shake/Chilled Rocks Glass",
                        "Add all ingredients to shaker with ice",
                        "Shake and strain into rocks glass with new ice",
                        "Garnish with orange twist"
                    ],
                    tags: ["Gin", "Liquer"]
                },
                {
                    id: 29,
                    imageURL: "https://www.todocanada.ca/wp-content/uploads/Negroni-1.png",
                    name: "Edmonton Negroni",
                    steps: [
                        "1oz Victoria Oaken Gin",
                        "1oz Grahms 10yr Tawny Port",
                        "1oz Campari",
                        "0.1oz Talisker Storm",
                        "1 Josper Smoked Orange Wheel",
                        "Stir/Talisker Storm Rinse",
                        "Rinse glass with Talisker Storm",
                        "Add all ingredients to a mixing glass with ice",
                        "Stir until well chilled and properly diluted (~15 seconds)",
                        "Strain into rinsed glass over a 2x2 Kodama ice cube",
                        "Garnish with Josper smoked orange wheel"
                    ],
                    tags: ["Gin", "Liquer"]
                },
                {
                    id: 30,
                    imageURL: "https://images.ctfassets.net/6xd9bjrzzm9l/2b589f4b0a01fcf0edb38f48c7b5a890/0ac0639da4e3928b4a7550f38746a352/apple-whiskey-sour.jpg?w=420&fm=webp&fit=pad&q=100",
                    name: "Chai Bourbon Sour",
                    steps: [
                        "2oz Chai Infused Bulleit Bourbon",
                        "1oz Simple Syrup",
                        "0.75oz Lemon Juice",
                        "1oz Egg White",
                        "1 Star Anise",
                        "1 Portion Ground Nutmeg",
                        "Chill Champagne Coupe",
                        "Dry Shake Egg White, chai bourbon, simple syrup, and lemon juice",
                        "Add ice and shake until well chilled and properly diluted (~15 seconds)",
                        "Strain into chilled coupe glass",
                        "Using a hard coaster or card stock paper, cover 7/8ths of the glass and dust nutmeg over the exposed portion",
                        "Garnish with star anise in the middle of the glass"
                    ],
                    tags: ["Whiskey"]
                },
                {
                    id: 31,
                    imageURL: "https://www.vmcdn.ca/f/files/glaciermedia/import/lmp-all/676488-negroni-served-in-vancouver-bc.jpg",
                    name: "Burnaby Negroni",
                    steps: [
                        "1oz Hornitas Black Barrel Tequila",
                        "1oz Campari",
                        "1oz Martini Rosso",
                        "1 half Orange Wheel",
                        "Stir/Chilled Rocks Glass",
                        "Add all ingredients to a mixing glass with ice",
                        "Stir until well chilled and properly diluted (~15 seconds)",
                        "Strain into rocks glass over a 2x2 Kodama ice cube",
                        "Garnish with half orange wheel"
                    ],
                    tags: ["Gin", "Liquer"]
                },
                {
                    id: 32,
                    imageURL: "https://admin.giftvoucherbrilliance.co.uk/storage/thedomeedinburgh/voucher/1652282573-microsoftteams-image-11-copy-kKqvo.png",
                    name: "Cask Experience",
                    steps: [
                        "0.5 oz Macalan Double Cask 12yr",
                        "0.5 oz Macalan Rare Cask",
                        "0.5 oz Macalan Triple Cask 12yr",
                        "Build in glencairn glasses",
                        "theres a story behind each scotch, ask your server for more information"
                    ],
                    tags: ["Whiskey"]
                },
                {
                    id: 33,
                    imageURL: "https://media-cdn2.greatbritishchefs.com/media/odylgmws/img69713.whqc_735x1102q80fpt412fpl714.jpg",
                    name: "Atlas Caesar",
                    steps: [
                        "1oz Smirnoff Vodka",
                        "2 dashes Tobasco",
                        "3 Dashes Worcestershire",
                        "2 Zests Fresh grated Horseradish",
                        "5oz Walters Caesar Mix",
                        "1 Caesar Spice Rim",
                        "1 Celery Stick",
                        "1 lime wheel",
                        "Rim glass with Caesar Spice",
                        "add all ingredients to glass with ice",
                        "Stir",
                        "Garnish with celery stick and lime wheel"
                    ],
                    tags: ["Vodka"]
                },
                {
                    id: 34,
                    imageURL: "https://www.liquor.com/thmb/-aM2_K1SizSThZsy6AkQFZkL58U=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/negroni-720x720-primary-535dee7b50914af1810b1927b69dbe46.jpg",
                    name: "Atlas Negroni",
                    steps: [
                        "1oz Gordons Gin",
                        "1oz Campari",
                        "1oz Sweet Vermouth",
                        "3 Josper Smoked Orange Wheels",
                        "Stir/Chilled Rocks Glass",
                        "Add all ingredients to a mixing glass over 1 Josper Smoked Orange Wheel with ice",
                        "Stir untill chilled",
                        "Add Josper Smoked Orange Wheel then Large Ice Cube to rocks glass",
                        "Strain into rocks glass",
                        "Garnish with Josper Smoked Orange Wheel"

                    ],
                    tags: ["Gin", "Liquer"]
                },
                {
                    id: 35,
                    imageURL: "https://cdn.diffords.com/contrib/stock-images/2019/08/5d55422b041f7.jpg",
                    name: "Agua de Valencia",
                    steps: [
                        "0.5oz Grand Marnier",
                        "0.25oz Cointreau",
                        "0.25oz Gordons Gin",
                        "0.5oz Simple Syrup",
                        "0.5oz Lime Juice",
                        "1oz Orange Juice",
                        "1 Orange Wheel",
                        "2 Dashes 5 Spice",
                        "Shake/Chilled Rocks Glass",
                        "Add all ingredients to shaker with ice & 1 dash of 5 spice",
                        "Shake and strain into rocks glass with new ice",
                        "Garnish with orange wheel and 1 dash of 5 spice"
                    ],
                    tags: ["Gin", "Liquer"]
                },
                {
                    id: 37,

                    imageURL: "https://www.campariacademy.com/en-us/wp-content/uploads/sites/3/2022/06/Salsify-Espolon-Anejo-Old-Fashioned-Cocktail-Image-e1658926971437-720x540.png",
                    name: "Anejo Old Fashioned",
                    steps: [
                        "2oz Hornitos Black Barrel Tequila",
                        "0.5oz Agave Syrup",
                        "3 dashes Fee Brothers old fashioned bitters",
                        "1 piece Orange Twist",
                        "Stir/Chilled Rocks Glass",
                        "Add all ingredients to a mixing glass with ice",
                        "Strain into a rocks glass over an ice orb",
                        "Garnish with flamed orange twist"
                    ],
                    tags: ["Tequila"]
                },
                {
                    id: 38,
                    imageURL: "https://cdn.diffords.com/contrib/stock-images/2023/05/64528feda967c.jpg",
                    name: "Rusty Nail",
                    steps: [
                        "0.5oz Bells Scotch",
                        "0.5oz Drambuie",
                        "Build",
                        "Pour over ice in rocks glass"
                    ],
                    tags: ["Whiskey"]
                },
                {
                    id: 39,
                    imageURL: "https://www.simplyrecipes.com/thmb/NaSVQ3efDGo-jucM6pvLmR-fraE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__Whiskey-Sour-LEAD-4-052ca651129e44f2af9c61085044dff4.jpg",
                    name: "Whiskey Sour",
                    steps: [
                        "2oz Bulleit Bourbon",
                        "1oz Lemmon Juice",
                        "0.5oz Simple Syrup",
                        "1 Egg White",
                        "3 drops Angostura Bitters",
                        "Chill Coupe Glass",
                        "Dry Shake Egg White, Bourbon, Lemon Juice, and Simple Syrup",
                        "add ice",
                        "Shake and strain into Coupe glass with ice",
                        "Add 3 drops of bitters to the foam"
                    ],
                    tags: ["Whiskey"]
                },
                {
                    id: 40,
                    imageURL: "https://www.liquor.com/thmb/rxbQEXR-CQpExjfS8xtOAWXLovM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/bourbon-old-fashioned-4000x4000-primary-ig-f0ce04bec6754db187ab1e8a16fd45c3.jpg",
                    name: "Old Fashioned",
                    steps: [
                        "2oz Bulleit Bourbon",
                        "1 Brown Sugar Cube",
                        "3 dashes Angostura Bitters",
                        "Add sugar cube to mizing glass",
                        "Soak sugar cube with bitters",
                        "Muddle sugar cube to dissolve",
                        "Add bourbon and ice",
                        "Stir",
                        "Strain into rocks glass over 2x2 Kodama ice cube",
                        "Peel loonie sized orange peel and ignight with a squeeze over the glass",
                        "rub warm orange oils around the rim of the glass",
                        "Drop peel into glass"
                    ],
                    tags: ["Whiskey"]
                },
                {
                    id: 41,
                    imageURL: "https://www.pamaliqueur.com/images/recipes/pama-soda.jpg?ver=4",
                    name: "Pama Margarita",
                    steps: [
                        "1.5oz Sauza Gold Tequila",
                        "0.5oz Pama Pomegranate Liqueur",
                        "3oz Lime juice",
                        "1.5oz Simple Syrup",
                        "1 Lime Wheel",
                        "1 Salt Rim",
                        "Rim glass with salt",
                        "Shake/Chilled Rocks Glass",
                        "Add all ingredients to shaker with ice",
                        "Shake and strain into rocks glass with new ice",
                        "Garnish with lime wheel"
                    ],
                    tags: ["Tequila", "Liquer"]
                },
                {
                    id: 42,
                    imageURL: "https://punchdrink.com/wp-content/uploads/2013/10/Artice2-Kingston-Negroni-Rum-Cocktail-Recipe.jpg?w=800",
                    name: "Negroni",
                    steps: [
                        "1oz Gordons Gin",
                        "1oz Campari",
                        "1oz Sweet Vermouth",
                        "1 Orange Zest",
                        "Stir/Chilled Rocks Glass",
                        "Add all ingredients to a mixing glass with ice",
                        "Stir until well chilled and properly diluted (~15 seconds)",
                        "Strain into rocks glass over a 2x2 Kodama ice cube",
                        "Garnish with orange zest"
                    ],
                    tags: ["Gin", "Liquer"]
                },
                {
                    id: 43,
                    imageURL: "https://www.themixer.com/en-us/wp-content/uploads/sites/2/2022/10/Negroni-Sbagliato-Illustration_Firefly_HelenaLombard.jpg",
                    name: "Negroni Sbagliato",
                    steps: [
                        "1oz Campari",
                        "1oz Sweet Vermouth",
                        "3oz Steller Jays Brut",
                        "1 Half Wheel Orange",
                        "Build in Rocks Glass",
                        "Add Campari and Sweet Vermouth to glass with one large ice mold",
                        "Top with Steller Jays Brut",
                        "Garnish with Half orange Wheel"
                    ],
                    tags: ["Liquer"]
                },
                {
                    id: 44,
                    imageURL: "https://assets.bonappetit.com/photos/616730026f14717d799f49a5/3:2/w_1938,h_1292,c_limit/BA1121tucci01_test.jpg",
                    name: "Martini Very Dry - Gin",
                    steps: [
                        "1.9oz Gordins gin",
                        "0.1oz Martini Dry Vermouth",
                        "1piece Lemon Curl",
                        "Stir/Chilled Martini Glass",
                        "Pour all ingredients into mixing glass with ice",
                        "Strain into chilled martini glass",
                        "garnish with a lemon curl"
                    ],
                    tags: ["Gin"]
                },
                {
                    id: 45,
                    imageURL: "https://www.saveur.com/uploads/2007/02/SAVEUR_Mojito_1149-Edit-scaled.jpg?auto=webp&auto=webp&optimize=high&quality=70&width=1440",
                    name: "Mojito",
                    steps: [
                        "2oz Captain Morgans White Rum",
                        "1oz Simple Syrup",
                        "8 mint leaves",
                        "3 wedges Lime",
                        "1 filled soda",
                        "In tall glass add Smacked mint leaves, lime wedges and simple syrup",
                        "Muddle",
                        "Add ice, rum and top with Soda",
                        "Stir to mix layers",
                        "Garnish with 1 mint leaf, and 1 lime wedge",
                    ],
                    tags: ["Rum"]
                },
                {
                    id: 46,
                    imageURL: "https://i0.wp.com/www.splashoftaste.com/wp-content/uploads/2022/05/dirty-martini-featured.jpg",
                    name: "Martini Dirty Gin",
                    steps: [
                        "1.5oz Gordons Gin",
                        "0.5oz Martini dry vermouth",
                        "6 piece Olives",
                        "Shake/Chilled Martini glass",
                        "Add 3 olives into shaker",
                        "Pouir in Alcohols",
                        "Add ice and shake",
                        "Strain into chilled Martini glass",
                        "Garnish with 3 olives on pick"
                    ],
                    tags: ["Gin"]
                },
                {
                    id: 47,
                    imageURL: "https://assets.bonappetit.com/photos/616730026f14717d799f49a5/3:2/w_1938,h_1292,c_limit/BA1121tucci01_test.jpg",
                    name: "Martini Dry Gin",
                    steps: [
                        "1.75oz Gordions Gin",
                        "0.25oz Martini Dry Vermouth",
                        "1 lemon curl",
                        "Stir/chilled Martini Glass",
                        "Pour all ingredients into mixing glass with ice",
                        "Stir untill chilled",
                        "Strain into chilled martini glass",
                        "Garnish with lemon curl"
                    ],
                    tags: ["Gin"]
                },
                {
                    id: 48,
                    imageURL: "https://cdn.loveandlemons.com/wp-content/uploads/2024/04/margarita-recipe.jpg",
                    name: "Margarita",
                    steps: [
                        "0.75oz Sauza Gold Tequila",
                        "0.25oz Triple Sec",
                        "1.5oz Agave Syrup",
                        "1.5oz Lime Juice",
                        "1 salt Rim",
                        "1 lime wheel",
                        "Salt Rim of a rocks Glass",
                        "Add all ingredients into a shaker with ice",
                        "Shake",
                        "Strain into glass with new ice",
                        "Small pinch of salt over drink",
                        "Garnish with lime wheel"
                    ],
                    tags: ["Tequila"]
                },
                {
                    id: 49,
                    imageURL: "https://assets.bonappetit.com/photos/616730026f14717d799f49a5/3:2/w_1938,h_1292,c_limit/BA1121tucci01_test.jpg",
                    name: "Martini Gin",
                    steps: [
                        "1.5oz Gordons Gin",
                        "0.5oz Martini Dry Vermouth",
                        "1 piece lemon curl",
                        "Stir/Chilled Martini Glass",
                        "Pour all ingredients into mixing glass with ice",
                        "Stir untill chilled",
                        "Strain into chilled martini glass",
                        "Garnish with lemon curl"
                    ],
                    tags: ["Gin"]
                },
                {
                    id: 50,
                    imageURL: "https://www.allrecipes.com/thmb/224v5O9chH4gepwoJT3GRBr_96U=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/55027-True-Manhattan-DDMFS-62-2x1-ba1624031ca8404abd4495152e09fec2.jpg",
                    name: "Manhattan",
                    steps: [
                        "1.5oz Bulleit Bourbon",
                        "0.5oz Martini Rosso",
                        "3 Dashes Angostura Bitters",
                        "1 piece cherry to garnish",
                        "Stir/Chilled Martini Glass",
                        "Pour all ingredients into mixing glass with ice",
                        "Stir untill chilled",
                        "Strain into chilled martini glass",
                        "Garnish with cherry on a pick"
                    ],
                    tags: ["Whiskey"]
                },
                {
                    id: 51,
                    imageURL: "https://www.basilhaydenbourbon.com/sites/default/files/styles/original/public/2024-09/04-basil-hayden-bourbon-whiskey-cocktail-bourbon-manhattan.jpg.webp?itok=geJCCIAQ",
                    name: "Mangattan Perfect",
                    steps: [
                        "1.5oz Bulleit Bourbon",
                        "0.25oz Martini Rosso",
                        "0.25oz Martini Dry Vermouth",
                        "4 Dashes Angostura Bitters",
                        "1 piece cherry",
                        "1 piece Orange Curl",
                        "Stir/Chilled Martini Glass",
                        "Pour all ingredients into mixing glass with ice",
                        "Stir untill chilled",
                        "Strain into chilled martini glass",
                        "Garnish with orange peel wrapped cherry on a pick"
                    ],
                    tags: ["Whiskey"]
                },
                {
                    id: 52,
                    imageURL: "https://www.garnishwithlemon.com/wp-content/uploads/2017/07/grand-marner-margarita-featured-image.jpg",
                    name: "Grand Margarita",
                    steps: [
                        "1.5oz Don Julio Blanco Tequila",
                        "0.5oz Grand Marnier Liquer",
                        "3oz Lime Juice",
                        "1.5oz Simple Syrup",
                        "1 lime wedge",
                        "1 salt Rim",
                        "Rub Rocks Glass rim with lime",
                        "Rim with salt",
                        "Pour ingredients into shaker with ice",
                        "Shake",
                        "Strain into rimmed rocks glass with new ice",
                        "Garnish with lime wedge on rim"
                    ],
                    tags: ["Tequila"]
                },
                {
                    id: 53,
                    imageURL: "https://www.simplejoy.com/wp-content/uploads/2023/02/Espresso-Martini-copy.jpg",
                    name: "Espresso Martini",
                    steps: [
                        "1oz Smirnoff Vodka",
                        "0.5oz Baileys",
                        "0.5oz Khalua",
                        "1oz Espresso",
                        "3 piece Espresso beans",
                        "Shake/Chilled martini glass",
                        "Pour all ingredients int a shaker with ice",
                        "Shake",
                        "Strain into chilled martini glass",
                        "Garnish with 3 beans"
                    ],
                    tags: ["Vodka"]
                },
                {
                    id: 54,
                    imageURL: "https://www.simplyrecipes.com/thmb/tFjp-RXG6CyCxKd5mtrzYfh1eJI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__French-75-Cocktail-LEAD-1-8b2a686ea92e45528418721c725b2b55.jpg",
                    name: "French 75",
                    steps: [
                        "1oz Gordons Gin",
                        "0.5oz Lemon Juice",
                        "0.1oz Simple syrup",
                        "5oz Stellers Jay Brut",
                        "1 lemon curl",
                        "Shake/chilled Champagne Coupe",
                        "Pour gin, Juice, and Simple into shaker with ice",
                        "Shake",
                        "Double strain into chilled Champagne coupe",
                        "Add Stellers Jay Brut",
                        "Garnish With Lemon Twist resting on rim"
                    ],
                    tags: ["Gin"]
                },
                {
                    id: 55,
                    imageURL: "https://assets.bonappetit.com/photos/650df690c94ec4218673b45a/1:1/w_2560%2Cc_limit/20230915-WEB-SEO-0882_update%2520copy.jpg",
                    name: "Cosmopolitan Martini",
                    steps: [
                        "1.5oz Smirnoff Vodka",
                        "0.5oz Triple Sec",
                        "0.5oz Lime Juice",
                        "1.5oz Cranberry Juice",
                        "1 lime wheel",
                        "Shake/Chilled Martini Glass",
                        "Pour ingredients into a shaker with ice",
                        "Shake",
                        "Strain into chilled martini glass",
                        "Garnish with a lime wheel on rim"
                    ],
                    tags: ["Vodka"]
                },
                {
                    id: 56,
                    imageURL: "https://images.liquorapps.com/Images/Recipes/bg/423fbcdb-ee2a-42c6-a2dd-e071e8962e70..jpg",
                    name: "Don Margarita",
                    steps: [
                        "1.5oz Don Julio Blanco Tequila",
                        "0.5oz Triple Sec",
                        "3oz Lime Juice",
                        "1.5oz Simple Syrup",
                        "1 lime wedge",
                        "Shake/Salt Rimmed Rocks Glass",
                        "Wet rocks glass rim with lime and rim with salt",
                        "Pour all ingredients int a shaker with ice",
                        "Shake",
                        "Strain into a salt rimmed rocks glass with new ice",
                        "garnish with a lime wedge on the rim"
                    ],
                    tags: ["Tequila"]
                },
                {
                    id: 57,
                    imageURL: "https://assets.epicurious.com/photos/6447e5c4cf62528d44c9caf5/3:2/w_6756,h_4504,c_limit/AmerettoSour_RECIPE_042023_51813.jpg",
                    name: "Amaretto Sour",
                    steps: [
                        "2oz Amaretto Liqeur",
                        "1oz Lemon Juice",
                        "0.75oz Rosemary Syrup",
                        "1oz Egg White",
                        "1 Rosemary Sprig",
                        "Add ingredients to empty shaker",
                        "Dry Shake",
                        "Add ice",
                        "Wet Shake",
                        "Strain into a single rocks glass with ice",
                        "Garnish with rosemary Sprig"
                    ],
                    tags: ["Liquer"]
                },
                {
                    id: 58,
                    imageURL: "https://www.liquor.com/thmb/LV0L3CF51hFJoSN-QdLe6ijXsFQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__liquor__2019__09__12094720__Boulevardier-720x720-recipe-53da547e8cfc4bd79a393ac99891f5ba.jpg",
                    name: "Boulevardier",
                    steps: [
                        "1oz Bulleit Bourbon",
                        "1oz Campari",
                        "1oz Sweet Vermouth",
                        "1oz Orange Zest",
                        "Add all ingredients into mixing glass with ice",
                        "Stir untill chilled",
                        "Pour into double rocks glass with large ice mould",
                        "Zest orange peel over drink"
                    ],
                    tags: ["Whiskey"]
                },
                {
                    id: 59,
                    imageURL: "https://www.thecocktailproject.com/sites/default/files/styles/recipe_slider_img/public/incredible-hero-DeKuyper-Razzmatazz-Sangria-1.jpg.webp?itok=zgvTIMqH",
                    name: "Razzmatazz Cobbler",
                    steps: [
                        "1.5oz Appleton rum",
                        "0.5oz Martini Rosso",
                        "0.5oz Hibiscuss (TAZO Passion) Syrup",
                        "0.75oz Lemon Juice",
                        "1 Mint Sprig",
                        "1 raspberry",
                        "1 orange twist",
                        "Add all ingredients into a shaker with ice",
                        "Shake",
                        "Fine Strain into brandy glass",
                        "Garnish with mint sprig, fresh raspberry, and anm orange twist"
                    ],
                    tags: ["Rum"]
                },
                {
                    id: 60,
                    imageURL: "https://www.fentimans.com/cdn/shop/files/fentimans_valencian-orange_tonic-water.jpg?v=1681507168&width=3840",
                    name: "Valncian Gin and Tonic",
                    steps: [
                        "1.5oz Tangeray Ten Gin",
                        "0.5oz Fino Sherry",
                        "2 bar spoon Marmelatde",
                        "1 Fever Tree Indian Tonic",
                        "Build in Copa or Tall Collins Glass",
                        "Garnish with a wedge of grapefruit"
                    ],
                    tags: ["Gin"]
                },
                {
                    id: 61,
                    imageURL: "https://images.food52.com/QkCFtzV9ROpfH_S-XQ5Ap9qV9F8=/2016x1344/2bb8c2b0-5308-417b-9176-43c68829a65f--2021-0603_sponsored_basil-hayden_passion-fruit-bourbon-sour_recipe_not-branded_3x2_rocky-luten_031.jpg",
                    name: "Bulleit with Butterfly Wings",
                    steps: [
                        "1.5oz Bulleit Bourbon",
                        "0.5oz Sombra Mezcal",
                        "0.75oz Maple Syrup",
                        "0.75oz Lemon Juice",
                        "2 dashes of Bittered Sling Malagasy Chocolate Bitters",
                        "1 Egg White",
                        "Nutmeg Powder",
                        "Dry/Wet Shake/Chilled Coupe Glass",
                        "Add Ingredients into empty shaker",
                        "Dry Shake",
                        "Add Ice",
                        "Wet Shake",
                        "Strain into chilled coupe glass",
                        "Top with a light dusting of nutmeg powder"
                    ],
                    tags: ["Whiskey"]
                },
                {
                    id: 62,
                    imageURL: "https://images.squarespace-cdn.com/content/v1/5fc57ac95687f52b6ba016a9/1625500903393-ZOSULQ087TRG6W3DGNJP/Untitled_Artwork+4.jpg",
                    name: "Greener Pastures",
                    steps: [
                        "1.5oz Crown Royal LE",
                        "0.5oz Agave Nectar",
                        "0.3oz Carpano Blanco",
                        "0.3oz Green Chartreuse",
                        "0.75oz Lemon Juice",
                        "Basil Leaves",
                        "Lemon Wheel",
                        "2 dashes Scrappy's Orange bitters",
                        "Add all ingredients to a shaker tin with ice",
                        "Shake",
                        "Fine Strain over ice into a Rocks glass",
                        "Garnish with a fresh Basil Leaf & fresh Lemon Wheel"
                    ],
                    tags: ["Whiskey"]
                },
                {
                    id: 63,
                    imageURL: "https://dam.mediacorp.sg/image/upload/s--w6nJi9r3--/c_crop,h_1125,w_1500,x_0,y_1/c_fill,g_auto,h_523,w_693/f_auto,q_auto/v1/mediacorp/cna/image/2024/04/01/atlas_espresso_martini_espresso_martini_singapore.jpg?itok=1Nd2-sSF",
                    name: "Atlas Espresso Martini",
                    steps: [
                        "1.5oz Ketel One Vodka",
                        "0.5oz Galiano Ristretto Liqueur",
                        "0.5oz Galiano Original Liqueur",
                        "1oz fresh pressed espresso",
                        "2 dashes of scrappys lavender bitters",
                        "3 espresso beans",
                        "Shake/Chilled Coupe",
                        "Add All ingredients into shaker with ice",
                        "Shake",
                        "Fine strain into chilled coupe",
                        "Garnish with 3 espresso beans floated together"
                    ],
                    tags: ["Vodka"]
                },
                {
                    id: 64,
                    imageURL: "https://eliotseats.com/wp-content/uploads/2013/05/IMAG3366-e1365263994398.jpg",
                    name: "Bengali Gimlet",
                    steps: [
                        "2oz Tangueray Rangpur",
                        "0.75oz Tumeric, Mango Syrup",
                        "0.5oz Lemon Juice",
                        "0.5oz Orange Juice",
                        "2 dahses Scrappy's cardamom bitters",
                        "1 Dehydrated Lime wheel",
                        "1 ginger Zest",
                        "Shake/Chilled Coupe",
                        "Add ginger to empty shaker and muddle",
                        "Add ice and remaining ingredients",
                        "Shake",
                        "Double Strain into chilled coupe",
                        "Garnish with Dehydrated Lime Wheel"
                    ],
                    tags: ["Gin"]
                },
                {
                    id: 65,
                    imageURL: "https://thesuburbansoapbox.com/wp-content/uploads/2022/12/Paloma-Cocktail-2.jpg",
                    name: "Highlander Margarita",
                    steps: [
                        "2oz El Tequileno Tequilo",
                        "0.75oz Lime Juice",
                        "0.5oz Grapefruit Juice",
                        "0.5oz Poire Williams Liqueur (Giffard)",
                        "0.3oz Agave Nectar",
                        "2 dashes Scrappy's Lavender Bitters",
                        "Rim Rocks Glass With Tajin",
                        "Add all ingredients into shaker with ice",
                        "Shake",
                        "Strain into Tajin rimmed rocks glass over new ice",
                        "Garnish with Grapefruit Peel"
                    ],
                    tags: ["Tequila"]
                },
                {
                    id: 66,
                    imageURL: "https://images.squarespace-cdn.com/content/v1/5f063187ead18a2e98ba7f9b/1664627643055-XLCFYMQOSZWDQINPOQPN/BobbyHeugel_RGB-3.jpg?format=500w",
                    name: "Ambrosia Sour",
                    steps: [
                        "2oz Tanqueray gin",
                        "0.75oz Lemon Juice",
                        "1oz Giffard Chai Syrup",
                        "1oz Egg White",
                        "1 Dusting of chai/cinnamon",
                        "Shaker/Chilled coupe",
                        "Add ingredients into empty shaker tin",
                        "Dry Shake",
                        "Add ice",
                        "Wet Shake",
                        "Strain into chilled coupe",
                        "Dust top with Chai/Cinnamon dust"
                    ],
                    tags: ["Gin"]
                },
                {
                    id: 67,
                    imageURL: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgAVgU3Ovwx6B-YXW7TG3a5GcWOpTEPVzA3ownWJyQN5WetK_tY7U5SrDncdhs1sH63CZSwX8qWt3iYIC-y4XbfK_oNyKXDkRdSyWiMrCSv6A8ogy7857Xxk8vxXqPPQnsVkV5kzvW3m7Q/s1600/0059.jpg",
                    name: "Crimson and Clover",
                    steps: [
                        "1oz El Tequileno Blanco",
                        "2oz Stellars Jay Bubbles",
                        "1oz Bremmners Pomegranate",
                        "0.75oz Giffard cinnamon Syrup",
                        "0.25oz Lime Juice",
                        "1 dehydrated Lime wheel",
                        "Shaker/Chilled coupe",
                        "Add all ingredients into shaker with ice",
                        "Shake",
                        "Fine strain into chilled coupe",
                        "Top with floated dehydrated lime wheel"
                    ],
                    tags: ["Tequila"]
                },
                {
                    id: 68,
                    imageURL: "https://www.liquor.com/thmb/nRvZ9F98EOa0ztgQPpTDu8mGNmM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__liquor__2017__11__06162327__eggnog-720x720-recipe-b26c77ae1d6b4354af7b0428dcb8bab2.jpg",
                    name: "Fireside Nog",
                    steps: [
                        "1.5oz Captain Morgans Spiced Rum",
                        "0.5oz Advocaat",
                        "0.25oz Galiano",
                        "0.5g Holiday Spice Mix",
                        "1oz Egg White",
                        "2oz Avalon Egg Nog",
                        "1 Dusting of Cinnamon",
                        "Shaker/Chilled coupe",
                        "Add ingredients into empty shaker tin",
                        "Dry Shake",
                        "Add ice",
                        "Wet Shake",
                        "Strain into chilled coupe",
                        "Dust top with Cinnamon dust"
                    ],
                    tags: ["Rum"]
                },
                {
                    id: 69,
                    imageURL: "https://tasteandsee.com/wp-content/uploads/2015/12/Aperol-Punch-square-one-glass2-480x270.jpg",
                    name: "APEROL PUNCH(HH)",
                    steps: [
                        "FILL. SM ROCKS W/ ICE ",
                        "COMBINE IN SHAKER ",
                        "loz Pink PeppercorN GIN",
                        ".75oz lemon juice",
                        ".25oz simple syrup",
                        "SHAKE / POUR CONNNTS ",
                        "DRIZZLE: ",
                        "loz Aperol",
                        "GARNISH",
                        "3pc pink peppercorn on surface"
                    ],
                    tags: ["currentAtlas", "Gin"]
                },
                {
                    id: 70,
                    imageURL: "https://oliviaskitchen.com/wp-content/uploads/2021/09/Classic-Moscow-Mule-with-Mint-2.jpg",
                    name: "ATLAS MULE",
                    steps: [
                        "SM ROCKS GLASS ",
                        "BUILD OVER ICE",
                        "1.5oz Kettle One vodka",
                        ".5oz Tio Pepe fino sherry",
                        ".5oz lime juice",
                        ".25oz ginger syrup*",
                        "3oz Fever Tree ginger beer",
                        "STIR TO COMBINE",
                        "GARNISH",
                        "7 slices of cucumber (matchstick)",
                        "1pc sprig of fresh mint"
                    ],
                    tags: ["currentAtlas", "Vodka"]
                },
                {
                    id: 71,
                    imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzgYrg5Rtd8MpJ53usx1XXnIR9pqmzo4dbzg&s",
                    name: "ATLAS OLD FASHIONED",
                    steps: [
                        "LG ROCKS GLASS ",
                        "TEMPER 2inch ICE CUBE ",
                        "COMBINE IN MIXING GLASS",
                        "2oz Bulliet 10yr bourbon",
                        ".5oz charred maple syrup*",
                        "2 dash Angostura bitters",
                        "2 dash Cacao bitters (Angostura)",
                        "STIR",
                        "STAMP ICE / ",
                        "PLACE IN LG ROCKS GLASS ",
                        "STRAIN MIXTURE",
                        "GARNISH",
                        "orange (press, slit, on rim)",
                        "SMOKE INTO CLOCHE",
                        "PLACE",
                        "1pc",
                        "Rosemary sprig, placed on board"
                    ],
                    tags: ["currentAtlas", "Whiskey"]
                },
                {
                    id: 72,
                    imageURL: "https://punchdrink.com/wp-content/uploads/2022/10/Thumb-Green-Tabasco-Cocktail-Spicy-Margarita-Recipe.jpg",
                    name: "BAG OF TRICKS",
                    steps: [
                        "CHILLED COUPE GLASS",
                        "COMBINE IN SHAKER:",
                        "1oz Don Julio blanco",
                        "1oz Mezcal Esmarcand",
                        "75oz lemon juice",
                        ".75oz lemongrass & wasabi syrup ",
                        "1oz egg whites",
                        "DRY SNAKE / SHAKE / ",
                        "STRAIN",
                        "GARNISH",
                        ".5g lime leaf & wasabi powder"
                    ],
                    tags: ["currentAtlas", "Tequila"]
                },
                {
                    id: 73,
                    imageURL: "https://domesticate-me.com/wp-content/uploads/2015/02/pomegranate-vodka-gimlet-cocktail.jpg",
                    name: "BEST CASE SCENARIO (HH)",
                    steps: [
                        "CHILLED COUPE GLASS ",
                        "COMBINE IN SHAKER:",
                        "loz Ketel One",
                        ".5 Cointreau",
                        "1.5oz pomegranate juice",
                        ".25oz lime juice",
                        "SHAKE / DBL STRAIN",
                        "GARNISH",
                        "1pc lime wheel (Fresh) dropped into glass"
                    ],
                    tags: ["currentAtlas", "Vodka"]
                },
                {
                    id: 74,
                    imageURL: "https://pickledplum.com/wp-content/uploads/2024/06/espresso-martini-3-1200.jpg",
                    name: "CARAJILLO",
                    steps: [
                        "CHILLED COUPE GLASS ",
                        "COMBINE IN SHAKER:",
                        ".5oz Ketel One vodka",
                        "1.5oz Licor 43",
                        "2oz Espresso (chilled)",
                        "SHAKE / DBL STRAIN",
                        "GARNISH",
                        "3pc espresso beans on surface"
                    ],
                    tags: ["currentAtlas", "Vodka"]
                },
                {
                    id: 75,
                    imageURL: "https://www.liquor.com/thmb/1vw5Exyh10NJRQKQFmhIJmarRf0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/amaretto-sour-4000x4000-primary-ig-a49e20dfa0814f50bdaf3fd41e590a17.jpg",
                    name: "CRY WOLF",
                    steps: [
                        "SM ROCKS GLASS ",
                        "COMBINE IN SHAKER:",
                        "1.5oz Bulliet bourbon",
                        ".5oz Giffard Abricot",
                        ".25oz Amaro Montenegro",
                        ".75oz lemon juice",
                        "loz egg whites",
                        "DRY SHAKE / SHAKE / STRAIN OVER ICE",
                        "GARNISH",
                        "7 drops Angostura (artful design)"
                    ],
                    tags: ["currentAtlas", "Whiskey"]
                },
                {
                    id: 76,
                    imageURL: "https://www.thespruceeats.com/thmb/PdokucbKig1Drn__rpBB7s-ytDA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/CucumberCocktails-GettyImages-697375590-5a44e34e89eacc0037e1dbf1.jpg",
                    name: "CUCUMBER BUCK (0.0%)",
                    steps: [
                        "SM ROCKS GLASS ",
                        "BUILD OVER ICE",
                        "2oz strong steeped green tea*",
                        "1.5oz lime juice",
                        ".25oz ginger syrup*",
                        "TOP",
                        "3oz FT ginger beer",
                        "STIR TO COMBINE ",
                        "GARNISH",
                        "7 slices cucumber (matchstick cut)",
                        "1pc sprig of fresh mint"
                    ],
                    tags: ["currentAtlas", "0%"]
                },
                {
                    id: 77,
                    imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZEclCl55aO8Mx_dDQte_-tS0Z_kx56GsIcQ&s",
                    name: "FANDANGO FIX (0.0%)",
                    steps: [
                        "COLLINS GLASS",
                        "BUILD OVER ICE",
                        "loz pomegranate juice",
                        ".5oz lime juice",
                        ".5oz passionfruit syrup (Giffard)",
                        "TOP",
                        "2oz FT tonic water",
                        "2oz soda water",
                        "STIR TO COMBINE",
                        "GARNISH",
                        "1pc lemon wheel (dehydrated)"
                    ],
                    tags: ["currentAtlas", "0%"]
                },
                {
                    id: 78,
                    imageURL: "https://thesuburbansoapbox.com/wp-content/uploads/2022/12/Paloma-Cocktail-2.jpg",
                    name: "HIGHLANDER MARGARITA",
                    steps: [
                        "DB ROCKS GLASS",
                        "(W/ TAJIN SALTED RIM)",
                        "COMBINE IN SHAKER:",
                        "2oz El Jimador blanco tequila",
                        ".5oz Poire Williams (Giffard)",
                        ".5oz grapefruit juice",
                        ".7oz lime juice",
                        ".3oz agave nectar",
                        "SHAKE / DBL STRAIN",
                        "GARNISH",
                        "1 slice grapefruit (1/2 wheel, fresh)"
                    ],
                    tags: ["currentAtlas", "Tequila"]
                },
                {
                    id: 79,
                    imageURL: "https://www.pineappleandcoconut.com/wp-content/uploads/2021/03/Citrus-Passion-Fruit-Vodka-Soda5020.jpg",
                    name: "JIMADOR HIGHBALL",
                    steps: [
                        "COLLINS GLASS",
                        "BUILD OVER ICE:",
                        "1.5oz El Jimador blanco tequila",
                        ".5oz Giffard Passionfruit syrup",
                        ".5oz lime juice",
                        "TOP",
                        "2oz Fever Tree Ginger Beer",
                        "2oz soda water",
                        "GARNISH",
                        "sprig of fresh mint"
                    ],
                    tags: ["currentAtlas", "Tequila"]
                },
                {
                    id: 80,
                    imageURL: "https://foodduchess.com/wp-content/uploads/2019/05/Passionfruit-Gin-Spritzer00981.jpg",
                    name: "PASSIONISTA",
                    steps: [
                        "CHAMPAGNE FLUTE ",
                        "COMBINE IN SHAKER:",
                        "1.5oz pink peppercorn gin*",
                        ".5oz pomegranate juice",
                        ".5oz Giffard passionfruit syrup",
                        ".5oz lime juice",
                        "SHAKE / DBL STRAIN",
                        "TOP",
                        "2oz bubbles (BTG spec)",
                        "2oz passionfruit spuma*",
                        "GARNISH",
                        "3pc pink peppercorns (whole)"
                    ],
                    tags: ["currentAtlas", "Gin"]
                },
                {
                    id: 81,
                    imageURL: "https://www.thecocktailproject.com/sites/default/files/styles/recipe_slider_img/public/incredible-hero-DeKuyper-Razzmatazz-Sangria-1.jpg.webp?itok=zgvTIMqH",
                    name: "RAZZMADAZZLE (0.0%)",
                    steps: [
                        "BRANDY (SNIFTER) GLASS",
                        "POUR INTO GLASS:",
                        "2oz soda water",
                        "COMBINE IN SHAKER:",
                        ".75oz lemon juice",
                        "1oz pomegranate juice ",
                        "2pz pineapple juice",
                        ".75oz hibiscus + raspberry syrup*",
                        "SHAKE / POUR CONTENTS",
                        "GARNISH",
                        "1pc dehydrated lemon wheel"
                    ],
                    tags: ["currentAtlas", "0%"]
                },
                {
                    id: 82,
                    imageURL: "https://www.farmwifedrinks.com/wp-content/uploads/2021/11/Rye-Whiskey-Old-Fashioned-1.jpg",
                    name: "ROLLING IN THE DEEP (BC)",
                    steps: [
                        "CHIILED COUPE GLASS ",
                        "COMBINE IN MIXING GLASS",
                        "1.5oz Whistle Pig PiggyBack rye",
                        "1oz Cinzano Rosso",
                        ".25oz Licor 43",
                        "2 dash Angostura bitters",
                        "ADD ICE",
                        "STIR (LONG SITR) / STRAIN",
                        "GARNISH",
                        "orange peel (press, slit, on rim)"
                    ],
                    tags: ["currentAtlas", "Whiskey"]
                },
                {
                    id: 83,
                    imageURL: "https://ginstonikem.cz/wp-content/uploads/2023/11/instagram96-1-768x768.webp",
                    name: "VALENCIAN G+T",
                    steps: [
                        "LG ROCKS GLASS ",
                        "COAT INSIDE WITH",
                        "loz orange marmalade",
                        "BUILD OVER ICE",
                        "1.5oz Hendricks 'Grand Caberet'",
                        ".5oz Tio Pepe fino sherry",
                        ".25oz lemon juice",
                        "STIR TO COMBINE",
                        "TOP",
                        "3oz Fever Tree Indian tonic",
                        "GARNISH",
                        "1pc grapefruit (1/2 wheel, fresh)"
                    ],
                    tags: ["currentAtlas", "Gin"]
                }


            ],
            filterText: "",
            filterTags: [],
        };
    }

    updateFilter(event) {
        this.setState({ filterText: event.target.value });
    }

    updateFilterTags(event) {
        const tag = event.target.id
        let currentTags = this.state.filterTags
        
        if (this.state.filterTags.includes(tag))
            currentTags = currentTags.filter(element => element !== tag)
        else
            currentTags.push(tag)
        
        this.setState({ filterTags : currentTags})
    }

    render() {
        return (
            <div className='Menu'>
                <input type="search" size="lg" className='InputGroup' onChange={this.updateFilter.bind(this)} placeholder="Search..." />
                <div className='tagArray'>
                    <div className='filtersTitle'>Applied Filters: </div>  
                    {this.state.filterTags.map(tag => (
                        <button className='tag' id={tag} key={tag} onClick={this.updateFilterTags.bind(this)}>X {tag}</button>
                        ))} 
                </div>
                <div className='filterButtons'>
                    <button id="currentAtlas" onClick={this.updateFilterTags.bind(this)}> currentAtlas </button>
                    <button id="Gin" onClick={this.updateFilterTags.bind(this)}> Gin </button>
                    <button id="Vodka" onClick={this.updateFilterTags.bind(this)}> Vodka </button>
                    <button id="Tequila" onClick={this.updateFilterTags.bind(this)}> Tequila </button>
                </div>
                <div className='filterButtons'>
                    <button id="Rum" onClick={this.updateFilterTags.bind(this)}> Rum </button>
                    <button id="Whiskey" onClick={this.updateFilterTags.bind(this)}> Whiskey </button>
                    <button id="0%" onClick={this.updateFilterTags.bind(this)}> 0% </button>
                    <button id="Liquer" onClick={this.updateFilterTags.bind(this)}> Liquer </button>
                </div>
                
                <div className='itemArray'>
                {this.state.data
                .filter((item) => {
                    if (this.state.filterTags.length === 0|| !this.state.filterTags.some(itemTag => !item.tags.includes(itemTag)))  /* Filter for tags  item.tags.some(itemTag => this.state.filterTags.includes(itemTag))*/
                        if (this.state.filterText === "" || item.name.toLowerCase().includes(this.state.filterText.toLowerCase())) /* Filter for search */
                            return item;
                }).sort((itemA, itemB) => {
                    const nameA = itemA.name.toUpperCase(); // ignore upper and lowercase
                    const nameB = itemB.name.toUpperCase(); // ignore upper and lowercase
                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }

                    // names must be equal
                    return 0;
                }).map((item, i) => (
                    <StoreItem {...item} key={i} />
                ))}
                </div>
            </div>
        )
    }

}

export default Menu
