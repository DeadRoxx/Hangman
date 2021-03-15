import {useState, useCallback, useEffect} from "react"

let timer: NodeJS.Timeout | null

const useCountdownTimer = (
	start: number,
	onTimeOver?: () => void,
	onTimerUpdate?: () => void
) => {
	const [seconds, setSeconds] = useState(start)

	const startTimer = () => {
		if (timer) clearInterval(timer)

		timer = setInterval(() => {
			setSeconds((seconds) => seconds - 1)
		}, 1000)
	}

	const resetTimer = useCallback(() => {
		console.log("reseting")
		setSeconds(start)
		startTimer()
	}, [start])

	const stop = useCallback(() => {
		if (timer) clearInterval(timer)
	}, [])

	useEffect(() => {
		if (seconds === 0) {
			if (timer) clearTimeout(timer)
			if (typeof onTimeOver === "function") onTimeOver()
		}

		if (typeof onTimerUpdate === "function") onTimerUpdate()
	}, [seconds, onTimeOver, onTimerUpdate])

	useEffect(() => {
		startTimer()

		return () => {
			if (timer) clearTimeout(timer)

			console.log("clearing timer")
		}
	}, [])

	return {
		seconds,
		reset: resetTimer,
		stop
	}
}

export default useCountdownTimer
