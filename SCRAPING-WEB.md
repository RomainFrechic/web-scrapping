![Node.js Logo](/image/node-js-web-scraping-cheerio-request.webp)

# Comprendre le Web scraping
## Le web scraping, qu'est-ce que c'est ?
Le Web Scrapping est un ensemble de techniques pour  extraire des données provenant de différents sites internet, c'est tout simplement un programme informatique qui lit le code html des pages web.
On l'utilise principalement pour récupérer un grand nombre de données afin de pouvoir les analyser.
Le scraper est, tout comme le crawler, un programme informatique capable d’extraire de l’information. Cependant, contrairement au crawler qui ne requiert aucune connaissance des sites qu’il doit visiter, le scraper lui nécessite une bonne étude des sites avant d’envisager un travail d’extraction.
Les sites et leurs structures doivent être analysés avant de démarrer la collecte des données, il faut connaître les informations que l’on souhaite extraire et donc avoir une bonne connaissance du langage HTML.
 La mise en place d’un scraper requiert une configuration préalable afin d’expliquer au programme la marche qu’il doit suivre pour extraire l’information.
A partir de cela, il est possible d’obtenir une information "sûre" et structurée.

## Pourquoi est-il utile d'automatiser votre navigation sur le net graçe au web scraping ?
L'intêret d'automatiser sa navigation sur le web, par exemple, pour  gagner en productivité, dès qu’une tâche est répétitive, vous l’automatisez et économiser votre temps.
Pour surveiller vos concurrents, les prix de leurs produits, leur nouvelle stratégie commercial, etc..
En somme, Internet étant aujourd’hui présent sur votre mobile, chez vous et bientôt dans vos objets, le potentiel d’automatisation n’aura d’égal que votre imagination…

## Maintenant passons à la pratique.
Afin de vous faire une meilleures idée de 
Voici un tutto 
installé Node.js et npm 
Créer un nouveau dossier Scraping-Web
Aller dedans.
Ouvrez votre ligne de commande. Vous aurez besoin d'installer deux dépendances Node.js. 

         npm install --save cheerio
         npm install --save request

Créer un fichier scrape-simplon.js
voici le code :

               var request = require('request');
               var cheerio = require('cheerio');
               var fs = require('fs');


              request('http://simplon.co/blog/', function(error, response, body){
                if(error){
                            console.log("Error:" + error);
                    }
            console.log("Status code:" + response.statusCode);
        
            var $ = cheerio.load(body);
        
            $('div#main-content').each(function(index){
                var article = $(this).find('h2 > a').text().trim();
                var link = $(this).find('h2 > a').attr('href');
                fs.appendFileSync('simplon.txt', article + '\n' + link + '\n');
            });
        });

Exécuter le programme et vous obtiendrez vos informations dans un fichier simplon.txt.
Ouvrez votre ligne de commande. Exécuter la commande :

           node scrape-simplon.js