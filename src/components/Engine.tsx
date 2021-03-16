import React, {useCallback, useEffect, useState} from "react"
import axios from "axios"
import Hangman from "./Hangman"
import Letters from "./Letters"
import Timer from "./Timer"
import {useCountdownTimer} from "../hooks"
import WrongLetters from "./WrongLetters"
import HiddenWord from "./HiddenWord"
import GameEndedReason from "../enums"
import GameEndedDialog from "./GamedEndedDialog"

const Engine: React.FC = () => {
	const [gameEnded, setGameEnded] = useState<boolean>(false)
	const [reason, setReason] = useState<GameEndedReason>(GameEndedReason.None)
	const [word, setWord] = useState<string>("_")
	const [letters, setLetters] = useState<string[]>([])
	const [wrongLetters, setWrongLetters] = useState<string[]>([])
	const [guessedLetters, setGuessedLetters] = useState<string[]>([])
	const [toGuessLetters, setToGuessLetters] = useState<string[]>([])
	const {seconds, reset: resetTimer, stop} = useCountdownTimer(100)

	const getWordLetters = () => {
		const chars = []
		for (var i = 97; i < 123; i++) chars.push(String.fromCharCode(i))
		return chars
	}

	const restartGame = useCallback(async () => {
		setReason(GameEndedReason.None)
		setWrongLetters([])
		setGuessedLetters([])
		const randomWord = await getRandomWord()
		setWord(randomWord)
		resetTimer()
		setGameEnded(false)
	}, [resetTimer])

	const onWrongLetter = (letter: string) => {
		setWrongLetters((wrongLetters) => [...wrongLetters, letter])
	}

	const onCorrectLetter = (letter: string) => {
		setGuessedLetters((guesseds) => [...guesseds, letter])
	}
	const onSelectLetter = useCallback(
		(letter: string) => {
			resetTimer()
			if (word.includes(letter)) {
				onCorrectLetter(letter)
				return true
			} else {
				onWrongLetter(letter)
				return false
			}
		},
		[resetTimer, word]
	)

	useEffect(() => {
		if (
			toGuessLetters.length !== 0 &&
			toGuessLetters.length === guessedLetters.length
		) {
			setGameEnded(true)
			setReason(GameEndedReason.Won)
			stop()
		}
	}, [guessedLetters, stop, toGuessLetters.length, word])
	useEffect(() => {
		if (seconds <= 0) {
			setReason(GameEndedReason.Timeout)
			setGameEnded(true)
			stop()
		}
	}, [seconds, stop])

	useEffect(() => {
		if (wrongLetters.length >= 6) {
			setReason(GameEndedReason.Gameover)
			setGameEnded(true)
			stop()
		}
	}, [stop, wrongLetters])

	useEffect(() => {
		const answerLetters: string[] = []

		word.split("").forEach((letter) => {
			if (!answerLetters.includes(letter)) answerLetters.push(letter)
		})

		setToGuessLetters(answerLetters)

		setLetters(getWordLetters())
	}, [word])

	const getRandomWord = async () => {
		const response = await axios.get(
			"https://random-word-api.herokuapp.com/word?number=1"
		)

		return response.data[0]
	}

	useEffect(() => {
		getRandomWord().then((res) => setWord(res))
	}, [])

	return (
		<>
			<section className="content">
				<div>
					<Hangman errors={wrongLetters.length} />
				</div>
				<div>
					<div className="timer">
						<Timer seconds={seconds} />
					</div>
					<div className="wrong-letters">
						<p>Wrong Letters</p>
					</div>
					<WrongLetters wrongLetters={wrongLetters} />
				</div>
			</section>
			<HiddenWord word={word} guessedLetters={guessedLetters} />
			{!gameEnded && (
				<Letters letters={letters} onSelectLetter={onSelectLetter} />
			)}
			<GameEndedDialog
				message={"Timeout!"}
				info={`answer: ${word}`}
				gameEnded={gameEnded && reason === GameEndedReason.Timeout}
				onRestart={restartGame}
			/>
			<GameEndedDialog
				message={"Game over!"}
				info={`answer: ${word}`}
				gameEnded={gameEnded && reason === GameEndedReason.Gameover}
				onRestart={restartGame}
			/>
			<GameEndedDialog
				message={"You won!"}
				gameEnded={gameEnded && reason === GameEndedReason.Won}
				onRestart={restartGame}
			/>
		</>
	)
}

export default Engine
