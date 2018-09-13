# sparta-tic-tac-toe

**By : Erica P da Silva Correia**

####Work description :

1. Analyse the given starter code (html & css files).
2. Tiles must change to either an 'X' or an 'O' whenever clicked.
3. Use OOP/put game (table) in OOP.
4. table must reset when either the reset button is used or the game is won by either one of the players.


####Tech Used :
**JavaScript, HTML DOM**

-----
#####how to download :


1. go to the github page [**https://github.com/EricaDaSilvaCorreia**](https://github.com/EricaDaSilvaCorreia)
2. Click repositories and select the repository [**Sparta-tic-tac-toe**](https://github.com/EricaDaSilvaCorreia/Sparta-grid-maker)
3. Click 'Clone or Download'
4. Choose between **Open in Desktop**, **Download ZIP**, **Clone with SSH**, **Clone with HTTPs**

-----


#####Challenges :

The main issues I had with the assignment were my planning (again) and basically getting the concept from my brain onto the editor. As with probably everyone else, the major roadblock was how to do the wins. I've been doing some research and I think I might have a good idea of how to do it but it will require a lot of trial and error (so expect more commits). 

the button was also a roadblock. I tried different methods, the .reset(); one I got from reading through w3schools (see below). I just feel like it's starting at me but I can't see it (yet). But as with everything else, I'll continue with the good old trial and error. 

~~~javascript
  tic.reseter = () => {
      tic.resetButton = document.getElementsByTagName('button');
      console.log(tic.resetButton);
      tic.resetButton.addEventListener( 'click', (e) => {
        for (j = 0; j < tic.tile.length; j++) {
          tic.tile[j].setAttribute('class', '');
          tic.tile[j].innerHTML = '';
        }
        // location.reload();
        // document.getElementsByTagName('button').reset(tic.tile);
      }
    }

    tic.reseter();
~~~


Other than that I think it's more to do with lacking the confidence in this new skillset, I find myself second guessing  a lot of what I do but then again I've barely had enough time and practice with this.

-----

#####Take-Aways :

Overall I'm very happy with how far I managed to get with this assignement. I need to work on my time management, I find myself fixating on one problem instead of taking a step back and looking at the bigger picture (it's like I'm trying to appreciate  Sunday Afternoon on the Island of Grande Jatte (a painting) , but I'm looking at it upclose). I'm pretty happy with my progress so far and I'm very tempted to scrap everything and start again fresh so I can understand the logic and why the cogs are there and how they contribute in making the methaphorical machine work. I did however enjoy the challenge it presented because it highlighted the areas in my work process I need to improve on, so 10/10 for the challenge but my score for myself would be a 5/10.

-----

