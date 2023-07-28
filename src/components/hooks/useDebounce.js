import { useEffect } from "react"
import { useState } from "react"

export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(
    () => {
      const handler = setTimeout(() => {
        // state update!
        setDebouncedValue(value)
      }, delay)

      
      return () => {
        // 원래 입력된 것은 취소하고 위 setTimeout을 통해 새로 실행
        clearTimeout(handler)
      }
    },
    // setTimeout이 실행되려면 아래 두개가 바뀌면 된다
    [value, delay]
  )

  return debouncedValue
}