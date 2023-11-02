//Episode X: A New Terminal

    //Part 1: Set the scene
    1) mkdir galaxy_far_far_away
    2) cd galaxy_far_far_away
    3) mkdir death_star
    4) cd death_star
    5) touch darth_vader.txt princess_leia.txt storm_trooper.txt
    6) cd ..
    7) mkdir tatooine
    8) cd tatooine
    9) touch luke.txt ben_kenobi.txt
    10) mkdir millenium_falcon
    11) cd millenium_falcon
    12) touch han_solo.txt chewbaca.txt

    //Part 2: cp - copy
    1) cd .. (tatooine)
    2) cd .. (galaxy_far_far_away)
    3) cd death_star
    4) cp storm_trooper.txt ../tatooine 

    //Part 4: mv -move
    1) mv luke.txt ben_kenobi.txt millenium_falcon
    2) mv millenium_falcon ..
    3) mv millenium_falcon death_star
    4) mv princess_leia millenium_falcon
    
    //Part 5: rm - remove
    1) cd millenium_falcon
    2) rm ben_kenobi

    //Part 6: all together
    1) mkdir yavin_4
    2) cd death_star
    3) mv millenium_falcon  ..
    4) cd ..
    5) mv millenium_falcon yavin_4
    6) cd yavin_4
    7) mkdir x_wing
    8) cd millenium_falcon
    9) mv luke.txt princess_leia.txt ..
    10) cd ..
    11) mv luke.txt x_wing
    12) mv millenium_falcon x_wing ..
    13) cd ..
    14) cd death_star
    15) mkdir tie_figheter_1 tie_figheter_2 tie_figheter_3
    16) mv darth_vader.txt tie_figheter_1
    17) cp storm_trooper tie_figheter_2 tie_figheter_3 //This only added to 3 and I had to do it again and add to 2. Unsure why
    18) mv tie_figheter_1 tie_figheter_2
    19) cd ..

    //Part 7: rm -r - remove directories
    1) rm tie_figheter_2 tie_figheter_3
    2) rm -r tie_figheter_2 tie_figheter_3

    //Part 8: The Final Act
    1) cd x_wing
    2) touch the_force.txt
    3) cd ..
    4) rm -r death_star
    5) mv x_wing yavin_4
    6) mv millenium_falcon yavin_4
    //Unsure why: mv x_wing/millenium_falco yavin_4 - didn't work. Looked it up and said you can more 2 directories in that way






