/**
 *
 * Hangman is the traditional word-guessing game
 * The user is allowed 8 misses, then the game is over
 * The same letter can't contribute twice to the miss count
 *
 * Author: Stephanie Arteaga
 * Created: 10 April
 * License: Public Domain

 * credit Owen Astrachan
 https://www2.cs.duke.edu/csed/patterns/oofirstyear/hangman/plain/Hangman.java
 */

    /**
     * construct a Hangman game */

    /**
     * clear all variables to beginning-of-game state
     * word shown user will be all blanks, all letters
     * are eligible for "guessability"
     */


	// all letters can be guessed, none are used


	// word shown to user is all blanks //

    /**
     * process a user's guess, update state to reflect
     * the guess. This might change # misses and the
     * word displayed to the user
     *


    /**
     * display (partially guessed) word to user
     */


    /**
     * @return true if word has been guessed, else returne false
     */


    /**
     * plays a game of hangman. Repeated calls of this
     * function will play different games (different words)
     * up to some internal limit based on the number of different
     * words. After all words have been used they'll be repeated
     */



    private  char[] mySecretWord;       // what's shown to the user
    private  int    myMisses;           // # misses so far
    private  int    myWordIndex;        // which word is being guessed
    private  boolean[] myLettersUsed;   // tracks letters guessed/used
